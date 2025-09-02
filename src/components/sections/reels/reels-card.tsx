import useScrollInToView from "../../../hooks/useScrollInToView";
import SectionContainer from "../../containers/SectionContainer";
import { FaInstagram } from "react-icons/fa";

type ReelsCardProps = {
  id: number;
  image: string;
  instagramUrl: string;
};
type ReelsSectionProps = {
  reels: ReelsCardProps[];
};
const ReelsCard: React.FC<ReelsSectionProps> = ({ reels }) => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      ref={targetRef}
      id="#section-container"
      wraperClassName="items-center justify-center bg-[#99D8E0]/70 py-10"
      className={` ease-in-out duration-1000 ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-105 "
            >
              {/* reel Image */}
              <img
                src={reel.image}
                alt={`reel-${reel.id}`}
                className="w-full h-96 object-cover rounded-2xl"
              />

              {/* Instagram Overlay (Visible on hover) */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaInstagram className="text-white text-4xl" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ReelsCard;
