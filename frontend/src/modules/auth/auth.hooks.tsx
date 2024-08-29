import { useState } from "react";
import { Register } from "./auth.type";
import backendApi from "@/lib/api";
import { ErrorValidation } from "@/types/apiResponse";
import { isErrorValidation } from "@/lib/utils";
import { AxiosError } from "axios";
import { useToast } from "@/components/ui/use-toast";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<Register | null>(null);
  const [error, setError] = useState<ErrorValidation[] | null>(null);
  const { toast } = useToast();

  const register = async (val: Register) => {
    setLoading(true);
    try {
      const res = await backendApi.post("/auth/register", val);
      setUser(res.data.data);
      toast({
        title: "Submission Success",
      });
      return res.data.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const err_response = err.response;
        if (
          err_response &&
          err_response.status == 400 &&
          err_response.data?.error &&
          isErrorValidation(err_response.data.error[0])
        ) {
          setError(err_response.data.error);
        }

        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: err_response?.data.message || err?.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: "Internal Server Error",
        });
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
