"use client";

import { Loader2 } from "lucide-react";

type SubmitButtonProps = {
  title: string;
  buttonType?: "submit" | "reset" | "button" | undefined;
  loadingTitle: string;
  isLoading: boolean;
};

export default function SubmitButton({
  title,
  buttonType = "submit",
  isLoading,
  loadingTitle,
}: SubmitButtonProps) {
  return (
    <button
      type={buttonType}
      disabled={isLoading}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {isLoading && <Loader2 />} {isLoading ? loadingTitle : title}
    </button>
  );
}
