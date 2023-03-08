import { PrismaClient } from "@prisma/client";
import { token } from "../../../src/jwt";

const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

async function makeFirstLogin(id) {

  const user = await prisma.users.findFirst({
    where: {
      id: id 
    },
   
    include: { company: true},
  });
 
 
  if (!user) {
    console.log('nao deu')
    return "E-mail ou senhas invalidos";
  }
  const newToken = await token(user);
  console.log(newToken,'TOKEN')
  return newToken;
}

async function makeLogin(login) {

  const user = await prisma.users.findFirst({
    where: {
      email: login.email 
    },
    include: {company: true}
 
  });
  const checkPass = await CheckPass(login.password, user.password)
  if (!user || !checkPass) {
    console.log('nao deu')
    return "E-mail ou senhas invalidos";
  }
  const newToken = await token(user.id, user.name);
  console.log(newToken,'TOKEN')
  return {newToken, user};
}

async function CheckPass(loginPass, passUser){
    return await bcrypt.compare(loginPass,passUser);
    
}
export default async function handler(request, response) {
  console.log(request.body, "REQ");
  const method = request.method;

  if (method == "POST") {
    if(request.body.data.email){
    const login = await makeLogin(request.body.data);
    console.log(login)
    response.status(201).json(login);
  }else{
    const login = await makeFirstLogin(request.body.data);
    console.log(login)
    response.status(201).json(login);
  }

  } else {
    response.status(404).json("Não encontrado");
  }
}
