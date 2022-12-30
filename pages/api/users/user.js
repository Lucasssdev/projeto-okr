import { PrismaClient } from "@prisma/client";
//import axios from "axios";
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const crypto = require("crypto");


const createUser = async (users) => {
  let message = "";

  await prisma.$connect();

  if (users.adm) {
    console.log(users.adm);
    try {
      users.adm.password = await bcrypt.hash(users.adm.password, 8);
      const newAdm = await prisma.users.create({
        data: {
          name: users.adm.name,
          email: users.adm.email,
          cpf: users.adm.cpf,
          tel: users.adm.tel,
          password: users.adm.password,
          permission: users.adm.permission,
          company: {
            create: {
              name: users.adm.company,
            },
          },
        },
      });

      console.log(message);

      await prisma.$disconnect();
      return newAdm;
    } catch {
      async (e) => {
        console.error(e);
        message = "falha ao cadastrar Admin!";
        console.log(message);
        await prisma.$disconnect();
        process.exit(1);
      };
    }
  }
  if (users.team) {
   //console.log(users.companyId);
    let registered = 0
    try {
     
      users.team.map(async (email) => {
        console.log(email);
        const newUser = {
          email: email,
          name: email.split("@")[0],
          company: users.companyId,
          password: crypto.randomBytes(4).toString("hex"),
          permission: "3",
        };

         await prisma.users.create({
          data: {
            email: newUser.email,
            name: newUser.name,
            companyId: newUser.company,
            password: newUser.password,
            permission: newUser.permission,
          },
        });

       registered++
        await prisma.$disconnect();
      });
    
      //obs: nao está retornando UsersTeam
      return registered+' usuários criados com sucesso'
    } catch {
      async (e) => {
        console.error(e);
        message = "Falha ao cadastrar ";
        console.log(message);
        await prisma.$disconnect();
        process.exit(1);
      };
    }
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
  await prisma.$disconnect();

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
  await prisma.$disconnect();

  return user;
};
const deleteUser = async (id) => {
  let message = [];
  try {
    await prisma.$connect();
    const user = await prisma.users.delete({
      where: {
        id,
      },
    });
    message[0] = "Usuário " + user.name + " deletado com sucesso!";

    console.log(user);
    if (user.permission == "1") {
      try {
        const company = await prisma.company.delete({
          where: {
            id: user.companyId,
          },
        });
        message[1] = company.name + " deletada com sucesso junto ao admin!";
      } catch {
        async (e) => {
          console.error(e);
          await prisma.$disconnect();

          message[1] = "Falha ao deletar empresa";
        };
      }
    }
  } catch {
    async (e) => {
      console.error(e);
      await prisma.$disconnect();

      message[0] = "Falha ao deletar";
      console.log("---", message);
    };
  }

  return message;
};
const updateUser = async (user) => {
  let message = "";
  await prisma.$connect();
  await prisma.users
    .update({
      where: {
        id: user.id,
      },
      data: {
        [Object.keys(user)[1]]: user[[Object.keys(user)[1]]],
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

  if (method == "POST") {
    const message = await createUser(request.body.data);
    console.log(message, "****");
    response.status(200).json(message);
  } else if (method == "GET") {
    if (request.query.companyId) {
      const users = await getAllUsers(request.query.companyId);
      response.status(200).json(users);
    } else {
      const user = await getUser(request.query.id);
      response.status(200).json(user);
    }
  } else if (method == "DELETE") {
    const message = await deleteUser(request.body.id);
    response.status(200).json(message);
  } else if (method == "PUT") {
    const message = await updateUser(request.body.data);
    response.status(200).json(message);
  } else {
    response.status(404).json("Não encontrado");
  }
}
