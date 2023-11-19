import SearchIcon from "assets/icons/SearchIcon";
import InputField from "components/ui/inputs/InputField";
import TagRadioButton from "components/ui/inputs/TagRadioButton";
import { lawyersLocations } from "data/laywers";

const LaywerLocation = () => {
  return (
    <>
      <h2 className="text-2xl font-medium text-primary-blue">Choose Lawyer location</h2>
      <InputField
        Icon={SearchIcon}
        placeholder="Search location"
        className="bg-[#F6F6F6] py-3 max-w-[412px]"
      />
      <div className="text-lg">
        <span>Near by</span>
        <span className="ml-4 text-primary-blue">Location</span>
      </div>
      <div className="flex flex-wrap gap-4">
        {lawyersLocations.map((location, index) => (
          <TagRadioButton
            label={location}
            value={location}
            key={index}
            // checked={selectedPracticeArea === area}
            name="practiceArea"
            // onChange={handleAreaSelect}
          />
        ))}
      </div>
    </>
  );
};
export default LaywerLocation;
