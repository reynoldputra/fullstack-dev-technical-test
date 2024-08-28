import { Prisma, PrismaClient, GenderType, UserType } from '@prisma/client';

import { hashPassword } from '../../common/helpers/hash.helper';
import userData from './data/users.json';

const prisma = new PrismaClient();

export default async function usersSeeder() {
  for (const idx in userData) {
    const user = userData[idx];
    const userUpsert: Prisma.UsersCreateInput = {
      name: user.name,
      username: user.username,
      email: user.email,
      password: await hashPassword(user.password),
      gender: user.gender == "FEMALE" ? GenderType.FEMALE : GenderType.MALE,
      user_type: user.user_type == "USER" ? UserType.USER : UserType.AUTHOR,
      no_telp: user.no_telp,
    };

    await prisma.users.create({
      data: userUpsert,
    });
  }
  console.log('Users seeded successfully');
}
