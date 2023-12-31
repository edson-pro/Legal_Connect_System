import dashboardBg from "assets/images/dashboard-bg.png";
import residenceRequestCard from "assets/images/residency-request-card.png";
import CenterContent from "components/wrappers/CenterContent";

const CaseFollowUp = () => {
  return (
    <CenterContent>
      <div>
        <div className="flex flex-col items-center max-w-xl mx-auto gap-3">
          <h2 className="text-3xl font-bold text-primary-blue">Case follow up</h2>
          <p className="text-center">
            Dolor sit amet consectetur. Gravida eleifend dictum non tristique eget gravida aliquam
            placerat. Vivamus imperdiet gravida et etiam. Tellus tempus dui diam ultricies curabitur
            posuere
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto mt-8">
          <img
            src={residenceRequestCard}
            alt="residency request card"
            className="absolute w-[500px] right-0 bottom-0 -mr-24"
          />
          <img src={dashboardBg} alt="dashboard background" className="w-4/5" />
        </div>
      </div>
    </CenterContent>
  );
};
export default CaseFollowUp;
