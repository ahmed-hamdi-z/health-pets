import { useTranslation } from "react-i18next";
import useScrollInToView from "../../../hooks/useScrollInToView";
import SectionContainer from "../../containers/SectionContainer";
import { trim } from "../../../utils/general";

const AboutHero = () => {
  const { t, i18n } = useTranslation(["home", "common"]);
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      ref={targetRef}
      className={`
        section-bg
        bg-[url('/images/about-hero-vector.svg')]
        md:max-w-[75%]
        ml-auto
        bg-center
        rounded-bl-full
        bg-no-repeat
        h-screen
        pt-20
        `}
      wraperClassName={`
        md:translate-x-1/4
        bg-[url('/images/about-hero-img.png')]
        bg-contain
        bg-center
        bg-no-repeat
        h-screen
        ${i18n.language === "en" ? "md:items-end" : ""}`}
    >
      <div
        className={trim(`
          flex 
          flex-col 
          items-center 
          justify-center
          md:gap-4 
          text-center 
          h-full`)}
      >
        <h1
          className={trim(`
            text-5xl
            text-white
            font-semibold
            text-primary
            transition-[transform, opacity]
            duration-500
            ease-in-out
            ${isInView ? "opacity-100" : "opacity-0"}
            ${isInView ? "translate-y-0" : "translate-y-1/2"}`)}
        >
          {t("about.title")}
        </h1>

      </div>
    </SectionContainer>
  );
};

export default AboutHero;
