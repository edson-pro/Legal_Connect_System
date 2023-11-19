import ArrowUp from "assets/icons/ArrowUp";
import TickIcon from "assets/icons/TickIcon";
import LawyerCaseCard from "components/client-portal/ui/LawyerCaseCard";
import LaywerCard from "components/client-portal/ui/LaywerCard";
import Button from "components/ui/Button";
import CenterContent from "components/wrappers/CenterContent";
import Modal from "components/wrappers/Modal";
import { useState } from "react";

const ClientPortalHome = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  return (
    <CenterContent>
      <div className="flex flex-col w-full mt-16">
        <div className="bg-[#F9F9F9] flex rounded-xl borderg py-4 max-w-4xl w-full mx-auto px-6">
          <Button className="px-16 ml-auto">Search</Button>
        </div>
        <div className="flex flex-wrap mt-14 gap-x-7 gap-y-6">
          {Array(6)
            .fill(0)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map((_, index) => (
              <LaywerCard key={index} />
            ))}
        </div>
      </div>
      <button className="fixed block p-3 rounded-full bg-primary-blue text-primary-yellow right-16 bottom-20">
        <ArrowUp />
      </button>
      <Modal title="Payment request" isOpen={isOpen} onClose={closeModal}>
        <div className="mt-5">
          <LawyerCaseCard />
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
        <div className="mt-5 ml-auto flex justify-end gap-4">
          <button className="text-primary-blue" onClick={closeModal}>
            Reject
          </button>
          <Button
            className="px-10 inline-flex items-center rounded-2xl gap-2"
            autoFocus
            onClick={closeModal}
          >
            <TickIcon className="w-5" />
            Accept
          </Button>
        </div>
      </Modal>
    </CenterContent>
  );
};
export default ClientPortalHome;
