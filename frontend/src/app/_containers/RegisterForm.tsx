import InputRadio from "@/components/InputRadio";
import InputText from "@/components/InputText";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Register } from "@/modules/auth/auth.type";
import { ErrorValidation } from "@/types/apiResponse";

type RegisterFormProps = {
  handleFunction: (val: Register) => unknown;
  loading: boolean;
  error?: ErrorValidation[] | null
};

const RegisterForm = ({handleFunction, error, loading}: RegisterFormProps) => {
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
    handleFunction(value)
  };

  return (
    <div className="border border-input w-[448px] max-w-full p-12 rounded-md">
      {error && error.toString()}
      <div className="w-full flex justify-center">
        <h1 className="text-2xl font-bold">Register</h1>
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
          />
          <InputText label="Name" name="name" placeholder="Reynold Putra" />
          <InputText
            label="Email"
            name="email"
            placeholder="reynoldputra1@gmail.com"
            type="email"
          />
          <InputText label="Password" name="password" type="password" />
          <InputText
            label="Phone Number"
            name="no_telp"
            placeholder="+62812345678"
          />
          <InputRadio label="Gender" name="gender" options={genderOptions} />
          <InputRadio label="Role" name="user_type" options={userTypeOptions} />
          <Button type="submit" disabled={loading}>{loading ? "Sending" : "Submit"}</Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm
