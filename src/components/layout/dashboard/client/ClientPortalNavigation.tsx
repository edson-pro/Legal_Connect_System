import ClientPortalNavBar from "components/dashboard/ClientPortalNavBar";
import { Outlet } from "react-router-dom";

const ClientPortalNavigation = () => {
  return (
    <div>
      <ClientPortalNavBar />
      <Outlet />
    </div>
  );
};
export default ClientPortalNavigation;
