import { PrismaClient } from "@prisma/client";
//import axios from "axios";
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

export default async function updatePassword(request, response) {
  let message = "";
  const data = request.body.data;
  const id = data.id;

  await prisma.$connect();

  const user = await prisma.users.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();

  const checkPass = await CheckPass(user.password, data.currentPassword);

  if (!checkPass) {
    message = "Senha atual invalida";
    console.log(message);
    return response.status(404).json(message);
  } else {
    const newPass = await bcrypt.hash(data.newPassword, 8);

    await prisma.$connect();
    await prisma.users
      .update({
        where: {
          id: user.id,
        },
        data: {
          password: newPass,
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
  }
  console.log(message);
  response.status(201).json(message);
}

async function CheckPass(password, currentPassword) {
  console.log(password,'--',currentPassword)
  return await bcrypt.compare(currentPassword,password);
}
