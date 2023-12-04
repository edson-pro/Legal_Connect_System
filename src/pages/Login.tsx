import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError } from "axios";
import Button from "components/ui/Button";
import InputField from "components/ui/inputs/InputField";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginDTO } from "types";
import { loginSchema } from "validations/auth";

import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Todo: refactor the following implementation to use react query
  const onValidSubmit = async (formData: LoginDTO): Promise<void> => {
    try {
      setLoading(true);
      await axios.post("http://api.legalc.net/api/v1/auth/login", formData);
      navigate("lawyer-dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message, {
          className: "px-12 py-10 border border-red-400/30 h-[60px]",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center ml-24 w-96">
      <h1 className="text-3xl font-black text-primary-blue">Welcome Back</h1>
      <span className="mt-4">Fill in your credentials</span>
      <form className="flex flex-col mt-8 gap-4" onSubmit={handleSubmit(onValidSubmit)}>
        <InputField
          label="Email"
          placeholder="Enter your email"
          errorMessage={errors.email?.message}
          error={!!errors.email}
          {...register("email")}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          errorMessage={errors.password?.message}
          error={!!errors.password}
          {...register("password")}
        />
        <span className="mt-2 mb-4 text-primary-blue">Forgot password?</span>
        <Button loading={loading}>Login</Button>
      </form>
      <span className="self-center mt-6">
        Don't have an account?
        <Link className="ml-1 text-primary-yellow" to="/signup">
          Sign up
        </Link>
      </span>
    </div>
  );
};
export default Login;
