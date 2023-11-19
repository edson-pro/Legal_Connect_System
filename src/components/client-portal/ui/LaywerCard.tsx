import LocationIcon from "assets/icons/LocationIcon";
import MessageIcon from "assets/icons/MessageIcon";
import Button from "components/ui/Button";

const lawyerPracticeArea = ["Family law", "Tax law", "Health law"];

const LaywerCard = () => {
  return (
    <div className="flex flex-col max-w-sm px-4 pt-5 pb-4 border border-gray-200/70 rounded-2xl gap-y-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
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
              Lublin
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <Button className="px-4 py-1 rounded-full">
            <span className="flex items-center text-sm gap-2">
              <MessageIcon className="w-4" />
              Connect
            </span>
          </Button>
          <button className="inline mx-auto mt-1 text-sm text-primary-blue">View profile</button>
        </div>
      </div>
      <div className="flex gap-4">
        {lawyerPracticeArea.map((area, index) => (
          <span
            className="px-3 py-1 text-sm font-light border rounded-md bg-primary-light-blue text-primary-blue border-primary-blue/10"
            key={index}
          >
            {area}
          </span>
        ))}
      </div>
      <p className="line-clamp-2 text-[#717171] font-light leading-6">
        Highlights dunder more race is anomalies. Illustration one stand horse synergy. 2
        synchronise squad field food banner left. Mint office working board donuts. Race dive
        interim.
      </p>
    </div>
  );
};
export default LaywerCard;
