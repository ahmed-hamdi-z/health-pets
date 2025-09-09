// src/components/ExperienceSection.tsx

import { useTranslation } from "react-i18next";
import useScrollInToView from "../../../hooks/useScrollInToView";
import SectionContainer from "../../containers/SectionContainer";
import InfoCard from "./info-card";

const ExperienceSection = () => {
  const { targetRef, isInView } = useScrollInToView();
  const { t } = useTranslation(["about", "common"]);

  return (
    <SectionContainer
      ref={targetRef}
      id="experience-section"
      // Use padding for spacing and flex for layout control
      wraperClassName="flex justify-center items-center py-10 "
      // Apply fade-in transition
      className={`transition-opacity duration-1000 ease-in-out ${isInView ? "opacity-100" : "opacity-0"
        }`}
    >
      {/* Main layout container */}
      <div className="relative flex w-full max-w-7xl flex-col items-center gap-16 md:flex-row md:justify-center">

        {/* === Left Column === */}
        <div className="flex flex-col items-center gap-8 text-center md:absolute md:left-0 md:top-1/2 md:-translate-y-7/12 md:translate-x-0 lg:translate-x-[60%]">
          {/* "More than 700 Products" Text Block */}
          <div className="order-2 md:order-1 md:block hidden">
            <span className="text-4xl font-medium text-gray-700">
              {t("More", { ns: "common" })}
            </span>
            <p className="text-2xl font-bold text-[#4C4C4C]">
              {t("Than", { ns: "common" })}
            </p>
            <p className="text-8xl font-bold text-[#99D8E0]">700</p>
            <span className="text-6xl font-semibold text-gray-700">
              {t("Products", { ns: "common" })}
            </span>
          </div>

          <div className="order-1 md:order-2">
            <InfoCard
              title={t("ourConcepts.vision.title")}
              description={t("ourConcepts.vision.description")}
            />
          </div>
        </div>

        {/* === Center Image === */}
        {/* The image is part of the normal flow on mobile and is given a fixed width on desktop */}
        <div className="flex-shrink-0">
          <img
            className="h-[400px] w-[250px] rounded-full object-cover md:h-[600px] md:w-[300px]"
            src="/images/cat-exp.png"
            alt="Experience"
          />
        </div>

        {/* === Right Column === */}
        <div className="flex flex-col items-center gap-8 text-center md:absolute md:right-0 md:top-1/2 md:-translate-y-1/3 md:translate-x-0 lg:translate-x-[-65%]">
          {/* Hand Image */}
          <div
            className="h-48 w-48 bg-contain bg-no-repeat md:flex hidden"
            style={{ backgroundImage: `url("/images/hand.svg")` }}
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