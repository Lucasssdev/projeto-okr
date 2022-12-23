import { PrismaClient } from "@prisma/client";
//import axios from "axios";
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const getCompany = async (id) => {
  // console.log(id)
  await prisma.$connect();

  const company = await prisma.company.findFirst({
    where: {
      id,
    },
  });

  return company;
};

const updateCompany = async (company) => {
  let message = "";

  if (company.data == "password")
    company.data = await bcrypt.hash(company.data, 8);

  await prisma.$connect();
  await prisma.company
    .update({
      where: {
        id: company.id,
      },
      data: {
        ...company.data,
      },
    })
    .then(async () => {
      console.log("Response from prisma ");
      await prisma.$disconnect();
      message = "Alterado com sucesso";
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      message = "Falha ao alterar";
      process.exit(1);
    });
  return message;
};

export default async function handler(request, response) {
  console.log(request.body, "REQ");
  const method = request.method;

  if (method == "GET") {
    const user = await getCompany(request.body.id);
    response.status(200).json(user);
  } else if (method == "PUT") {
    const message = await updateCompany(request.body);
    response.status(200).json(message);
  } else {
    response.status(404).json("Não encontrado");
  }
}
