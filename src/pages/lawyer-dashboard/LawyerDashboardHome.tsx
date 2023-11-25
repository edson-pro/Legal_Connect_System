import ActiveCaseCard from "components/lawyer-dashboard/ActiveCaseCard";
import OverviewStatsCard from "components/lawyer-dashboard/OverviewStatsCards";

const LawyerDashboardHome = () => {
  return (
    <div>
      <div className="grid grid-cols-7 gap-5">
        <div className="col-span-5">
          <OverviewStatsCard />
          <h3 className="mt-5 text-lg font-medium">Active cases</h3>
          <div className="grid grid-cols-2 w-full gap-5 mt-4">
            <ActiveCaseCard />
            <ActiveCaseCard />
          </div>

          <div className="w-full px-5 py-4 mt-6 border flex flex-col gap-3 rounded-xl">
            <h3 className="text-lg font-medium">Latest transactions</h3>
            <div className="relative overflow-x-auto">
              <table className="w-full text-left rtl:text-right">
                <thead className="font-normal">
                  <tr>
                    <th scope="col" className="font-normal pb-3">
                      Names
                    </th>
                    <th scope="col" className="font-normal pb-3">
                      Case
                    </th>
                    <th scope="col" className="font-normal pb-3">
                      Date
                    </th>
                    <th scope="col" className="font-normal pb-3">
                      Amount
                    </th>
                    <th scope="col" className="font-normal pb-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray-900 whitespace-nowrap pt-3">
                      <span className="inline-flex gap-4 items-center font-light">
                        <span className="inline-block w-8 h-8">
                          <img
                            src="https://picsum.photos/200"
                            alt="random image"
                            className="w-full rounded-full"
                          />
                        </span>
                        Lew Kapinos
                      </span>
                    </td>
                    <td className="py-3">Criminal law</td>
                    <td className="py-3">17 June 2023</td>
                    <td className="py-3">10000 Us</td>
                    <td>
                      <div className="flex items-start gap-2">
                        <span className="block mt-[6px] w-[10px] h-[10px] rounded-full bg-primary-blue" />
                        <span>Done</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-900 whitespace-nowrap pt-3">
                      <span className="inline-flex gap-4 items-center font-light">
                        <span className="inline-block w-8 h-8">
                          <img
                            src="https://picsum.photos/200"
                            alt="random image"
                            className="w-full rounded-full"
                          />
                        </span>
                        Lew Kapinos
                      </span>
                    </td>
                    <td className="py-3">Criminal law</td>
                    <td className="py-3">17 June 2023</td>
                    <td className="py-3">10000 Us</td>
                    <td>
                      <div className="flex items-start gap-2">
                        <span className="block mt-[6px] w-[10px] h-[10px] rounded-full bg-primary-blue" />
                        <span>Done</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-900 whitespace-nowrap pt-3">
                      <span className="inline-flex gap-4 items-center font-light">
                        <span className="inline-block w-8 h-8">
                          <img
                            src="https://picsum.photos/200"
                            alt="random image"
                            className="w-full rounded-full"
                          />
                        </span>
                        Lew Kapinos
                      </span>
                    </td>
                    <td className="py-3">Criminal law</td>
                    <td className="py-3">17 June 2023</td>
                    <td className="py-3">10000 Us</td>
                    <td>
                      <div className="flex items-start gap-2">
                        <span className="block mt-[6px] w-[10px] h-[10px] rounded-full bg-primary-blue" />
                        <span>Done</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-2 h-screen border-l"></div>
      </div>
    </div>
  );
};
export default LawyerDashboardHome;
