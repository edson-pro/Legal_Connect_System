import TagRadioButton from "components/ui/inputs/TagRadioButton";
import { lawyersPracticeAreas } from "data/laywers";
import { ChangeEvent, useState } from "react";

const LaywerSkills = () => {
  const [selectedAreas, setSelectedArea] = useState<Partial<typeof lawyersPracticeAreas>>([]);

  const handleAreaSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedArea((prev) => [...prev, value]);
  };

  return (
    <>
      <h2 className="text-2xl font-medium text-primary-blue max-w-[388px]">
        What skills would you like to see with your new lawyer ?
      </h2>

      {selectedAreas.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {selectedAreas.map((area, index) =>
            area ? (
              <TagRadioButton
                label={area}
                value={area}
                key={index}
                // checked={selectedPracticeArea === area}
                name="practiceArea"
                onChange={handleAreaSelect}
              />
            ) : null
          )}
        </div>
      )}

      <div className="text-lg">
        <span>Practice area</span>
        <span className="ml-4">For laywers</span>
      </div>
      <div className="flex flex-wrap gap-4">
        {lawyersPracticeAreas.map((area, index) => (
          <TagRadioButton
            label={area}
            value={area}
            key={index}
            // checked={selectedPracticeArea === area}
            name="practiceArea"
            onChange={handleAreaSelect}
          />
        ))}
      </div>
    </>
  );
};
export default LaywerSkills;
