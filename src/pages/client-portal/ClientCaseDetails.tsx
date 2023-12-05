import ChevronLeft from "assets/icons/ChevronLeft";
import EditIcon from "assets/icons/EditIcon";
import XIcon from "assets/icons/XIcon";
import Button from "components/ui/Button";

const ClientCaseDetails = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          <button>
            <ChevronLeft />
          </button>
          <h1 className="text-lg font-normal">Case details</h1>
        </div>

        <div className="flex gap-6">
          <button className="mr-10">Report</button>
          <Button className="flex px-5 bg-transparent border border-gray-300 gap-2 text-inherit hover:bg-transparent">
            <XIcon /> Close Case
          </Button>
          <Button className="flex px-5 bg-transparent border border-gray-300 gap-2  text-inherit hover:bg-transparent">
            <EditIcon /> Edit case
          </Button>
          <Button className="px-6 rounded-xl">Submit Payment</Button>
        </div>
      </div>
    </div>
  );
};
export default ClientCaseDetails;
