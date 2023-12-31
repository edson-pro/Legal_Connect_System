import { LoginDTO } from "types";
import { ClientDTO, LawyerDTO, UserDTO } from "types/api";
import appAxios from "./axios";

export const handleLogin = async (loginInfo: LoginDTO): Promise<UserDTO> => {
  const response = await appAxios.post("/auth/login", loginInfo);
  return response.data.data;
};

export const createNewClient = async (clientData: ClientDTO): Promise<ClientDTO> => {
  const response = await appAxios.post("/users/clients", clientData);
  return response.data.data;
};

export const createNewLawyer = async (lawyerData: LawyerDTO): Promise<LawyerDTO> => {
  const response = await appAxios.post("/users/lawyers", lawyerData);
  return response.data.data;
};
