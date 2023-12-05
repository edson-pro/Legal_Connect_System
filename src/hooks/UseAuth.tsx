import { handleLogin } from "api/auth";
import { useMutation } from "react-query";

const useAuth = () => {
  const loginMutation = useMutation(handleLogin, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return { loginMutation };
};
export default useAuth;
