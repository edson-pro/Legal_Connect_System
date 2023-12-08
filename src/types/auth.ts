export interface PasswordInfoFormInputs {
  id_passport_number: string;
  password: string;
  passwordConfirm: string;
}

export interface GeneralInfoFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
}

export interface LawyerLawFirmInfoFormInput {
  law_firm_address: string;
  law_firm_license_number: string;
  law_firm: string;
}

export type LaywerSignupFormStep = 1 | 2 | 3 | 4 | 5;
