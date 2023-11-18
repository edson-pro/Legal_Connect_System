import ClientIcon from "assets/icons/ClientIcon";
import JusticeIcon from "assets/icons/JusticeIcon";
import Button from "components/ui/Button";
import ClickInputField from "components/ui/inputs/ClickInputField";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<"client" | "lawyer">();

  const handleNavigation = () => {
    if (selectedRole === "client") return navigate("client");
    if (selectedRole === "lawyer") return navigate("lawyer");
  };
  return (
    <div className="flex flex-col justify-center ml-24 w-96">
      <h1 className="text-3xl font-black text-primary-blue">Create account</h1>
      <span className="mt-4">Choose account type</span>
      <form action="" className="flex flex-col mt-8 gap-5">
        <ClickInputField
          label="Client"
          active={selectedRole === "client"}
          onClick={() => setSelectedRole("client")}
          Icon={ClientIcon}
        />
        <ClickInputField
          label="Lawyer"
          active={selectedRole === "lawyer"}
          onClick={() => setSelectedRole("lawyer")}
          Icon={JusticeIcon}
        />
        <Button className="mt-8" onClick={handleNavigation}>
          Continue
        </Button>
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
