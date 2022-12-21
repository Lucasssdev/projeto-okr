import { PrismaClient } from "@prisma/client";
//import axios from "axios";
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const createUser = async (users) => {
  
  let message = [];
  let companyId = users.companyId ?? "";

  await prisma.$connect();

  if (users.adm) {
    try {
      users.adm.password = await bcrypt.hash(users.adm.password, 8);
      const { name, email, cpf, tel, password, permission } = users.adm;
      const newAdm = await prisma.users.create({
        data: {
          name,
          email,
          cpf,
          tel,
          password,
          permission,
          company: {
            create: {
              name: users.adm.company,
            },
          },
        },
      });

      message[0] = "Admin cadastrado com sucesso! ";
      console.log(message);
      companyId = newAdm.companyId;
      await prisma.$disconnect();
    } catch {
      async (e) => {
        console.error(e);
        message[0] = "falha ao cadastrar Admin ! ";
        console.log(message);
        await prisma.$disconnect();
        process.exit(1);
      };
    }
  }
  if (users.team.length > 0) {
    users.team.map(async (user, index) => {
      const newUser = {
        email: user.email,
        nome: user.email.split('@')[0],
        company: companyId,
        password: await bcrypt.hash("okr", 4),
        permission: "3",
      };

      await prisma.users
        .create({
          data: {
            email: newUser.email,
            nome: newUser.name,
            companyId: newUser.company,
            password: newUser.password,
            permission: newUser.permission,
          },
        })
        .then(async () => {
          message[index + 1] = newUser.email + " cadastrado com sucesso! ";
          console.log(message);
          await prisma.$disconnect();
        })
        .catch(async (e) => {
          console.error(e);
          message[index + 1] = "Falha ao cadastrar " + newUser.email;
          console.log(message);
          await prisma.$disconnect();
          process.exit(1);
        });
    });
  }

  return message;
};

const getAllUsers = async (companyId) => {
  await prisma.$connect();
  console.log("pegando users", companyId);
  const users = await prisma.users.findMany({
    where: {
      companyId: companyId,
    },
    //include:{ company: true,}
  });
  //await prisma.$disconnect();
  
  return users;
};
const getUser = async (id) => {
  // console.log(id)
  await prisma.$connect();

  const user = await prisma.users.findFirst({
    where: {
      id,
    },
  });

  return user;
};
const deleteUser = async (id) => {
  let message = ""
  
  await prisma.$connect();    
  await prisma.users.delete({      
       where: {         
          id      
      }     
  })     
  .then(async () => {         
      console.log("Response from prisma ")         
      await prisma.$disconnect() 
      message =  'Usuario deletado' 
      console.log('---',message)  
  }).catch(async (e) => {         
      console.error(e)         
      await prisma.$disconnect()         
      
      message =  'Falha ao deletar' 
      console.log('---',message)  
  })          
      
  return message
};
const updateUser = async ( user ) => {
  let message = ""
  const updateData = user.data
  for(let data in updateData){
    if(updateData[data] === null){
      delete updateData[data];
    }
    if(data == 'password')
      updateData[data] = await bcrypt.hash(data, 8)
  }
  await prisma.$connect();
   await prisma.users.update({
    where: {
      id: user.id
    },
    data: {
      ...updateData
    }
  })
  .then(async () => {
      console.log("Response from prisma ")
      await prisma.$disconnect()
      message = 'Alterado com sucesso'
  })
  .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      message = 'Falha ao alterar'
      process.exit(1)
      
  })
  return message
}

export default async function handler(request, response) {
  console.log(request.body, "REQ");
  const method = request.method;

  if (method == "POST") {
    const message = await createUser(request.body);
    response.status(200).json(message);
  } else if (method == "GET") {
    if (request.body.companyId) {
      const users = await getAllUsers(request.body.companyId);
      response.status(200).json(users);
    } else {
      const user = await getUser(request.body.id);
      response.status(200).json(user);
    }
  } else if (method == "DELETE") {
    const message = await deleteUser(request.body.id);
    response.status(200).json(message);
  } else if (method == "PUT") {
    const message = await updateUser(request.body);
    response.status(200).json(message);
  } else {
    response.status(404).json("Não encontrado");
  }
}
