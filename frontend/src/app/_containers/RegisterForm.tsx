import InputRadio from "@/components/InputRadio";
import InputText from "@/components/InputText";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Register } from "@/modules/auth/auth.type";
import { ErrorValidation } from "@/types/apiResponse";
import { useEffect } from "react";

type RegisterFormProps = {
  handleFunction: (val: Register) => unknown;
  loading: boolean;
  error?: ErrorValidation[] | null;
};

const RegisterForm = ({
  handleFunction,
  error,
  loading,
}: RegisterFormProps) => {
  const form = useForm<Register>({
    defaultValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      no_telp: "",
      gender: "MALE",
      user_type: "USER",
    },
  });

  const genderOptions = [
    {
      label: "Male",
      value: "MALE",
    },
    {
      label: "Female",
      value: "FEMALE",
    },
  ];

  const userTypeOptions = [
    {
      label: "User",
      value: "USER",
    },
    {
      label: "Author",
      value: "AUTHOR",
    },
  ];

  const onSubmit = (value: Register) => {
    handleFunction(value);
  };

  function isRegisterKey(key: string): key is keyof Register {
    return Object.keys(form.getValues()).includes(key);
  }

  useEffect(() => {
    if (error) {
      for (const err of error) {
        if (isRegisterKey(err.property)) {
          form.setError(err.property, {
            type: "custom",
            message: err.constraints[Object.keys(err.constraints)[0]],
          });
        }
      }
    }
  }, [error]);

  return (
    <>
      <div className="w-full flex justify-center">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Register
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-12"
        >
          <InputText
            label="Username"
            name="username"
            placeholder="reynoldputra"
            description="Username must contain alphabets without whitespace"
          />
          <InputText label="Name" name="name" placeholder="Reynold Putra" />
          <InputText
            label="Email"
            name="email"
            placeholder="reynoldputra1@gmail.com"
            type="email"
          />
          <InputText
            label="Password"
            name="password"
            type="password"
            description="Password must contain, uppercase letters, lowercase letters, simbols, numbers, and  at least 8 character long"
          />
          <InputText
            label="Phone Number"
            name="no_telp"
            placeholder="+62812345678"
          />
          <InputRadio label="Gender" name="gender" options={genderOptions} />
          <InputRadio label="Role" name="user_type" options={userTypeOptions} />
          <Button type="submit" disabled={loading}>
            {loading ? "Sending" : "Submit"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default RegisterForm;
