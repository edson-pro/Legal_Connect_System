import LocationIcon from "assets/icons/LocationIcon";

const LawyerCaseCard = () => {
  return (
    <div className="relative grid grid-cols-2 pt-4 pb-5 border border-gray-200/70 rounded-md">
      <span className="absolute h-full w-px bg-gray-200/70 self-center justify-self-center"></span>
      <div className="px-4">
        <span className="text-primary-blue">Lawyer</span>
        <div className="flex items-center gap-2 mt-2">
          <span className="inline-block w-12 h-12">
            <img
              src="https://picsum.photos/200"
              alt="random image"
              className="w-full rounded-full"
            />
          </span>
          <div>
            <span>Mateusz Majewski</span>
            <span className="flex items-center gap-1 text-[#8F8F8F] text-sm">
              <LocationIcon />
              Lublin, poland
            </span>
          </div>
        </div>
      </div>
      <div className="px-4">
        <span className="text-primary-blue">Case</span>
        <div className="mt-2">
          <span>Permanent Residency Request</span>
          <span className="inline-block text-[#8F8F8F] text-sm">RP-2023-ABCDE</span>
        </div>
      </div>
    </div>
  );
};
export default LawyerCaseCard;
