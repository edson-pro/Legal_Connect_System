import CircleLeftIcon from "assets/icons/CircleLeftIcon";
import QuoteIcon from "assets/icons/QuoteIcon";
import ActiveCaseCard from "components/lawyer-dashboard/ActiveCaseCard";
import ConnectionCard from "components/lawyer-dashboard/ConnectionCard";
import LatestTransactionTable from "components/lawyer-dashboard/LatestTransactionTable";
import OverviewStatsCard from "components/lawyer-dashboard/OverviewStatsCards";
import Button from "components/ui/Button";

const LawyerDashboardHome = () => {
  return (
    <div className="h-full">
      <div className="grid grid-cols-7 gap-5">
        <div className="col-span-5">
          <OverviewStatsCard />
          <h3 className="mt-5 text-lg font-medium">Active cases</h3>
          <div className="w-full mt-4 grid grid-cols-2 gap-5">
            <ActiveCaseCard />
            <ActiveCaseCard />
          </div>
          <div className="flex flex-col w-full px-5 py-4 mt-6 border border-gray-300/60 gap-3 rounded-xl">
            <h3 className="text-lg font-medium">Latest transactions</h3>
            <LatestTransactionTable />
          </div>
        </div>
        <div className="p-5 border-l col-span-2">
          <div className="flex justify-between">
            <h3 className="relative flex text-lg font-normal">
              Demo Requests
              <span className="absolute -right-8 mt-[6px] inline-flex items-center justify-center w-4 h-4 ml-5 text-xs text-white rounded-full bg-primary-yellow">
                4
              </span>
            </h3>
            <button className="text-primary-blue">View all</button>
          </div>
          <div className="flex items-center justify-between p-3 mt-3 border border-gray-300/60 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="inline-block w-10 h-10">
                <img
                  src="https://picsum.photos/200"
                  alt="random image"
                  className="w-full rounded-full"
                />
              </span>
              <div>
                <span>Mateusz Majewski</span>
                <span className="flex items-center text-sm gap-1 text-primary-blue">
                  Criminal law
                </span>
              </div>
            </div>
            <Button className="px-4 py-1 rounded-full">Reply</Button>
          </div>

          <div className="flex justify-between mt-8">
            <h3 className="relative flex text-lg font-normal">
              New connections
              <span className="absolute -right-8 mt-[6px] inline-flex items-center justify-center w-4 h-4 ml-5 text-xs text-white rounded-full bg-primary-yellow">
                4
              </span>
            </h3>
            <button className="text-primary-blue">View all</button>
          </div>

          <div className="flex flex-col mt-4 gap-4">
            {[1, 2, 3].map((number) => (
              <>
                <ConnectionCard key={number} />
              </>
            ))}
          </div>
          <div className="mt-8">
            <div className="flex justify-between">
              <h3 className="relative flex text-lg font-normal">
                Reviews
                <span className="absolute -right-8 mt-[6px] inline-flex items-center justify-center w-4 h-4 ml-5 text-xs text-white rounded-full bg-primary-yellow">
                  4
                </span>
              </h3>
              <button className="text-primary-blue">View all</button>
            </div>
            <div className="flex flex-col p-4 mt-4 border bg-primary-light-blue border-primary-blue/10 gap-2 rounded-xl">
              <QuoteIcon />
              <p className="line-clamp-3">
                Didn't place digital principles culture spaces. Break competit--ors able break
                relaxation exploratory event. Recap strategies ideal.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-10 h-10">
                    <img
                      src="https://picsum.photos/200"
                      alt="random image"
                      className="w-full rounded-full"
                    />
                  </span>
                  <div>
                    <span>Bigizi Joseph</span>
                    <span className="flex items-center text-sm gap-1 text-primary-gray">
                      Student
                    </span>
                  </div>
                </div>
                <Button className="px-4 py-1 text-sm rounded-full">Publish</Button>
              </div>
            </div>
            <div className="flex justify-end mt-3 gap-4 text-primary-blue">
              <button className="group w-fit rounded-full">
                <CircleLeftIcon className="group-hover:text-white group-hover:bg-primary-blue group-hover:rounded-full" />
              </button>
              <button className="rotate-180 group">
                <CircleLeftIcon className="group-hover:text-white group-hover:bg-primary-blue group-hover:rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LawyerDashboardHome;
