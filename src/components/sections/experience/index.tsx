import { useTranslation } from "react-i18next";
import useScrollInToView from "../../../hooks/useScrollInToView";
import SectionContainer from "../../containers/SectionContainer";
import InfoCard from "./info-card";

const ExperienceSection = () => {
  const { targetRef, isInView } = useScrollInToView();
  const { t } = useTranslation(["about"]);
  return (
    <SectionContainer
      ref={targetRef}
      id="#section-container "
      wraperClassName="justify-center md:py-52 py-32 -translate-y-20 md:flex hidden"
      className={`section-bg ease-in-out duration-1000 justify-between ${isInView ? "opacity-100" : "opacity-0"
        }`}
    >
      {/* Left Card */}
      <div className="flex flex-col text-center md:ltr:-translate-x-1/4 md:ltr:-translate-y-11 md:translate-x-1/4 md:translate-y-11 translate-y-48 -translate-x-32 z-10">
        <div className="md:block hidden">
          <span className=" text-gray-700 text-4xl font-medium ">
            {t("More", { ns: "common" })}
          </span>
          <p className="text-[#4C4C4C] text-2xl font-bold"> {t("Than", { ns: "common" })}</p>
          <p className="text-[#99D8E0] text-8xl font-bold">700</p>
        </div>
        <span className=" text-gray-700 text-6xl font-semibold mt-2 md:block hidden rtl:-translate-y-5 ">
          {t("Products", { ns: "common" })}
        </span>
        <InfoCard
          title={t("ourConcepts.vision.title")}
          description={t("ourConcepts.vision.description")}
        />
      </div>

      {/* Image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex ">
        <img
          className="rounded-full object-cover w-[600px] h-[300px] md:w-[350px] md:h-[700px]"
          src="/images/cat-exp.png"
          alt="Experience"
        />
      </div>

      {/* Right Card */}
      <div className="md:ltr:translate-x-1/4 md:ltr:translate-y-11 md:-translate-y-11 md:-translate-x-1/4 -translate-y-48 translate-x-32 text-center">
        <div
          className="bg-no-repeat bg-contain ml-auto "
          style={{
            width: "250px",
            height: "250px",
            backgroundImage: `url("/images/hand.svg")`,
          }}
        />
        <div>
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
