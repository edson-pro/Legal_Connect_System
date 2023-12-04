import axios from "axios";
import { LoginDTO } from "types";

export const login = async (loginInfo: LoginDTO) => {
  const response = await axios.post("http://api.legalc.net", loginInfo);
  return response.data.data;
};
