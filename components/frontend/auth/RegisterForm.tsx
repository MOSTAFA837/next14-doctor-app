"use client";

import { RegisterInputProps } from "@/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../formInputs/TextInput";
import SubmitButton from "../formInputs/SubmitButton";
import { useState } from "react";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();

  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextInput
            label="Full Name"
            register={register}
            name="fullName"
            errors={errors}
          />

          <TextInput
            label="Phone Number"
            register={register}
            name="phone"
            type="tel"
            errors={errors}
          />

          <TextInput
            label="Email"
            register={register}
            name="email"
            errors={errors}
          />

          <TextInput
            label="Password"
            register={register}
            name="password"
            type="password"
            errors={errors}
          />

          <div>
            <SubmitButton
              title="Create Account"
              isLoading={isLoading}
              loadingTitle="Creating please wait.."
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
