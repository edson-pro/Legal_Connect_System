import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center ml-24 w-96">
      <h1 className="text-3xl font-black text-primary-blue">Create account</h1>
      <span className="mt-4">Choose account type</span>
      <form action="" className="flex flex-col gap-5 mt-8">
        <div className="flex items-center gap-6 px-6 py-5 border border-gray-100 rounded-xl bg-primary-light-blue hover:bg-primary-blue/10">
          <span className="inline-block p-3 bg-primary-blue rounded-xl">
            <img src="/icons/justice.svg" alt="law icon" />
          </span>
          <span className="text-lg">Lawyer</span>
        </div>
        <div className="relative overflow-hidden border border-gray-100 bg-primary-light-blue rounded-xl hover:bg-primary-blue/10">
          <input
            type="text"
            readOnly
            name=""
            className="absolute z-10 block w-full h-full bg-transparent outline-none rounded-3xl m x-4 cursor-pointer"
          />
          <div className="flex items-center px-6 py-5  gap-7">
            <span className="inline-block p-3 bg-primary-blue rounded-xl">
              <img src="/icons/justice.svg" alt="law icon" />
            </span>
            <span className="text-lg">Client</span>
          </div>
        </div>

        <Button className="mt-8">Continue</Button>
      </form>
      <span className="self-center mt-6">
        Already have an account?
        <Link className="ml-1 text-primary-yellow" to="/login">
          Login
        </Link>
      </span>
    </div>
  );
};

export default SignUp;
