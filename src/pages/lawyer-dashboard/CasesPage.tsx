import { Tab } from "@headlessui/react";
import CircleAddIcon from "assets/icons/CircleAddIcon";
import ActiveCaseCard from "components/lawyer-dashboard/ActiveCaseCard";
import AddCaseForms from "components/lawyer-dashboard/AddCaseForms";
import Button from "components/ui/Button";
import Modal from "components/wrappers/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const CasesPage = () => {
  const [addCaseFormOpen, setAddCaseFormOpen] = useState(false);
  function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(" ");
  }

  const openModal = () => setAddCaseFormOpen(true);
  const closeModal = () => setAddCaseFormOpen(false);

  return (
    <div className="relative mt-5">
      <Button
        className="absolute right-0 flex px-5 mt-2 ml-auto rounded-2xl gap-3"
        onClick={openModal}
      >
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
              <Link to={number.toString()} key={number}>
                <ActiveCaseCard key={number} />
              </Link>
            ))}
          </Tab.Panel>
          <Tab.Panel className="w-full grid grid-cols-3 gap-8">
            {[0, 1].map((number) => (
              <Link to={number.toString()} key={number}>
                <ActiveCaseCard key={number} />
              </Link>
            ))}
          </Tab.Panel>
          <Tab.Panel className="w-full grid grid-cols-3 gap-8">
            <Link to="7">
              <ActiveCaseCard />
            </Link>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Modal title="Create new case" isOpen={addCaseFormOpen} onClose={closeModal}>
        <AddCaseForms closeModal={closeModal} />
      </Modal>
    </div>
  );
};
export default CasesPage;
