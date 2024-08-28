"use client";

import { useRegister } from "@/modules/auth/auth.hooks";
import RegisterForm from "./_containers/RegisterForm";
import { useEffect } from "react";

export default function Home() {
  const { register, user, error, loading } = useRegister();

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <RegisterForm
          handleFunction={register}
          loading={loading}
          error={error}
        />
      </div>
    </main>
  );
}
