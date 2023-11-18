import MessageIcon from "assets/icons/MessageIcon";
import NotificationIcon from "assets/icons/NotificationIcon";
import logo from "assets/icons/legal-connect-logo.svg";
import CenterContent from "components/wrappers/CenterContent";
import { Link, NavLink } from "react-router-dom";

const navlinks = [
  { label: "Home", link: "" },
  { label: "Find laywer", link: "laywers" },
  { label: "Get legal notice", link: "legal-notice" },
  { label: "Go pro", link: "pro" },
];

const ClientPortalNavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-5 bg-white shadow">
      <CenterContent>
        <div className="flex items-center justify-between text-lg">
          <nav className="flex items-center gap-14">
            <Link to="/">
              <img src={logo} alt="Legal connect logo" className="w-36" />
            </Link>
            {navlinks.map((navLink, index) => (
              <NavLink key={index} to={`/client-portal/${navLink.link}`}>
                {navLink.label}
              </NavLink>
            ))}
          </nav>
          <nav className="flex items-center gap-11">
            <div className="relative">
              <NotificationIcon />
              <span className="absolute top-0 flex items-center justify-center w-5 h-5 ml-5 -mt-3 text-sm text-white rounded-full bg-primary-yellow">
                4
              </span>
            </div>

            <MessageIcon />
            <span className="w-14 h-14">
              <img
                src="https://picsum.photos/200"
                alt="random image"
                className="w-full rounded-full"
              />
            </span>
          </nav>
        </div>
      </CenterContent>
    </header>
  );
};
export default ClientPortalNavBar;
