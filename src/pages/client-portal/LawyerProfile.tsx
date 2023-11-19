import { Tab } from "@headlessui/react";
import MessageIcon from "assets/icons/MessageIcon";
import CaseCard from "components/client-portal/ui/CaseCard";
import ReviewCard from "components/client-portal/ui/ReviewCard";
import Button from "components/ui/Button";
import CenterContent from "components/wrappers/CenterContent";
import { lawyersPracticeAreas } from "data/laywers";

const LawyerProfile = () => {
  function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <CenterContent>
        <div className="flex justify-between mt-8">
          <div className="flex items-center gap-4">
            <span className="inline-block w-[76px] h-[76px]">
              <img
                src="https://picsum.photos/200"
                alt="random image"
                className="w-full rounded-full"
              />
            </span>
            <div>
              <span className="text-xl">Mateusz Majewski</span>
              <span className="flex items-center gap-1 text-[#8F8F8F]">Lawyer</span>
            </div>
          </div>
          <div className="mt-5 ml-auto flex items-center justify-end gap-10">
            <button className="text-primary-blue">Book Appointment</button>
            <Button className="px-10 inline-flex items-center rounded-2xl gap-2 h-12">
              <MessageIcon className="w-5" />
              Message
            </Button>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <div className="max-w-2xl">
            <span className="text-lg font-normal text-[#626060]">Practice areas</span>
            <div className="flex flex-wrap gap-x-6 gap-y-4 mt-4">
              {lawyersPracticeAreas.slice(9).map((area, index) => (
                <span
                  key={index}
                  className="bg-[#FCFCFC] text-sm px-7 py-2 border border-gray-200/70 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-lg font-normal text-[#626060]">Availability</span>
            <div className="grid grid-cols-2 gap-12 mt-2">
              <div>
                <span className="block text-black">Monday - Friday</span>
                <span className="text-[#736B6B] mt-2">7:00 AM - 5:00 PM</span>
              </div>
              <div>
                <span className="block text-black">Saturday- sunday</span>
                <span className="text-[#736B6B] mt-2">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl p-1 gap-5 max-w-lg">
              {["Reviews", "Cases", "About"].map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-3xl py-2.5 leading-5",
                      "ring-white/60 ring-offset-2 mb-8 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-[#F2FBFF] text-primary-blue border border-primary-blue/10"
                        : "hover:bg-primary-light-blue border border-transparent hover:border-primary-blue/5"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="flex gap-4">
                {[0, 1, 2].map((number) => (
                  <ReviewCard key={number} />
                ))}
              </Tab.Panel>
              <Tab.Panel className="flex gap-4 w-full">
                {[0, 1, 2].map((number) => (
                  <CaseCard key={number} />
                ))}
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                About
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </CenterContent>
    </div>
  );
};
export default LawyerProfile;
