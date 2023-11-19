import Button from "components/ui/Button";

const MatchedLawyerProfiles = () => {
  return (
    <div className="flex flex-col items-center mt-28">
      <span className="px-4 py-3 rounded-lg text-primary-blue bg-primary-blue/10">
        Empower Your Legal Journey
      </span>
      <div className="max-w-xl text-center flex items-center flex-col gap-4 mt-4 text-[#6F6F6F]">
        <h1 className="text-3xl font-medium text-black">
          Explore <span className="text-primary-yellow">Matched</span> Lawyer Profiles Fitted to
          Your Needs!" Your ideal legal partner is waiting for you."
        </h1>
        <span>Avatars will go here...</span>
        <Button className="px-10 w-fit">View profile</Button>
        <button className="text-black">Skip</button>
      </div>
    </div>
  );
};
export default MatchedLawyerProfiles;
