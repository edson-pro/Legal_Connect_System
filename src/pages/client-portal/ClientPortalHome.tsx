import CircleAddIcon from "assets/icons/CircleAddIcon";
import LaywerCard from "components/client-portal/ui/LaywerCard";
import ActiveCaseCard from "components/lawyer-dashboard/ActiveCaseCard";
import ConnectionCard from "components/lawyer-dashboard/ConnectionCard";
import LatestTransactionTable from "components/lawyer-dashboard/LatestTransactionTable";
import Button from "components/ui/Button";
import { Fragment } from "react";

const ClientPortalHome = () => {
  return (
    <div className="w-full mt-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-normal">Welcome, Karpel</h1>
          <span className="block mt-2">
            You have <span className="text-primary-blue">ongoing case</span> with Mateusz Majewski
          </span>
        </div>
        <Button className="flex px-5 py-3 text-white rounded-xl gap-3 bg-primary-blue hover:bg-sky-800">
          <CircleAddIcon />
          Add new case
        </Button>
      </div>
      <div className="grid grid-cols-3 mt-9 gap-8">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between mb-2">
            <span className="font-normal text">Your current cases</span>
            <span className="text-primary-blue">View all</span>
          </div>
          <ActiveCaseCard />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between mb-2">
            <span className="font-normal text">Your current lawyer</span>
            <span className="text-primary-blue">View all</span>
          </div>
          <LaywerCard />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-normal text">Notifications</span>
            <span className="text-primary-blue">View all</span>
          </div>
          <div className="flex flex-col justify-between w-full mt-4 space-y-2">
            {[1, 2, 3].map((number) => (
              <Fragment key={number}>
                <ConnectionCard key={number} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <h3 className="mt-8 mb-5 text-lg font-normal">Transactions</h3>
      <LatestTransactionTable />
    </div>
  );
};
export default ClientPortalHome;
