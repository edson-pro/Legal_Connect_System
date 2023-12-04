import ArrowUp from "assets/icons/ArrowUp";
import TickIcon from "assets/icons/TickIcon";
import LaywerCard from "components/client-portal/ui/LaywerCard";
import UserCaseCard from "components/client-portal/ui/UserCaseCard";
import Button from "components/ui/Button";
import Modal from "components/wrappers/Modal";
import { useState } from "react";

const FindLawyerPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col w-full mt-16">
        <div className="bg-[#F9F9F9] flex rounded-xl borderg py-4 max-w-4xl w-full mx-auto px-6">
          <Button className="px-16 ml-auto">Search</Button>
        </div>
        <div className="flex flex-wrap mt-14 gap-x-7 gap-y-6">
          {Array(6)
            .fill(0)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map((_, index) => (
              <div className="max-w-sm">
                <LaywerCard key={index} />
              </div>
            ))}
        </div>
      </div>
      <button className="fixed block p-3 rounded-full bg-primary-blue text-primary-yellow right-16 bottom-20">
        <ArrowUp />
      </button>
      <Modal title="Payment request" isOpen={isOpen} onClose={closeModal}>
        <div className="mt-5">
          <UserCaseCard user="Lawyer" />
        </div>
        <div className="mt-5">
          <span className="block text-[#A4A4A4]">Amount</span>
          <span className="text-2xl">
            200,000 <span>PLN</span>
          </span>
        </div>
        <div className="mt-5">
          <span className="block text-[#A4A4A4]">Description</span>
          <p>
            About viral we horse message marginalised marginalised closest. They site elephant
            interim hammer up. Criticality closer language feature interim protocol note market
            social.
          </p>
        </div>
        <div className="flex justify-end mt-5 ml-auto gap-4">
          <button className="text-primary-blue" onClick={closeModal}>
            Reject
          </button>
          <Button
            className="inline-flex items-center px-10 rounded-2xl gap-2"
            autoFocus
            onClick={closeModal}
          >
            <TickIcon className="w-5" />
            Accept
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default FindLawyerPage;
