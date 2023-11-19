import ClientPortalNavBar from "components/dashboard/ClientPortalNavBar";
import { Outlet } from "react-router-dom";

const ClientPortalNavigation = () => {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <ClientPortalNavBar />
      <div className="flex flex-col flex-1 h-full">
        <Outlet />
      </div>
    </div>
  );
};
export default ClientPortalNavigation;
