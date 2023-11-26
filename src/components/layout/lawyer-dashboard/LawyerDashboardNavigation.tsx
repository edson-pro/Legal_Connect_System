import CircleAddIcon from "assets/icons/CircleAddIcon";
import DocumentIcon from "assets/icons/DocumentIcon";
import HomeIcon from "assets/icons/HomeIcon";
import MenuIcon from "assets/icons/MenuIcon";
import MessageIcon from "assets/icons/MessageIcon";
import NotificationIcon from "assets/icons/NotificationIcon";
import SearchIcon from "assets/icons/SearchIcon";
import UserIcon from "assets/icons/UserIcon";
import legalConnectBlueLogo from "assets/images/legal-connect-blue-logo.png";
import Button from "components/ui/Button";
import InputField from "components/ui/inputs/InputField";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

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
    label: "Chats",
    Icon: MessageIcon,
    link: "/chats",
  },
  {
    label: "Profile",
    Icon: UserIcon,
    link: "/profile",
  },
];

const LawyerDashboardNavigation = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => setSidebarExpanded((prev) => !prev);

  return (
    <div className="relative flex h-full min-h-screen">
      <aside
        className={`sticky top-0 z-20 flex flex-col py-8 max-h-screen bg-primary-blue transition-all ease-out duration-200 ${
          sidebarExpanded ? "w-72 px-6" : "px-[8px] w-[72px]"
        }`}
      >
        <button onClick={toggleSidebar}>
          <MenuIcon className="absolute w-6 h-6 mt-px text-white border-white rounded right-6" />
        </button>
        {sidebarExpanded && (
          <img src={legalConnectBlueLogo} alt="Legal connect logo" className="w-28" />
        )}

        <div className="flex flex-col mt-12 gap-4">
          {navLinks.map((navLink, index) => (
            <NavLink
              end={index === 0}
              to={`/lawyer-dashboard${navLink.link}`}
              className={({ isActive }) =>
                `flex px-4 py-3 items-center rounded-xl gap-4 ${
                  isActive ? "bg-primary-yellow text-primary-blue" : "text-white hover:bg-[#175a79]"
                }`
              }
              key={index}
            >
              {({ isActive }) => (
                <>
                  <navLink.Icon className="w-5 h-5" />
                  {sidebarExpanded && navLink.label}
                  {sidebarExpanded && ["Cases", "Chats"].includes(navLink.label) && (
                    <span
                      className={`flex items-center justify-center w-6 h-6 ml-auto rounded-full text-primary-blue ${
                        isActive ? "bg-white" : "bg-primary-yellow"
                      }`}
                    >
                      2
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </aside>
      <div className="w-full h-full">
        <header className="sticky top-0 z-50 bg-white flex items-center justify-between w-full px-10 py-3 shadow">
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
