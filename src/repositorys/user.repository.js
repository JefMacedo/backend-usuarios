import { prisma } from "../services/prisma";

export const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      createdAt: true,
      updateAt: true,
      password: false,
    },
  });

  return user;
};

export const getAll = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      createdAt: true,
      updateAt: true,
      password: false,
    },
  });

  return users;
};

export const getById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      createdAt: true,
      updateAt: true,
      password: false,
    },
  });

  return user;
};

export const updateUser = async (id, data) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      createdAt: true,
      updateAt: true,
      password: false,
    },
  });
  return user;
};

export const deleteUser = async (id) => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
  return;
};
