import LoginForm from "@/components/frontend/auth/LoginForm";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen py-8">
      <div className=" w-full max-w-5xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <LoginForm />
      </div>
    </div>
  );
}
