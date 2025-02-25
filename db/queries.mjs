import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function registerUser(first_name, last_name, username, hashedPassword) {
    try {  
      await prisma.users.create({
        data: {
          first_name,
          last_name,
          username,
          password: hashedPassword,
          membership: false,
        },
      });
       } catch (error) {
          console.error(error);
    }
  };

async function getUsernames() {
  try {
    const users = await prisma.users.findMany();
    return users;
  } catch (error) {
    console.error(error);
  }
}

async function getMessages() {
  try {
    const messages = await prisma.messages.findMany();
    return messages;
  } catch {
    console.error(error);
  }
}

async function postMessage(message_title, message_text, username) {
  const user = await prisma.users.findUnique({
    where: { username },
    select: { id: true }
  });

  if (!user) {
    throw new Error("User not found");
  }


  await prisma.messages.create({
    data: {
      message_title,
      message_text,
      authorId: user.id,
    },
  })
};

export { registerUser, getUsernames, getMessages, postMessage };