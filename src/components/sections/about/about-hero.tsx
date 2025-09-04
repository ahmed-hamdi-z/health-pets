import { useTranslation } from "react-i18next";
import useScrollInToView from "../../../hooks/useScrollInToView";
import SectionContainer from "../../containers/SectionContainer";
import { trim } from "../../../utils/general";

type AboutHeroProps = {
  title: string;
  imageUrl: string;
};

const AboutHero = ({ title, imageUrl }: AboutHeroProps) => {
  const { t, i18n } = useTranslation(["header"]);
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      ref={targetRef}
      className={`
        section-bg
        bg-[#99D8E0]/70
        md:max-w-[75%]
        ml-auto
        rounded-bl-full
        h-screen
        pt-20
      `}
      wraperClassName={`
        h-screen
        ${i18n.language === "en" ? "md:items-end" : ""}
        `}
    >
      <div
        className={trim(`
          flex 
          flex-row 
          rtl:flex-row-reverse
          items-center 
          justify-center
          md:gap-24
          text-center 
          h-full`)}
      >
        <h1
          className={trim(`
            md:text-6xl
            text-4xl
            text-black
            font-semibold
            text-primary
            transition-[transform,opacity]
            duration-500
            ease-in-out
            ${isInView ? "opacity-100" : "opacity-0"}
            `)}
        >
          {t(title)}
        </h1>
        <img className="md:w-[35%] w-[50%] md:translate-y-0 translate-y-1/3" src={imageUrl} alt="" />
      </div>
    </SectionContainer>
  );
};

export default AboutHero;