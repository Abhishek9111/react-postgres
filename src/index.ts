import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(
//   email: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   let res = await prisma.user.create({
//     data: {
//       email,
//       password,
//       firstName,
//       lastName,
//     },
//   });
//   console.log("response", res);
// }

// insertUser("abhishek@gmail.com", "1234", "Abhishek", "Kapoor");

// interface UpdateParams {
//   firstName: string;
//   lastName: string;
// }

// async function updateUser(
//   email: string,
//   { firstName, lastName }: UpdateParams
// ) {
//   const res = await prisma.user.update({
//     where: { email },
//     data: {
//       firstName,
//       lastName,
//     },
//   });
//   console.log("response", res);
// }

// updateUser("abhishek@gmail.com", { firstName: "Kapoor", lastName: "Abhishek" });

async function getUser(email: string) {
  const res = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  console.log(res);
}
getUser("abhishek@gmail.com");
