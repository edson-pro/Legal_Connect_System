import SearchIcon from "assets/icons/SearchIcon";
import SendIcon from "assets/icons/SendIcon";
import UserAvatarCard from "components/ui/UserAvatarCard";
import InputField from "components/ui/inputs/InputField";

const ChatsPage = () => {
  return (
    <div className="max-h-full grid grid-cols-5">
      <div className="relative bg-[#FCFCFC]">
        <div className="sticky bg-white top-20">
          <InputField Icon={SearchIcon} placeholder="Search connection" className="h-12" />
        </div>
        <div className="flex flex-col mt-4 gap-8 max-h-[82vh] overflow-y-auto pb-8 pr-2">
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
      <div className="relative col-span-3 h-fit">
        <div className="sticky top-[80px] px-3 py-2 bg-[#FCFCFC] border-b border-gray-200/50">
          <UserAvatarCard
            heading="Felix Nsengimana"
            subHeading="2 new messages"
            subHeadingClassName="text-primary-blue"
          />
        </div>
        <div className="px-4 pt-4 pb-10 max-h-[82vh] overflow-scroll">
          <div className="flex items-start mb-20 gap-1">
            <span className="flex items-center w-8 h-8">
              <img
                src="https://picsum.photos/200"
                alt="random image"
                className="w-full rounded-full"
              />
            </span>
            <div className="flex flex-col gap-2">
              <span className="items-start block -mt-px text-sm font-normal">
                Sam Kalimba <span>8:32 AM</span>
              </span>
              <p className="p-3 bg-[#F4FCFF] rounded w-fit max-w-sm border border-primary-blue/5">
                Yes Divin! Nice talking to you again! Did you know that we had an alumni event in
                newyork city the previous Sunday?
              </p>
              <p className="p-3 bg-[#F4FCFF] rounded w-fit max-w-sm border border-primary-blue/5">
                Give me a second! I will share pictures
              </p>
            </div>
          </div>

          <div className="flex justify-end mb-20">
            <div className="flex flex-col items-end gap-2">
              <p className="max-w-sm p-3 text-white border rounded bg-primary-blue w-fit border-primary-blue/5">
                I can joy in your eyes people! You absolutely enjoyed the event hhh yours!
              </p>
              <p className="max-w-sm p-3 text-white border rounded bg-primary-blue w-fit border-primary-blue/5">
                Give me a second! I will share pictures
              </p>
            </div>
          </div>

          <div className="flex items-start mb-20 gap-1">
            <span className="flex items-center w-8 h-8">
              <img
                src="https://picsum.photos/200"
                alt="random image"
                className="w-full rounded-full"
              />
            </span>
            <div className="flex flex-col gap-2">
              <span className="items-start block -mt-px text-sm font-normal">
                Sam Kalimba <span>8:32 AM</span>
              </span>
              <p className="p-3 bg-[#F4FCFF] rounded w-fit max-w-sm border border-primary-blue/5">
                Yes Divin! Nice talking to you again! Did you know that we had an alumni event in
                newyork city the previous Sunday?
              </p>
              <p className="p-3 bg-[#F4FCFF] rounded w-fit max-w-sm border border-primary-blue/5">
                Give me a second! I will share pictures
              </p>
            </div>
          </div>

          <div className="flex justify-end mb-20">
            <div className="flex flex-col items-end gap-2">
              <p className="max-w-sm p-3 text-white border rounded bg-primary-blue w-fit border-primary-blue/5">
                I can joy in your eyes people! You absolutely enjoyed the event hhh yours!
              </p>
              <p className="max-w-sm p-3 text-white border rounded bg-primary-blue w-fit border-primary-blue/5">
                Give me a second! I will share pictures
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 z-30 w-full h-20 bg-white">
            <textarea
              className="w-full bg-[#F8F5F5] rounded-xl h-full pt-4 px-4 resize-none"
              placeholder="Type a messages.."
            ></textarea>

            <button className="absolute p-2 text-white rounded-full bg-primary-yellow right-4 top-1/2 -translate-y-1/2">
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default ChatsPage;
