import LoginFacebook from "@/components/LoginFacebook";
import LoginGitHub from "@/components/LoginGitHub";
import React from "react";

const SignInPage = () => {
  return (
    <div className="w-full flex mt-20 justify-center">
      <div className="flex flex-col w-[400px]">
        <h1 className="text-4xl w-full text-center font-bold mb-10">Sign In</h1>

        <LoginGitHub />
        <LoginFacebook />
      </div>
    </div>
  );
};

export default SignInPage;
