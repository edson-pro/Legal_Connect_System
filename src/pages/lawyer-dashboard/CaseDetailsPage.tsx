import { Tab } from "@headlessui/react";
import AddIcon from "assets/icons/AddIcon";
import AttachIcon from "assets/icons/AttachIcon";
import CircleAddIcon from "assets/icons/CircleAddIcon";
import DeleteIcon from "assets/icons/DeleteIcon";
import DocumentIcon from "assets/icons/DocumentIcon";
import ActiveCaseCard from "components/lawyer-dashboard/ActiveCaseCard";
import Button from "components/ui/Button";

const CaseDetailsPage = () => {
  function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <div className="w-full max-w-xs px-4 pt-4 pb-8 border border-gray-300/60 rounded-xl">
          <span className="text-primary-blue">Client profile</span>
          <div className="flex items-center mt-4 gap-2">
            <span className="inline-block w-12 h-12">
              <img
                src="https://picsum.photos/200"
                alt="random image"
                className="w-full rounded-full"
              />
            </span>
            <div>
              <span className="text-xl font-normal">Mateusz Majewski</span>
              <span className="flex items-center gap-1 text-[#8F8F8F] text-sm">Lublin, Poland</span>
            </div>
          </div>
        </div>
        <Button className="px-8 rounded-xl">Request Payment</Button>
      </div>
      <Tab.Group>
        <Tab.List className="flex max-w-md mt-10 space-x-1">
          {["Progress", "Invoice", "Details"].map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 leading-5 relative outline-none !mx-0",
                  selected
                    ? "text-primary-blue border-b-2 border-primary-blue font-normal"
                    : "hover:bg-primary-light-blue hover:border-primary-blue/5 border-b-2 border-gray-300/60"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-8">
          <Tab.Panel className="">
            <div className="flex gap-6">
              <button className="px-8 py-3 font-normal bg-primary-light-blue-200 text-primary-blue rounded-md">
                Application submission
              </button>
              <button className="px-8 py-3 font-normal bg-primary-light-blue-200 text-primary-blue rounded-md">
                Background check
              </button>
              <button className="px-8 py-3 font-normal bg-primary-light-blue-200 text-primary-blue rounded-md">
                <CircleAddIcon />
              </button>
            </div>
            <div className="w-1/2 mt-8 grid grid-cols-2 gap-7">
              <div className="p-6 border rounded-xl">
                <h5 className="text-primary-blue">Client info</h5>
                <div className="flex flex-col mt-4 gap-5">
                  <div className="flex items-center">
                    <DocumentIcon />
                    <div className="flex flex-col ml-3">
                      <span className="font-normal">Documentation</span>
                      <span className="text-sm">
                        Docx <span>1.9mb</span>
                      </span>
                    </div>
                    <button className="ml-auto">
                      <DeleteIcon />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <DocumentIcon />
                    <div className="flex flex-col ml-3">
                      <span className="font-normal">Documentation</span>
                      <span className="text-sm">
                        Docx <span>1.9mb</span>
                      </span>
                    </div>
                    <button className="ml-auto">
                      <DeleteIcon />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <span>Description</span>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet consectetur. Faucibus massa egestas ipsum rutrum.
                      Mollis volutpat ultrices.
                    </p>
                    <button className="mt-8 flex text-primary-blue justify-center justify-self-center gap-3">
                      <AttachIcon />
                      Attach document
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 border rounded-xl">
                <button className="flex spaced-dashed-border w-full py-4 items-center text-primary-blue gap-3 justify-center">
                  <AddIcon />
                  Add stage
                </button>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="w-full grid grid-cols-3 gap-8">
            {[0, 1].map((number) => (
              <div>
                <ActiveCaseCard key={number} />
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className="w-full grid grid-cols-3 gap-8">
            <ActiveCaseCard />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
export default CaseDetailsPage;
