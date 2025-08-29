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
  return (
    <div className="flex flex-col items-center">
      <SectionHeader className="" title="Reels" />
      <ReelsCard reels={reels} />
    </div>
  );
};

export default Reels;
