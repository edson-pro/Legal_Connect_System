import CenterContent from "../wrappers/CenterContent";

const CaseFollowUp = () => {
  return (
    <CenterContent>
      <div>
        <div className="max-w-xl mx-auto gap-3 flex flex-col items-center">
          <h2 className="text-primary-blue text-3xl font-bold">Case follow up</h2>
          <p className="text-center">
            Dolor sit amet consectetur. Gravida eleifend dictum non tristique eget gravida aliquam
            placerat. Vivamus imperdiet gravida et etiam. Tellus tempus dui diam ultricies curabitur
            posuere
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-8 relative">
          <img
            src="/images/residency-request-card.png"
            alt="residency request card"
            className="absolute w-[500px] right-0 bottom-0 -mr-24"
          />
          <img src="/images/dashboard-bg.png" alt="dashboard background" className="w-4/5" />
        </div>
      </div>
    </CenterContent>
  );
};
export default CaseFollowUp;
