import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

export async function POST(req, res) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword
            },
        });
        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json(400);
    }
}