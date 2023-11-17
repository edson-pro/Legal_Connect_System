import Button from "components/ui/Button";
import InputField from "components/ui/InputField";
import { Link } from "react-router-dom";

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
