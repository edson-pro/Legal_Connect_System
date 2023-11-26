import SearchIcon from "assets/icons/SearchIcon";
import InputField from "components/ui/inputs/InputField";

const ChatsPage = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="relative bg-white">
        <div className="sticky top-20 bg-white">
          <InputField Icon={SearchIcon} placeholder="Search connection" className="h-12" />
        </div>

        <div className="flex flex-col mt-4 gap-8 overflow-y-scroll pb-8">
          {Array(15)
            .fill(0)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map((_item, index) => (
              <div className="flex items-center justify-between" key={index}>
                <div className="flex items-center gap-2">
                  <span className="flex items-center w-10 h-10">
                    <img
                      src="https://picsum.photos/200"
                      alt="random image"
                      className="w-full rounded-full"
                    />
                  </span>
                  <div className="w-full">
                    <span className="font-normal">Yvan Kabarira </span>
                    <span className="text-sm line-clamp-1 text-[#828282]">
                      Being at ASYV has been an adventure..
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-[#828282] w-20 ml-auto flex justify-end">
                    10:50 AM
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="col-span-3"></div>
      <div></div>
    </div>
  );
};
export default ChatsPage;
