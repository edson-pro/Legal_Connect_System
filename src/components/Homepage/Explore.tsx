import Button from "../ui/Button";
import CenterContent from "../wrappers/CenterContent";

const Explore = () => {
  return (
    <CenterContent>
      <div className="flex items-center justify-center bg-primary-blue py-[60px] gap-14 place-content-center rounded-2xl">
        <img
          src="/images/explore-cards-bg.png"
          alt="Explore cards background"
          className="max-w-lg"
        />
        <div className="flex flex-col gap-5 text-white max-w-[418px]">
          <span className="px-4 py-2 rounded-full bg-secondary-yellow w-fit text-primary-blue">
            Explore
          </span>
          <h3 className="text-3xl font-bold text-primary-yellow">
            Searching <br /> for your next lawyer
          </h3>
          <p className="font-normal line-clamp-3">
            Waves holo stacks tether litecoin horizen binance quant chainlink. TerraUSD TRON velas
            waves BitTorrent monero enjin bitcoin eCash BitTorrent. IOTA eCash dash quant compound
            terraUSD amp terraUSD litecoin. Vechain terraUSD nexo binance klaytn ankr polymath.
          </p>
          <Button className="px-12 text-white w-fit">Start now</Button>
        </div>
      </div>
    </CenterContent>
  );
};
export default Explore;
