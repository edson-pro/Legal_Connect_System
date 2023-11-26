import CircleAddIcon from "assets/icons/CircleAddIcon";
import ConnectionIcon from "assets/icons/ConnectionIcon";
import DocumentIcon from "assets/icons/DocumentIcon";
import FinanceIcon from "assets/icons/FinanceIcon";
import HomeIcon from "assets/icons/HomeIcon";
import MessageIcon from "assets/icons/MessageIcon";
import NotificationIcon from "assets/icons/NotificationIcon";
import SearchIcon from "assets/icons/SearchIcon";
import UserIcon from "assets/icons/UserIcon";
import legalConnectBlueLogo from "assets/images/legal-connect-blue-logo.png";
import Button from "components/ui/Button";
import InputField from "components/ui/inputs/InputField";
import { NavLink, Outlet } from "react-router-dom";

const LawyerDashboardNavigation = () => {
  const navLinks = [
    {
      label: "Home",
      Icon: HomeIcon,
      link: "",
    },
    {
      label: "Cases",
      Icon: DocumentIcon,
      link: "/cases",
    },
    {
      label: "Connects",
      Icon: ConnectionIcon,
      link: "/connects",
    },
    {
      label: "Finance",
      Icon: FinanceIcon,
      link: "/finance",
    },
    {
      label: "Profile",
      Icon: UserIcon,
      link: "/profile",
    },
  ];

  return (
    <div className="relative flex h-full min-h-screen">
      <aside className="sticky top-0 z-20 flex flex-col max-h-screen px-6 py-8  w-72 bg-primary-blue">
        <img src={legalConnectBlueLogo} alt="Legal connect logo" className="mx-auto w-28" />
        <div className="flex flex-col mt-12 gap-4">
          {navLinks.map((navLink, index) => (
            <NavLink
              end
              to={`/lawyer-dashboard${navLink.link}`}
              className={({ isActive }) =>
                `flex px-4 py-3  rounded-xl gap-4  ${
                  isActive ? "bg-primary-yellow text-primary-blue" : "text-white hover:bg-[#175a79]"
                }`
              }
              key={index}
            >
              <navLink.Icon className="w-5 h-5" />
              {navLink.label}
            </NavLink>
          ))}

          <span className="flex items-center px-4 py-3 text-white rounded-xl gap-3">
            <DocumentIcon />
            Cases
            <span className="flex items-center justify-center w-6 h-6 ml-auto rounded-full bg-primary-yellow text-primary-blue">
              2
            </span>
          </span>
        </div>
      </aside>
      <div className="w-full h-full">
        <header className="sticky top-0 z-50 flex items-center justify-between w-full px-10 py-3 shadow">
          <span className="text-xl text">Hi, Mateusz M</span>
          <span className="w-96">
            <InputField Icon={SearchIcon} placeholder="Search something" className="h-12 py-2" />
          </span>
          <nav className="flex items-center gap-14">
            <Button className="flex px-3 rounded-2xl gap-3">
              <CircleAddIcon />
              Add case
            </Button>
            <NotificationIcon />
            <MessageIcon />
            <span className="w-14 h-14">
              <img
                src="https://picsum.photos/200"
                alt="random image"
                className="w-full rounded-full"
              />
            </span>
          </nav>
        </header>
        <div className="h-full mx-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default LawyerDashboardNavigation;
