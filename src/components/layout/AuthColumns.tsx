import heroBg from "assets/images/hero-bg.webp";
import { Outlet } from "react-router-dom";

const AuthColumns = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center justify-center w-full h-screen bg-primary-light-blue">
        <img src={heroBg} alt="Hero background" className="w-11/12" />
      </div>
      <Outlet />
    </div>
  );
};
export default AuthColumns;
