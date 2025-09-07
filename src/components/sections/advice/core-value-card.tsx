import { useTranslation } from "react-i18next";
import type { CoreValueItem } from ".";

const CoreValueCard: React.FC<CoreValueItem> = ({ title, description }) => {
  const { t } = useTranslation("about");
  return (
    <div className="flex items-start space-x-3 pt-2">
      <div className="flex-shrink-0 mt-2 ">
        <div className="h-4 w-4 bg-[#69CBDA] rounded-full"></div>
      </div>
      <div className="">
        <h3 className="text-xl font-semibold text-[#E09341]">{t(title, { ns: "about" })}</h3>
        <p className="text-xs text-[#4C4C4C]">{t(description, { ns: "about" })}</p>
      </div>
    </div>
  );
};

export default CoreValueCard;
