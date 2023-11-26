import { Tab } from "@headlessui/react";
import CircleAddIcon from "assets/icons/CircleAddIcon";
import ActiveCaseCard from "components/lawyer-dashboard/ActiveCaseCard";
import Button from "components/ui/Button";

const CasesPage = () => {
  function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative mt-5">
      <Button className="absolute right-0 flex px-5 mt-2 ml-auto rounded-2xl gap-3">
        <CircleAddIcon />
        Add case
      </Button>
      <Tab.Group>
        <Tab.List className="flex max-w-md p-1 space-x-1 rounded-xl gap-5">
          {["In progress", "Completed", "Canceled"].map((category, index) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 leading-5 relative",
                  "mb-8 focus:outline-none",
                  selected
                    ? "text-primary-blue border-b-2 border-primary-blue"
                    : "hover:bg-primary-light-blue border-b-2 border-transparent hover:border-primary-blue/5"
                )
              }
            >
              {category}
              <span className="absolute -right-0 mt-[4px] inline-flex items-center justify-center w-4 h-4 ml-5 text-xs text-white rounded-full bg-primary-yellow">
                {3 - index}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="w-full grid grid-cols-3 gap-8">
            {[0, 1, 2].map((number) => (
              <ActiveCaseCard key={number} />
            ))}
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
export default CasesPage;
