import ConnectionIcon from "assets/icons/ConnectionIcon";
import DocumentIcon from "assets/icons/DocumentIcon";
import FinanceIcon from "assets/icons/FinanceIcon";
import HomeIcon from "assets/icons/HomeIcon";
import UserIcon from "assets/icons/UserIcon";
import legalConnectBlueLogo from "assets/images/legal-connect-blue-logo.png";
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
    <div>
      <aside className="fixed flex flex-col w-64 h-full px-6 bg-primary-blue justify-top  py-9">
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
      <Outlet />
    </div>
  );
};
export default LawyerDashboardNavigation;
