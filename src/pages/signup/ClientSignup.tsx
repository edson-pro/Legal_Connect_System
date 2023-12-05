/* eslint-disable @typescript-eslint/no-explicit-any */
import lockpadIcon from "assets/icons/lockpad.svg";
import axios, { AxiosError } from "axios";
import Button from "components/ui/Button";
import InputField from "components/ui/inputs/InputField";
import { ChangeEvent, MouseEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const errorToastClasses = "px-12 py-10 border border-red-400/30 h-[60px]";

const ClientSignup = () => {
  const [formStep, setFormStep] = useState(1);

  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    id: "",
    password: "",
  });
  const navigate = useNavigate();

  // const formRef = useRef<HTMLFormElement>(null);

  const handleContinue = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // if (formStep === 1) {
    //   formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    // }
    if (formStep === 2) {
      const userData = {
        names: formData.firstName + " " + formData.lastName,
        city_address: "f93fbe9f-323b-4083-b786-4836577a9eef",
        id_passport_number: formData.id,
        email: formData.email,
        telephone: formData.phoneNumber,
        password: formData.password,
      };

      try {
        await axios.post("http://api.legalc.net/api/v1/users/clients", userData);
        toast.success("user created successfully");
        navigate("/login");
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message, {
            className: errorToastClasses,
          });
        } else
          toast.error("error occured", {
            className: errorToastClasses,
          });
      }
      return;
    }

    setFormStep((prev) => prev + 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const formTitle = formStep === 3 ? "Verify Your Email Address" : "Create account";
  const formSubTitle =
    formStep === 3
      ? "Secure Your Account and Access Exclusive Features"
      : "Fill in your information";

  return (
    <div className="flex flex-col justify-center mt-24 ml-24 w-96">
      {formStep === 3 && (
        <span className="mb-5">
          <img
            src={lockpadIcon}
            alt="lockpad icon"
            className="p-3 bg-primary-light-blue-200 rounded-xl"
          />
        </span>
      )}
      <h1 className="text-3xl font-black text-primary-blue">{formTitle}</h1>
      <span className="max-w-xs mt-4">{formSubTitle}</span>
      {formStep === 3 && (
        <span className="mt-1 text-primary-blue">Janusz fdf Karpel@gmail.com</span>
      )}
      <form action="" className="flex flex-col mt-8 gap-4">
        {formStep === 1 && (
          <>
            <InputField
              label="First name"
              placeholder="Enter your first name"
              name="firstName"
              onChange={handleChange}
            />
            <InputField
              label="Last name"
              placeholder="Enter your last name"
              name="lastName"
              onChange={handleChange}
            />
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />
            <InputField
              label="Phone number"
              placeholder="Enter your phone number"
              name="phoneNumber"
              onChange={handleChange}
            />
          </>
        )}
        {formStep === 2 && (
          <>
            <InputField
              label="Id or passport number"
              placeholder="Enter Id /Passport"
              name="id"
              onChange={handleChange}
            />
            <InputField
              label="Create Password"
              placeholder="Create password"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <InputField label="Confirm Password" type="password" placeholder="Confirm  password" />
          </>
        )}
        <Button onClick={handleContinue} className="mt-4">
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
export default ClientSignup;
