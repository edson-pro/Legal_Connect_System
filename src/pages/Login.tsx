import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";

const Login = () => {
  return (
    <div className="flex flex-col justify-center ml-24 w-96">
      <h1 className="text-3xl font-black text-primary-blue">Welcome Back</h1>
      <span className="mt-4">Fill in your credentials</span>
      <form action="" className="flex flex-col mt-8 gap-4">
        <InputField label="Email" placeholder="Enter your email" />
        <InputField label="Password" type="password" placeholder="Enter your password" />
        <span className="mt-2 mb-4 text-primary-blue">Forgot password?</span>
        <Button>Login</Button>
      </form>
      <span className="mt-6 self-center">
        Don't have an account?
        <Link className="text-primary-yellow ml-1" to="/signup">
          Sign up
        </Link>
      </span>
    </div>
  );
};
export default Login;
