import ClientPortalNavBar from "components/lawyer-dashboard/ClientPortalNavBar";
import CenterContent from "components/wrappers/CenterContent";
import { Navigate, Outlet } from "react-router-dom";
import useStore from "store/store";

const ClientPortalNavigation = () => {
  const { user } = useStore((state) => state);

  if (!user) return <Navigate to="/login" state={{ message: "You need to login first" }} />;

  return (
    <div className="flex flex-col h-full min-h-screen">
      <ClientPortalNavBar />
      <div className="flex flex-col flex-1 h-full">
        <CenterContent>
          <Outlet />
        </CenterContent>
      </div>
      <footer className="flex justify-center py-6 border-t ">
        <span className="text-[#9D9D9D]">
          Copyright © 2023 <span className="text-primary-blue">Legal connect</span>
        </span>
      </footer>
    </div>
  );
};
export default ClientPortalNavigation;
