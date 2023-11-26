import DocumentIcon from "assets/icons/DocumentIcon";
import SearchIcon from "assets/icons/SearchIcon";
import Button from "components/ui/Button";
import DatePickerField from "components/ui/inputs/DatePickerField";
import InputField from "components/ui/inputs/InputField";
import TagRadioButton from "components/ui/inputs/TagRadioButton";
import TextAreaField from "components/ui/inputs/TextAreaField";
import { lawyersPracticeAreas } from "data/laywers";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  closeModal: () => void;
}

const AddCaseForms: FC<Props> = ({ closeModal }) => {
  const [formStep, setFormStep] = useState(1);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string | null>(null);

  const incrementFormStep = () => {
    if (formStep === 5) {
      closeModal();
      return;
    }
    setFormStep((prev) => prev + 1);
  };

  const decrementFormStep = () => {
    if (formStep === 1) return;
    setFormStep((prev) => prev - 1);
  };

  const handleAreaSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedPracticeArea(value);
  };

  return (
    <form className="flex flex-col mt-6">
      {formStep === 1 && (
        <>
          <InputField Icon={SearchIcon} placeholder="Search client" className="bg-[#F9F9F9]" />
          <h3 className="mt-6 text-lg text-primary-blue">Recent connection</h3>
          <div className="mt-4 grid grid-cols-2 gap-6">
            <div className="flex items-center p-3 border rounded-lg gap-4">
              <span className="inline-block w-10 h-10">
                <img
                  src="https://picsum.photos/200"
                  alt="random image"
                  className="w-full rounded-full"
                />
              </span>
              <div>
                <span className="font-normal">Janusz Karpel</span>
                <span className="text-sm flex items-center gap-1 text-[#8F8F8F]">
                  Lublin, Poland
                </span>
              </div>
            </div>
            <div className="flex items-center p-3 border rounded-lg gap-4">
              <span className="inline-block w-10 h-10">
                <img
                  src="https://picsum.photos/200"
                  alt="random image"
                  className="w-full rounded-full"
                />
              </span>
              <div>
                <span className="font-normal">Janusz Karpel</span>
                <span className="text-sm flex items-center gap-1 text-[#8F8F8F]">
                  Lublin, Poland
                </span>
              </div>
            </div>
            <div className="flex items-center p-3 border rounded-lg gap-4">
              <span className="inline-block w-10 h-10">
                <img
                  src="https://picsum.photos/200"
                  alt="random image"
                  className="w-full rounded-full"
                />
              </span>
              <div>
                <span className="font-normal">Janusz Karpel</span>
                <span className="text-sm flex items-center gap-1 text-[#8F8F8F]">
                  Lublin, Poland
                </span>
              </div>
            </div>
            <div className="flex items-center p-3 border rounded-lg gap-4">
              <span className="inline-block w-10 h-10">
                <img
                  src="https://picsum.photos/200"
                  alt="random image"
                  className="w-full rounded-full"
                />
              </span>
              <div>
                <span className="font-normal">Janusz Karpel</span>
                <span className="text-sm flex items-center gap-1 text-[#8F8F8F]">
                  Lublin, Poland
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      {formStep === 2 && (
        <>
          <h2 className="justify-self-center mx-auto text-lg font-semibold max-w-[200px] text-center text-primary-blue">
            You are going to start a new case with
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center p-3 rounded-lg gap-4">
              <span className="inline-block w-10 h-10">
                <img
                  src="https://picsum.photos/200"
                  alt="random image"
                  className="w-full rounded-full"
                />
              </span>
              <div>
                <span className="font-normal">Janusz Karpel</span>
                <span className="text-sm flex items-center gap-1 text-[#8F8F8F]">
                  JanuszKarpel@gmail.com
                </span>
              </div>
            </div>
            <button className="px-8 py-3 border text-primary-blue border-primary-blue/20 rounded-2xl">
              Visit profile
            </button>
          </div>
          <div className="mt-2 grid grid-cols-2">
            <div className="flex items-center p-3 rounded-lg gap-4">
              <span className="inline-block">
                <DocumentIcon />
              </span>
              <div>
                <span className="font-normal">Experience</span>
                <span className="text-sm flex items-center gap-1 text-[#8F8F8F]">3 years</span>
              </div>
            </div>
            <div className="flex items-center p-3 rounded-lg gap-4">
              <span className="inline-block">
                <DocumentIcon />
              </span>
              <div>
                <span className="font-normal">Degree</span>
                <span className="text-sm flex items-center gap-1 text-[#8F8F8F]">
                  Poland-Dwermet
                </span>
              </div>
            </div>
            <div className="flex items-center p-3 rounded-lg gap-4">
              <span className="inline-block">
                <DocumentIcon />
              </span>
              <div>
                <span className="font-normal">School</span>
                <span className="text-sm flex items-center gap-1 text-[#8F8F8F]">
                  Poland-Dwermet
                </span>
              </div>
            </div>
          </div>
        </>
      )}

      {formStep === 3 && (
        <>
          <h4 className="text-lg font-normal text-primary-blue">Select practice areas</h4>
          <div className="flex flex-wrap gap-4 mt-4">
            {lawyersPracticeAreas.slice(6).map((area, index) => (
              <TagRadioButton
                label={area}
                value={area}
                key={index}
                checked={selectedPracticeArea === area}
                name="practiceArea"
                onChange={handleAreaSelect}
              />
            ))}
          </div>
        </>
      )}

      {formStep === 4 && (
        <>
          <InputField
            label="Case title"
            placeholder="Enter fist name"
            className="bg-transparent h-14"
          />

          <div className="mt-4">
            <TextAreaField
              label="Description"
              placeholder="Enter description"
              className="bg-transparent h-40"
            />
          </div>
        </>
      )}

      {formStep === 5 && (
        <>
          <div className="grid grid-cols-2 gap-5">
            <DatePickerField label="Start date" className="bg-transparent h-12" />
            <DatePickerField label="End date" className="bg-transparent h-12" />
          </div>
          <div className="grid grid-cols-3 gap-5 mt-6">
            <div className="col-span-2">
              <InputField
                placeholder="Enter amount"
                className="h-12 bg-transparent rounded-xl"
                label="Amount"
              />
            </div>
            <div>
              <InputField
                placeholder="Us Dollars"
                className="h-12 bg-transparent rounded-xl"
                label="Currency"
              />
            </div>
          </div>
        </>
      )}

      <div className="flex justify-end mt-8 ml-auto gap-8">
        {formStep !== 1 && (
          <button className="text-primary-blue" onClick={decrementFormStep} type="button">
            back
          </button>
        )}

        <Button
          className="inline-flex items-center px-10 rounded-2xl gap-2"
          autoFocus
          onClick={incrementFormStep}
          type="button"
        >
          {formStep === 5 ? "Create case" : "Continue"}
        </Button>
      </div>
    </form>
  );
};
export default AddCaseForms;
