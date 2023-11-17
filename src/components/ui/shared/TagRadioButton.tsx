import addIcon from "assets/icons/add.svg";

const TagRadioButton = () => {
  return (
    <div className="relative">
      <div className="flex bg-primary-blue w-fit text-white items-center justify-center gap-1 p-3 rounded-xl relative">
        <input
          type="radio"
          className="absolute w-full bg-red-500 z-30 h-full opacity-0 cursor-pointer"
        />
        <span>
          <img src={addIcon} alt="add icon" />
        </span>
        <span>Labour law</span>
      </div>
    </div>
  );
};
export default TagRadioButton;
