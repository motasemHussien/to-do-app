"use client";
import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-2xl font-bold ">Todo List App</h1>
      <button
        onClick={() => signOut()}
        type="submit"
        className="flex  justify-center rounded-md bg-red-600 px-3 py-1.5 text-1xl  font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
