import React from "react";
import AboutUsCard from "./about-card";
import SectionContainer from "../../containers/SectionContainer";
import { useTranslation } from "react-i18next";

const AboutUsSection: React.FC = () => {
  const { t } = useTranslation("about");
  return (
    <SectionContainer className="w-full bg-gray-50">
      <div className="space-y-6 md:space-y-8">
        {/* Mission Card */}
        <AboutUsCard
          title={t("ourConcepts.mission.title")}
          content={t("ourConcepts.mission.description")}
          imageUrl="/images/about-mission.png"
          imagePosition="left"
          className="rounded-r-full bg-[#99D8E0]/70 "
        />

        {/* Vision Card */}
        <AboutUsCard
          title={t("ourConcepts.vision.title")}
          content={t("ourConcepts.vision.description")}
          imageUrl="/images/about-vision.png"
          imagePosition="right"
          className="rounded-l-full bg-[#F9EFA7]"
        />

        {/* Core Values Card */}
        <AboutUsCard
          title={t("ourConcepts.core-values.title")}
          content={t("ourConcepts.core-values.description" )}
          imageUrl="/images/about-value.png"
          imagePosition="left"
          className="rounded-r-full bg-[#99D8E0]/70"
        />
      </div>
    </SectionContainer>
  );
};

export default AboutUsSection;
