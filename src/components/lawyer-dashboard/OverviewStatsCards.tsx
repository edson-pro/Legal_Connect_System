import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: "Cases",
      data: [12, 8, 6],
      backgroundColor: ["#1D698D", "#F1BB29", "#B2D3E3"],
      borderWidth: 1,
    },
  ],
};

const doughnutLabel = {
  id: "doughnutLabel",
  afterDatasetsDraw(chart: ChartJS) {
    const { ctx } = chart;
    const centerX = chart.getDatasetMeta(0).data[0].x;
    const centerY = chart.getDatasetMeta(0).data[0].y;

    ctx.save();
    ctx.font = "10px Outfit";
    ctx.fillStyle = "black ";
    ctx.textAlign = "center";
    ctx.fillText("All cases", centerX, centerY - 5);
    ctx.font = "16px Outfit";
    ctx.fillStyle = "black ";
    ctx.textAlign = "center";
    ctx.fillText("24", centerX, centerY + 10);
  },
};

const OverviewStatsCard = () => {
  return (
    <div className="relative px-4 py-3 mt-6 border border-gray-300/60 grid grid-cols-3  rounded-xl gap-12">
      {/* separators */}
      <div className="absolute top-0 w-px h-full bg-gray-300/60 left-2/3"></div>
      <div className="absolute top-0 w-px h-full bg-gray-300/60 left-1/3"></div>

      <div>
        <span className="text-black">Cases</span>
        <div className="flex items-center gap-5">
          <div className="relative flex-1 flex-shrink-0 w-24 max-w-[96px]">
            <Doughnut
              data={data}
              options={{ spacing: 2, cutout: 28 }}
              plugins={[doughnutLabel]}
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="flex items-start gap-2">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary-blue" />
              <div>
                <span className="text-sm">Ongoing</span>
                <span className="block text-lg font-medium text-black">15</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B2D3E3] inline-block mt-2" />
              <div>
                <span className="text-sm">Canceled</span>
                <span className="block text-lg font-medium text-black">15</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F1BB29] inline-block mt-2" />
              <div>
                <span className="text-sm">Done</span>
                <span className="block text-lg font-medium text-black">15</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card two */}
      <div className="flex flex-col self-center gap-3">
        <span className="text-black">Wallet balance</span>
        <span className="text-xl font-medium">
          50,000 <span>PLN</span>
        </span>
        <div className="flex text-sm text-[#6A6969] gap-3">
          <span>This week</span>
          <span>30,000 PLN</span>
          <span className="px-2 bg-[#D6F2FF] text-primary-blue rounded-lg">+ 12 %</span>
        </div>
      </div>

      {/* Card three */}
      <div className="flex flex-col self-center gap-3">
        <span className="text-black">Outstanding balance</span>
        <span className="text-xl font-medium">
          50,000 <span>PLN</span>
        </span>
        <div className="flex text-sm text-[#6A6969] gap-3">
          <span>This week</span>
          <span>30,000 PLN</span>
          <span className="px-2 bg-[#D6F2FF] text-primary-blue rounded-lg">+ 12 %</span>
        </div>
      </div>
    </div>
  );
};
export default OverviewStatsCard;
