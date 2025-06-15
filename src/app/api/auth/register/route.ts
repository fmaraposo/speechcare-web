import { Role } from "@prisma/client";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

import { addDays, getCurrentDate } from "@/lib/helpers/date-helper";
import prisma from "@/lib/prisma/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    console.log("Prisma User", prisma.user);
    console.log("Email Recibido", email);
    const existingUser = await prisma.user?.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: Role.PATIENT,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
        expiresAt: addDays(getCurrentDate(), 7),
      },
    });

    return NextResponse.json({ message: "User created", user: { id: user.id, email: user.email } });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
