import InputField from "components/ui/inputs/InputField";
import TextAreaField from "components/ui/inputs/TextAreaField";

const CaseDetails = () => {
  return (
    <>
      <h2 className="text-2xl font-medium text-primary-blue">What type of Case you hiring for?</h2>
      <InputField label="Case Title" placeholder="Enter case title" className="bg-[#F8F8F8] py-3" />
      <TextAreaField
        label="Case Description"
        placeholder="Enter Case Description"
        className="bg-[#F8F8F8] py-3 min-h-[10.5rem]"
      />
    </>
  );
};
export default CaseDetails;
