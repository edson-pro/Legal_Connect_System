import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { NavBarVariant } from "../../types";
import CenterContent from "../wrappers/CenterContent";
import Button from "./Button";

interface Props {
  variant?: NavBarVariant;
}
const NavBar: FC<Props> = ({ variant = "normal" }) => {
  const navigate = useNavigate();

  return (
    <header className={`py-11 w-full top-0 ${variant === "normal" ? "sticky" : "fixed"}`}>
      <CenterContent>
        <div className="flex items-center justify-between text-lg">
          <nav className="flex items-center gap-14">
            <img src="legal-connect-logo.svg" alt="Legal connect logo" className="w-36" />
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
