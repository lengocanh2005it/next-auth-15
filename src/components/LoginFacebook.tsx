"use client";
import { login } from "@/actions/auth";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const LoginFacebook = () => {
  return (
    <div
      className="w-full gap-4 hover:cursor-pointer mt-6 h-12
         bg-blue-700 flex rounded-md items-center justify-center"
      onClick={async () => await login("facebook")}
    >
      <FaFacebook className="w-6 h-6 text-white" />
      <p className="text-white">Sign in with Facebook</p>
    </div>
  );
};

export default LoginFacebook;
