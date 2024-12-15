"use client";
import { logout } from "@/actions/auth";
import React from "react";

const Logout = () => {
  return (
    <div
      className="bg-gray-600 text-white text-sm px-4 py-2 rounded-md cursor-pointer"
      onClick={async () => await logout()}
    >
      Log out
    </div>
  );
};

export default Logout;
