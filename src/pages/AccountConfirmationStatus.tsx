import CheckFluidIcon from "assets/icons/CheckFluidIcon";
import Button from "components/ui/Button";

const AccountConfirmationStatus = () => {
  return (
    <div className="flex flex-col items-center justify-center my-auto mx-auto">
      <CheckFluidIcon />
      <div className="w-80 text-center flex items-center flex-col gap-4 mt-4 text-[#6F6F6F]">
        <h1 className="text-primary-blue font-bold text-2xl">
          Lawyer Account Successfully Created
        </h1>
        <span>Awaiting Approval: Preparing the Legal Stage, Verification in Progress!</span>
        <Button className="w-fit px-10">Back to home</Button>
      </div>
    </div>
  );
};
export default AccountConfirmationStatus;
