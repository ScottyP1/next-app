import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { AuthOptions } from 'next-auth';

import bcrypt from 'bcrypt';

import prisma from '@/lib/prismadb';
import { PrismaAdapter } from "@auth/prisma-adapter"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    throw new Error("Invalid credentials");
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user || !user?.hashedPassword) {
                    throw new Error("Invalid credentials");
                }
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );
                if (!isCorrectPassword) {
                    throw new Error("Invalid credentials")
                }
                return user
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secrete: process.env.NEXTAUTH_JWT_SECRET,
    },
    secrete: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }