import axios from "axios";

const appAxios = axios.create({
  baseURL: "http://api.legalc.net/api/v1",
});

export default appAxios;
