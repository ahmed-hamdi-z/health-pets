import { useTranslation } from "react-i18next";
import useScrollInToView from "../../../hooks/useScrollInToView";
import SectionContainer from "../../containers/SectionContainer";
import InfoCard from "./info-card";

const ExperienceSection = () => {
  const { targetRef, isInView } = useScrollInToView();
   const { t } = useTranslation("about");
  return (
    <SectionContainer
      ref={targetRef}
      id="#section-container"
      wraperClassName="items-center justify-center "
      className={`section-bg ease-in-out duration-1000 ${isInView ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Card */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/3 md:translate-x-1/4 rtl:-translate-x-1/4  translate-y-5">
          <div className="leading-tight translate-y-1/2">
            <div className=" gap-4 -mb-5 ">
              <span className="block text-gray-700 text-4xl font-medium translate-y-24 rtl:text-left -ml-5 ">
                More
              </span>
              <span className="text-[#4C4C4C] text-2xl font-bold">Than</span>
              <span className="text-[#99D8E0] text-[8rem] font-bold">700</span>
            </div>
            <span className="block text-gray-700 text-6xl font-semibold mt-2 mb-5">
              Products
            </span>
          </div>
          <InfoCard
            title={t("ourConcepts.vision.title")}
            description={t("ourConcepts.vision.description")}
          />
        </div>

        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center ">
          <img
            className="rounded-full object-cover w-72 h-[400px] sm:w-64 sm:h-64 md:w-80 md:h-96 lg:w-[350px] lg:h-[650px]"
            src="/images/cat-exp.png"
            alt="Experience"
          />
        </div>

        {/* Right Card */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/3 md:-translate-x-1/4 rtl:translate-x-1/4 md:-translate-y-5 -translate-y-1/4 gap-10">
          <div
            className="bg-no-repeat bg-contain ml-auto md:flex hidden translate-y-52"
            style={{
              width: "250px",
              height: "250px",
              backgroundImage: `url("/images/hand.svg")`,
            }}
          />
          <InfoCard
            title={t("ourConcepts.mission.title")}
            description={t("ourConcepts.mission.description")}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
