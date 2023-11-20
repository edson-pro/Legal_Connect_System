import DateIcon from "assets/icons/DateIcon";

const CaseCard = () => {
  return (
    <div className="max-w-xs px-6 py-4 text-sm border border-gray-200/60 rounded-xl w-96">
      <span className="block font-normal text-primary-blue">Ongoing</span>
      <span className="flex mt-2 text-sm gap-2">
        <DateIcon />
        12 Jan 2023
      </span>
      <span className="block mt-3 font-normal">Permanent Residency Request</span>
      <span className="mt-3 text-[#3A3737]">RP-2023-ABCDE</span>
    </div>
  );
};
export default CaseCard;
