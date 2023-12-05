import { createNewClient, handleLogin } from "api/auth";
import { useMutation } from "react-query";

const useAuth = () => {
  const loginMutation = useMutation(handleLogin);
  const createClientMutation = useMutation(createNewClient);

  return { loginMutation, createClientMutation };
};
export default useAuth;
