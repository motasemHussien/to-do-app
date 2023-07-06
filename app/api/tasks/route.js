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

// export async function DELETE(request) {
//   const body = await request.json();
//   const { id } = body;
//   await prisma.task.deleteMany({
//     where: {
//       id,
//     },
//   });
//   return new NextResponse("Task has been deleted", { status: 200 });
// }
// export async function DELETE(request,{}) {
//   try {
//     const body = await request.json();
//     const { id } = body;
//     await prisma.task.delete({
//       where: { id },
//     });

//     return new NextResponse(null, { status: 204 });
//   } catch (error) {
//     if (error.code === "P2025") {
//       return new NextResponse("No user with ID found", { status: 404 });
//     }

//     return new NextResponse(error.message, { status: 500 });
//   }
// }
export async function DELETE(request, { params }) {
  try {
    console.log("params", params);
    console.log("request", request.url.split("=")[1]);
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
// export async function DELETE(request) {
//   try {
//     console.log("el request", request); // Log the request object to check its content
//     console.log("el typeof request", typeof request);

//     const payload = await request.json();
//     console.log(3333, payload); // Log the payload to check its content

//     const { id } = payload;
//     console.log("el id", id);
//     console.log("el typeof ", typeof id);

//     await prisma.task.delete({
//       where: { id },
//     });

//     return new NextResponse(null, { status: 204 });
//   } catch (error) {
//     console.log("error", error);
//     if (error.code === "P2025") {
//       return new NextResponse("No user with ID found", { status: 404 });
//     }

//     return new NextResponse(error.message, { status: 500 });
//   }
// }
// export async function DELETE(request) {
//   try {
//     const { id } = await request.json();
//     console.log(111, id);
//     console.log(222, typeof id);
//     await prisma.task.delete({
//       where: { id },
//     });

//     return new NextResponse(null, { status: 204 });
//   } catch (error) {
//     if (error.code === "P2025") {
//       return new NextResponse("No user with ID found", { status: 404 });
//     }

//     return new NextResponse(error.message, { status: 500 });
//   }
// }
