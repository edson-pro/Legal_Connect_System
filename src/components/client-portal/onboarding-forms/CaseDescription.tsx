import CircleRadioButton from "components/ui/inputs/CircleRadioButton";

const CaseDescription = () => {
  return (
    <>
      <div className="flex flex-col text-lg gap-6">
        <span className="text-xl font-medium text-primary-blue">
          For what kind of cases are you hiring?
        </span>
        <CircleRadioButton label="New case" name="caseType" />
        <CircleRadioButton label="Existing case that needs lawyer change" name="caseType" />
      </div>
      <div className="flex flex-col text-lg gap-6 mt-11">
        <span className="text-xl font-medium text-primary-blue">
          When should the lawyer begin working for you?
        </span>
        <CircleRadioButton label="Directly" name="startingPeriod" />
        <CircleRadioButton label="1 to 3 weeks" name="startingPeriod" />
        <CircleRadioButton label="I'll choose later." name="startingPeriod" />
      </div>
    </>
  );
};
export default CaseDescription;
