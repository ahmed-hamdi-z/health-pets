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
          md:items-stretch
          items-center 
          md:gap-4 
          text-center 
          md:text-justify
          h-full`)}
      >
        <h1
          className={trim(`
            text-responsive-cover
            font-semibold
            text-primary
            transition-[transform, opacity]
            duration-500
            ease-in-out
            ${isInView ? "opacity-100" : "opacity-0"}
            ${isInView ? "translate-y-0" : "translate-y-1/2"}`)}
        >
          {t("hero.title")}
        </h1>
        <div
          className={trim(`
            pl-5 
            md:leading-[3.8rem]
            mb-4 
            transition-[opacity]
            duration-500
            ease-in-out
            delay-300
            ${isInView ? "opacity-100" : "opacity-0"}
            ${i18n.language === "ar" ? "md:max-w-[70%]" : ""}`)}
        >
          <h3
            className={trim(`
              text-responsive-subCover 
              text-primary
              font-light`)}
          >
            {t("hero.subtitle")}
          </h3>
          <h3
            className={trim(`
              text-responsive-subCover 
              text-primary
              font-bold`)}
          >
            {t("coName", { ns: "common" })}
          </h3>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutHero;
