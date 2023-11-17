import heroBg from "assets/images/hero-bg.webp";
import Button from "components/ui/Button";
import CenterContent from "components/wrappers/CenterContent";

const Hero = () => {
  return (
    <section>
      <CenterContent>
        <div className="grid grid-cols-2 items-center">
          <div>
            <span className="bg-primary-blue/10 p-4 text-primary-blue rounded-2xl">
              Empower Your Legal Journey:
            </span>
            <h1 className="font-bold text-[40px] leading-normal mt-8">
              Where Exceptional Professionals Meet Discerning Clients for Unparalleled Legal
              Experiences"
            </h1>
            <Button className="px-16 mt-11">Sign up now</Button>
            <div className="mt-14 flex gap-6 items-center">
              <img src="/vectors/scribble-arrow.svg" alt="" />
              <div>Avatars</div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-primary-blue">100 +</span>
                <span className="font-light text-xs text-primary-gray">Happy proffessionals</span>
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
