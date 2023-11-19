import LaywerCard from "components/client-portal/ui/LaywerCard";
import Button from "components/ui/Button";
import CenterContent from "components/wrappers/CenterContent";

const ClientPortalHome = () => {
  return (
    <CenterContent>
      <div className="flex flex-col w-full mt-16">
        <div className="bg-[#F9F9F9] flex rounded-xl borderg py-4 max-w-4xl w-full mx-auto px-6">
          <Button className="px-16 ml-auto">Search</Button>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-7 gap-y-6">
          {Array(6)
            .fill(0)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map((_, index) => (
              <LaywerCard key={index} />
            ))}
        </div>
      </div>
    </CenterContent>
  );
};
export default ClientPortalHome;
