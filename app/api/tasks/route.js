import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(request) {
  const body = await request.json();
  const { title } = body;
  console.log(body);

  // if (!name || !email || !password) {
  //   return new NextResponse("Missing Fields", { status: 400 });
  // }

  const task = await prisma.task.create({
    data: {
      title,
      userId: "64a1fb888c73c71cb86d568f",
    },
  });

  return NextResponse.json({ task });
}

export async function GET() {
  const task = await prisma.task.findMany({
    where: {
      userId: "64a1fb888c73c71cb86d568f",
    },
  });

  return NextResponse.json({ task });
}
export async function PATCH() {
  const task = await prisma.task.update({
    where: {
      id: "64a3392cad1a8077eb73ce54",
    },
    data: {
      title: "pass the title here",
    },
  });

  return NextResponse.json({ task });
}

export async function DELETE() {
  const task = await prisma.task.delete({
    where: {
      id: "64a3392cad1a8077eb73ce54",
    },
  });
  return new NextResponse("Task has been deleted", { status: 200 });
}
