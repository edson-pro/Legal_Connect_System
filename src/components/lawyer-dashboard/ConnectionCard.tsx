const ConnectionCard = () => {
  return (
    <div className="flex items-center justify-between p-3 border border-gray-300/60 rounded-xl">
      <div className="flex items-center gap-2">
        <span className="flex items-center w-10 h-10">
          <img src="https://picsum.photos/200" alt="random image" className="w-full rounded-full" />
        </span>
        <div className="w-full">
          <span className="font-normal">Yvan Kabarira </span>
          <span className="text-sm line-clamp-1 text-[#828282]">
            Being at ASYV has been an adventure..
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm text-[#828282]">10:50</span>
        <span className="inline-flex items-center justify-center w-4 h-4 mt-1 text-xs text-white rounded-full bg-primary-yellow">
          4
        </span>
      </div>
    </div>
  );
};
export default ConnectionCard;
