import axios from "axios";
import { LoginDTO } from "types";
import { UserDTO } from "types/api";

export const handleLogin = async (loginInfo: LoginDTO): Promise<UserDTO> => {
  const response = await axios.post("http://api.legalc.net/api/v1/auth/login", loginInfo);
  return response.data.data;
};
