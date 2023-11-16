import { FC } from "react";
import { Outlet } from "react-router-dom";
import { NavBarVariant } from "../../types";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";

interface Props {
  navbarVariant?: NavBarVariant;
  hideFooter?: boolean;
}

const Navigation: FC<Props> = ({ navbarVariant, hideFooter }) => {
  return (
    <>
      <NavBar variant={navbarVariant} />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
};
export default Navigation;
