import { useTranslation } from "react-i18next";
import SectionHeader from "../../SectionHeader";
import ReelsCard from "./reels-card";

const reels = [
  {
    id: 1,
    image: "/images/cat.jpg",
    instagramUrl: "https://instagram.com/example1",
  },
  {
    id: 2,
    image: "/images/cat.jpg",
    instagramUrl: "https://instagram.com/example2",
  },
  {
    id: 3,
    image: "/images/cat.jpg",
    instagramUrl: "https://instagram.com/example3",
  },
];
const Reels = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col items-center">
      <SectionHeader className="" title={t("Reels")} />
      <ReelsCard reels={reels} />
    </div>
  );
};

export default Reels;
