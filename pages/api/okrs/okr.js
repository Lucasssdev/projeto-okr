import { PrismaClient } from "@prisma/client";
//import axios from "axios";
const prisma = new PrismaClient();

const createOkr = async (okr) => {
  console.log(okr);
  await prisma.$connect();
  try {
    console.log("555newokr");

    const newOkr = await prisma.okrs.create({
      data: okr,
    });
    console.log(newOkr);
    //await prisma.$disconnect();
    return newOkr;
  } catch (e) {
   
      console.error(e);
      await prisma.$disconnect();
      return "Falha ao criar Okr";
    
  }
};

const getAllOkrs = async (companyId) => {
  await prisma.$connect();

  const sectors = await prisma.sectors.findMany({
    where: {
      company_id: companyId,
    },
    //include:{ company: true,}
  });
  await prisma.$disconnect();
  console.log(sectors);
  return sectors;
};
const getOkr = async (id) => {
  // console.log(id)
  await prisma.$connect();

  const sector = await prisma.sectors.findFirst({
    where: {
      id,
    },
  });

  return sector;
};
const deleteOkr = async (id) => {
  let message = "";
  await prisma.$connect();
  await prisma.sectors
    .delete({
      where: {
        id,
      },
    })
    .then(async () => {
      await prisma.$disconnect();
      message = "Setor deletado";
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      message = "Falha ao deletar";
    });
  return message;
};

const updateOkr = async (sector) => {
  let message = "";
  try {
    await prisma.$connect();
    const newSector = await prisma.sectors.update({
      where: {
        id: sector.id,
      },
      data: {
        name: sector.name,
      },
    });
    console.log(newSector);
    await prisma.$disconnect();
    message = "Alterado com sucesso!";
  } catch {
    async (e) => {
      console.error(e);
      await prisma.$disconnect();
      message = "Falha ao alterar";
      process.exit(1);
    };
  }
  return message;
};

export default async function handler(request, response) {
  console.log(request.body, "REQUEST");
  const method = request.method;

  if (method == "POST") {
    const message = await createOkr(request.body.data);
    return response.status(200).json(message);
  } else if (method == "GET") {
    if (request.query.companyId) {
      const sectors = await getAllOkrs(request.query.companyId);
      response.status(200).json(sectors);
    } else {
      const sector = await getOkr(request.query?.id || null);
      response.status(200).json(sector);
    }
  } else if (method == "DELETE") {
    const message = await deleteOkr(request.query?.id || null);
    response.status(200).json(message);
  } else if (method == "PUT") {
    const message = await updateOkr(request.body);
    response.status(200).json(message);
  } else {
    response.status(404).json("Não encontrado");
  }
}
