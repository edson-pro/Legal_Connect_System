import logo from "assets/icons/legal-connect-logo.svg";
import Button from "components/ui/Button";
import CenterContent from "components/wrappers/CenterContent";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { NavBarVariant } from "types";

interface Props {
  variant?: NavBarVariant;
}
const NavBar: FC<Props> = ({ variant = "normal" }) => {
  const navigate = useNavigate();

  return (
    <header
      className={`py-11 w-full top-0 ${variant === "normal" ? "sticky bg-white z-50" : "fixed"}`}
    >
      <CenterContent>
        <div className="flex items-center justify-between text-lg">
          <nav className="flex items-center gap-14">
            <img src={logo} alt="Legal connect logo" className="w-36" />
            <a href="">How it works</a>
            <a href="">FAQ</a>
          </nav>
          <nav className="flex items-center gap-9">
            <select name="language" id="language">
              <option value="eng">Eng</option>
            </select>
            <Button className="px-12 text-base" onClick={() => navigate("/login")}>
              Login
            </Button>
          </nav>
        </div>
      </CenterContent>
    </header>
  );
};
export default NavBar;
