import DateIcon from "assets/icons/DateIcon";

const CaseCard = () => {
  return (
    <div className="py-4 px-6 border border-gray-200/60 rounded-xl w-96 max-w-xs text-sm">
      <span className="text-primary-blue block font-normal">Ongoing</span>
      <span className="text-sm flex gap-2 mt-2">
        <DateIcon />
        12 Jan 2023
      </span>
      <span className="block mt-3 font-normal">Permanent Residency Request</span>
      <span className="mt-3 text-[#3A3737]">RP-2023-ABCDE</span>
    </div>
  );
};
export default CaseCard;
