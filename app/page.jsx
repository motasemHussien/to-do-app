// "use client";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "./components/user";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import axios from "axios";
import { redirect } from "next/navigation";
// import { useEffect } from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold ">Todo List App</h1>
        <AddTask />
      </div>
      <TodoList />
    </div>
  );
}
