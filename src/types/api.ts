export interface UserDTO {
  accessToken: string;
  email: string;
  id: string;
  is_client: boolean;
  is_lawyer: boolean;
  names: string;
  role: string;
}

export interface ClientDTO {
  names: string;
  email: string;
  password: string;
  telephone: string;
  city_address: string;
  id_passport_number: string;
}

export interface LawyerDTO {
  names: string;
  email: string;
  password: string;
  telephone: string;
  city_address: string;
  id_passport_number: string;
  law_firm: string;
  law_firm_address: string;
  law_firm_license_number: string;
}
