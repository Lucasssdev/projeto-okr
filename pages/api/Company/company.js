import { PrismaClient } from "@prisma/client";
//import axios from "axios";
const prisma = new PrismaClient();

const getCompany = async (id) => {
  // console.log(id)
  await prisma.$connect();

  const company = await prisma.company.findFirst({
    where: {
      id,
    },
  });
  console.log(company)
  return company;
};

const updateCompany = async (company) => {
  let message = "";
  await prisma.$connect();
  await prisma.company
    .update({
      where: {
        id: company.id,
      },
      data: {
        [Object.keys(company)[1]] : company[[Object.keys(company)[1]]],
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
  console.log(request.query, "REQQQ");
  const method = request.method;

  if (method == "GET") {
    const user = await getCompany(request.query.id);
    response.status(200).json(user);
  } else if (method == "PUT") {
    const message = await updateCompany(request.body.data);
    response.status(200).json(message);
  } else {
    response.status(404).json("Não encontrado");
  }
}
