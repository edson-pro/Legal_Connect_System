import { Dialog, Transition } from "@headlessui/react";
import XIcon from "assets/icons/XIcon";
import { FC, Fragment, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<Props> = ({ title, children, isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl px-10 py-6 overflow-hidden text-left align-middle bg-white shadow-xl transform rounded-2xl transition-all">
                <Dialog.Title as="h3" className="relative text-xl font-semibold text-primary-blue">
                  {title}
                  <button className="absolute right-0">
                    <XIcon onClick={onClose} />
                  </button>
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default Modal;
