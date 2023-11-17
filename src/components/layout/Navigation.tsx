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
    <>
      <NavBar variant={navbarVariant} />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
};
export default Navigation;
