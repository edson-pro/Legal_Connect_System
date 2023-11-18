import CheckFluidIcon from "assets/icons/CheckFluidIcon";
import Button from "components/ui/Button";

const AccountConfirmationStatus = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto my-auto">
      <CheckFluidIcon />
      <div className="w-80 text-center flex items-center flex-col gap-4 mt-4 text-[#6F6F6F]">
        <h1 className="text-2xl font-bold text-primary-blue">
          Lawyer Account Successfully Created
        </h1>
        <span>Awaiting Approval: Preparing the Legal Stage, Verification in Progress!</span>
        <Button className="px-10 w-fit">Back to home</Button>
      </div>
    </div>
  );
};
export default AccountConfirmationStatus;
