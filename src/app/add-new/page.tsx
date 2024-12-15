"use server";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const AddNewPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex gap-2 mt-10 flex-col items-center justify-center">
      <h1 className="text-2xl">Add New</h1>
      <p className="text-xl">{session.user.email}</p>
    </div>
  );
};

export default AddNewPage;
