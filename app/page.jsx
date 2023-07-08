import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

import { redirect } from "next/navigation";
import Header from "./components/Header";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <Header />
        <AddTask session={session} />
      </div>
      <TodoList session={session} />
    </div>
  );
}
