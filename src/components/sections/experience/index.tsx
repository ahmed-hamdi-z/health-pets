import useScrollInToView from "../../../hooks/useScrollInToView";
import SectionContainer from "../../containers/SectionContainer";
import InfoCard from "./info-card";

const ExperienceSection = () => {
  const { targetRef, isInView } = useScrollInToView();
  return (
    <SectionContainer
      ref={targetRef}
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("/images/hand-vector.svg")`,
      }}
      id="#section-container"
      wraperClassName="items-center justify-center bg-white opacity-95"
      className={` ease-in-out duration-1000 ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Card */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/3 md:translate-x-1/4 md:-translate-y-5 translate-y-5">
          <div className="leading-tight flex flex-col items-center justify-center md:-translate-x-1/4">
            <div className=" gap-2 -mb-5">
              <span className="block text-gray-700 text-3xl font-medium -mb-32">
                Years
              </span>
              <span className="text-gray-800 text-6xl font-bold">of</span>
              <span className="text-sky-400 text-[12rem] font-bold">40</span>
            </div>
            <span className="block text-gray-700 text-6xl font-semibold mt-2 mb-5">
              Experience
            </span>
          </div>
          <InfoCard
            title="lorem"
            description="The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps..."
          />
        </div>

        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            className="rounded-full object-cover w-72 h-[400px] sm:w-64 sm:h-64 md:w-80 md:h-96 lg:w-[350px] lg:h-[650px]"
            src="/images/cat-exp.png"
            alt="Experience"
          />
        </div>

        {/* Right Card */}
        <div className="flex flex-col tems-center justify-center w-full md:w-1/3 md:-translate-x-1/4 md:translate-y-15 -translate-y-1/4 gap-10">
           <div
                className="bg-no-repeat bg-contain ml-auto md:flex hidden"
                style={{
                  width: "250px",
                  height: "250px",
                  backgroundImage: `url("/images/hand.svg")`,
                }}
              />
          <InfoCard
            title="lorem"
            description="The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps..."
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
