import { useState } from "react";
import { Register } from "./auth.type";
import backendApi from "@/lib/api";
import { ErrorValidation } from "@/types/apiResponse";
import { isErrorValidation } from "@/lib/utils";
import { AxiosError } from "axios";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<Register | null>(null);
  const [error, setError] = useState<ErrorValidation[] | null>(null);

  const register = async (val: Register) => {
    setLoading(true);
    try {
      const res = await backendApi.post("/auth/register", val);
      setUser(res.data);

      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const err_response = err.response;
        if (
          err_response &&
          err_response.status == 400 &&
          err_response.data.error[0] &&
          isErrorValidation(err_response.data.error[0])
        ) {
          setError(err_response.data.error);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    user,
    error,
    register,
  };
};

export { useRegister };
