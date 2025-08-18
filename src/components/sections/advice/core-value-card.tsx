import type { CoreValueItem } from ".";

const CoreValueCard: React.FC<CoreValueItem> = ({ title, description }) => {
  return (
    <div className="flex items-start space-x-3 pt-2">
      <div className="flex-shrink-0 mt-2 ">
        <div className="h-4 w-4 bg-[#69CBDA] rounded-full"></div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#E09341]">{title}</h3>
        <p className="text-xs text-[#4C4C4C]">{description}</p>
      </div>
    </div>
  );
};

export default CoreValueCard;
