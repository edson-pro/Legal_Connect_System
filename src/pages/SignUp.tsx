import clientIcon from "assets/icons/client.svg";
import justiceIcon from "assets/icons/justice.svg";
import Button from "components/ui/Button";
import ClickInputField from "components/ui/ClickInputField";
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
          iconUrl={clientIcon}
          active={selectedRole === "client"}
          onClick={() => setSelectedRole("client")}
        />
        <ClickInputField
          label="Lawyer"
          iconUrl={justiceIcon}
          active={selectedRole === "lawyer"}
          onClick={() => setSelectedRole("lawyer")}
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
