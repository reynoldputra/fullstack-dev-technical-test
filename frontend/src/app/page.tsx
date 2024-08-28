"use client";

import { useRegister } from "@/modules/auth/auth.hooks";
import RegisterForm from "./_containers/RegisterForm";
import UserInfo from "./_containers/UserInfo";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const { register, user, error, loading } = useRegister();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="flex justify-center">
        <div className="max-w-[512px] w-full">
          <div className="flex min-h-screen flex-col items-center justify-between py-12 px-1">
            {user ? (
              <div
                className="md:border border-input w-[512px] max-w-full p-6 md:p-12 rounded-md"
                data-aos="fade"
              >
                <UserInfo user={user} />
              </div>
            ) : (
              <div
                className="md:border border-input w-[512px] max-w-full p-6 md:p-12 rounded-md"
                data-aos="fade"
              >
                <RegisterForm
                  handleFunction={register}
                  loading={loading}
                  error={error}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
