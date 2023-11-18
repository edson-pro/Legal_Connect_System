import Button from "components/ui/Button";
import CenterContent from "components/wrappers/CenterContent";

const ClientPortalHome = () => {
  return (
    <div className="">
      <CenterContent>
        <div className="flex flex-col w-full mt-9">
          <div className="bg-[#F9F9F9] flex rounded-xl border py-4 max-w-4xl w-full mx-auto px-6">
            <Button className="px-16 ml-auto">Search</Button>
          </div>
        </div>
      </CenterContent>
    </div>
  );
};
export default ClientPortalHome;
