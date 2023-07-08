import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(request) {
  const body = await request.json();
  const { title, userId } = body;

  const task = await prisma.task.create({
    data: {
      title,
      userId,
    },
  });

  return NextResponse.json({ task });
}

export async function GET(request) {
  const userId = request.url.split("=")[1];
  const task = await prisma.task.findMany({
    where: {
      userId,
    },
  });

  return NextResponse.json({ task });
}
export async function PATCH(request) {
  const body = await request.json();
  const { id, title } = body;

  const task = await prisma.task.updateMany({
    where: {
      id,
    },
    data: {
      title,
    },
  });

  return NextResponse.json({ task });
}

export async function DELETE(request) {
  try {
    const id = request.url.split("=")[1];
    await prisma.task.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (error.code === "P2025") {
      return new NextResponse("No user with ID found", { status: 404 });
    }

    return new NextResponse(error.message, { status: 500 });
  }
}
