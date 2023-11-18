import Footer from "components/ui/Footer";
import NavBar from "components/ui/NavBar";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { NavBarVariant } from "../../types";

interface Props {
  navbarVariant?: NavBarVariant;
  hideFooter?: boolean;
}

const Navigation: FC<Props> = ({ navbarVariant, hideFooter }) => {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <NavBar variant={navbarVariant} />
      <div className="flex flex-col flex-1 h-full">
        <Outlet />
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
};
export default Navigation;
