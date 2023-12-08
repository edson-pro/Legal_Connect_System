import { createNewClient, createNewLawyer, handleLogin } from "api/auth";
import { useMutation } from "react-query";

const useAuth = () => {
  const loginMutation = useMutation(handleLogin);
  const createClientMutation = useMutation(createNewClient);
  const createLawyerMutation = useMutation(createNewLawyer);

  return { loginMutation, createClientMutation, createLawyerMutation };
};
export default useAuth;
