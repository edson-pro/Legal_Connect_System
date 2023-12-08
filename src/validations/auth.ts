import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Email is required").email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const generalInfoSignupSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required").email("Enter a valid email"),
  telephone: yup.string().required("Phone number is required"),
});

export const passwordInfoSignupSchema = yup.object({
  id_passport_number: yup.string().required("Id or passport is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be at least 8 characters"),
  passwordConfirm: yup
    .string()
    .required("Password confirm is required")
    .oneOf([yup.ref("password")], "Passwords must much"),
});

export const lawyerLawFirmSignupSchema = yup.object({
  law_firm: yup.string().required("Law firm is required"),
  law_firm_license_number: yup.string().required("Law firm license number is required"),
  law_firm_address: yup.string().required("Law firm address is required"),
});
