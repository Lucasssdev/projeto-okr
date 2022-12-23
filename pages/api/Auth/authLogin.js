import { PrismaClient } from "@prisma/client";
import { token } from "../../../src/jwt";

const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

async function makeLogin(login) {
  console.log(login.data.email);
  const user = await prisma.users.findFirst({
    where: {
      email: login.data.email,
    },
    include: { company: true },
  });
  console.log(user);
  const checkPass = await CheckPass(login.data.password, user.password)
  console.log(checkPass,'*******')
  if (!user || !checkPass) {
    console.log('nao deu')
    return "E-mail ou senhas invalidos";
  }
  const newToken = await token(user);
  console.log(newToken,'TOKEN')
  return newToken;
}

async function CheckPass(loginPass, passUser){
    return await bcrypt.compare(loginPass,passUser);
    
}
export default async function handler(request, response) {
  console.log(request, "REQ");
  const method = request.method;

  if (method == "POST") {
    const login = await makeLogin(request.body);
    console.log(login)
    response.status(201).json(login);
  } else {
    response.status(404).json("Não encontrado");
  }
}
