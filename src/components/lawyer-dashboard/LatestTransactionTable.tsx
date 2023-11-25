const LatestTransactionTable = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left rtl:text-right">
        <thead className="font-normal">
          <tr>
            <th scope="col" className="pb-3 font-normal">
              Names
            </th>
            <th scope="col" className="pb-3 font-normal">
              Case
            </th>
            <th scope="col" className="pb-3 font-normal">
              Date
            </th>
            <th scope="col" className="pb-3 font-normal">
              Amount
            </th>
            <th scope="col" className="pb-3 font-normal">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pt-3 whitespace-nowrap">
              <span className="inline-flex items-center font-light gap-4">
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
            <td className="pt-3 text-gray-900 whitespace-nowrap">
              <span className="inline-flex items-center font-light gap-4">
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
            <td className="pt-3 text-gray-900 whitespace-nowrap">
              <span className="inline-flex items-center font-light gap-4">
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
  );
};
export default LatestTransactionTable;
