"use client";
import { login } from "@/actions/auth";
import { FaGithub } from "react-icons/fa";

const LoginGitHub = () => {
  return (
    <div
      className="w-full gap-4 hover:cursor-pointer mt-6 h-12
     bg-slate-700 flex rounded-md items-center justify-center"
      onClick={async () => await login("github")}
    >
      <FaGithub className="w-6 h-6 text-white" />
      <p className="text-white">Sign in with Github</p>
    </div>
  );
};

export default LoginGitHub;
