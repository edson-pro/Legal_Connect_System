import heroBg from "assets/images/hero-bg.webp";
import Button from "components/ui/Button";
import CenterContent from "components/wrappers/CenterContent";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section>
      <CenterContent>
        <div className="items-center grid grid-cols-2">
          <div>
            <span className="p-4 bg-primary-blue/10 text-primary-blue rounded-2xl">
              Empower Your Legal Journey:
            </span>
            <h1 className="font-bold text-[40px] leading-normal mt-8">
              Where Exceptional Professionals Meet Discerning Clients for Unparalleled Legal
              Experiences"
            </h1>
            <Button className="px-16 mt-11" onClick={() => navigate("/signup")}>
              Sign up now
            </Button>
            <div className="flex items-center mt-14 gap-6">
              <img src="/vectors/scribble-arrow.svg" alt="" />
              <div>Avatars</div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary-blue">100 +</span>
                <span className="text-xs font-light text-primary-gray">Happy proffessionals</span>
              </div>
            </div>
          </div>
          <img src={heroBg} alt="Hero background" />
        </div>
      </CenterContent>
    </section>
  );
};
export default Hero;
