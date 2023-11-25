const ActiveCaseCard = () => {
  return (
    <div className="flex flex-col w-full p-6 border border-gray-300/60 gap-3 rounded-xl">
      <div className="flex items-center gap-4">
        <span className="inline-block w-10 h-10">
          <img src="https://picsum.photos/200" alt="random image" className="w-full rounded-full" />
        </span>
        <div>
          <span className="font-mediums">Mateusz Majewski</span>
          <span className="text-sm flex items-center gap-1 text-[#8F8F8F]">
            Janusz Karpel@gmail.com
          </span>
        </div>
      </div>
      <span className="inline-block font-medium">Permanent Residency Request</span>
      <div className="flex text-sm gap-8">
        <span>
          <span className="text-[#808080]">Starts</span> Jan 12, 2023
        </span>
        <span>
          <span className="text-[#808080]">Ends</span> Jan 12, 2023
        </span>
      </div>
      <div className="w-full bg-[#DBEDF5] rounded-full h-2">
        <div className="w-1/2 h-2 rounded-full bg-primary-blue"></div>
      </div>
      <span className="text-sm">
        <span className="text-[#808080]">Last updated</span> Jan 12, 2023
      </span>
    </div>
  );
};
export default ActiveCaseCard;
