import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "./app/lib/db";
import bcryptjs from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Prisma } from "@prisma/client";
import authConfig from "./auth.config"

async function getUserFromDb(username: string, pw: string) {
  try {
    const foundUser = await prisma.user.findFirst({
      "where": {
          username: username
      }
    })
    if (foundUser) {
      const passwordMatch = await bcryptjs.compare(pw, foundUser.password)
      if (passwordMatch) {
        return foundUser;
      }
    }
  } catch {
    return;
  }
}
async function getUserId(username: string) {
  const foundUser = await prisma.user.findUnique({
    "where": {
      username: username
    }
  })
  if (foundUser) {
    return foundUser.id;
  } else {
    return null;
  }
}
async function saltAndHashPassword(plaintextPassword: string) {
  const saltRounds = 10;
  const hashedPassword = await bcryptjs.hash(plaintextPassword, saltRounds)
  return hashedPassword;
}
export async function register(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const hashedPassword = await saltAndHashPassword(password);
  const checkForUser = await prisma.user.count({
    "where": {
        username: username
    }
  })
  if (checkForUser != 0) {
    throw new Error("This user already exists. Please log in.")
  }
  try {
    const createdUser = await prisma.user.create({
      "data": {
        username: username,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName
      }
    })
    return createdUser;
  } catch {
    throw new Error("Problem creating user.")
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: '/login'
  },
  providers: [Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      username: {},
      password: {},
    },
    authorize: async (credentials) => {
      let user = null

      // logic to salt and hash password
      const password = credentials.password as string;

      user = await getUserFromDb(credentials.username as string, password)

      if (!user) {
        // No user found, so this is their first attempt to login
        // meaning this is also the place you could do registration
        return null;
      }

      // return user object with their profile data
      return user
    },
  })],
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  }
})