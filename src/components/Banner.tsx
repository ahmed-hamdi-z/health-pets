import SectionContainer from "./containers/SectionContainer";
import { useTranslation } from "react-i18next";
import ButtonStyled from "./ButtonStyled";
import { useNavigate } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import type { ReactNode } from "react";
import useScrollInToView from "../hooks/useScrollInToView";
import { trim } from "../utils/general";
import { appRoutes } from "../config";

const Banner = ({
  children,
  className = "",
  contact,
  parallaxBg,
  parallax,
  title,
  titleText,
  titleClassName,
  parallaxClassName,
}: {
  children?: ReactNode;
  className?: string;
  contact?: boolean;
  parallaxBg?: boolean;
  parallax?: boolean;
  title?: boolean;
  titleText?: string;
  titleClassName?: string;
  parallaxClassName?: string;
}) => {
  const { t } = useTranslation(["common"]);
  const { targetRef, isInView } = useScrollInToView();
  const push = useNavigate();
  //const goToContact = useContactNav();

  return (
    <SectionContainer
      className={`
        min-h-[200px]
        bg-no-repeat
        bg-center
        bg-cover
        ${contact ? "bg-drops-pattern" : ""}
        ${parallax ? "bg-fixed relative" : ""}
        ${className}`}
      wraperClassName="h-full justify-center"
    >
      {(title || titleText) && (
        <SectionHeader
          className={`
            text-white 
            mt-4 z-[1]
            text-shadow-lg 
            ${titleClassName}`}
          title={titleText || t("coName")}
        />
      )}

      {parallaxBg && parallax && (
        <div
          className={trim(`
          absolute 
          top-0 
          left-0 
          w-full 
          h-full
          ${parallaxClassName}`)}
        ></div>
      )}

      {contact && (
        <div
          ref={targetRef}
          className={trim(`
            flex
            flex-col
            md:flex-row
            md:justify-between
            justify-center
            items-center
            gap-6
            md:px-10
            h-full
            transition-[opacity]
            duration-500
            ease-in-out
            ${isInView ? "opacity-100" : "opacity-0"}`)}
        >
          <h2 className="text-primary text-responsive-subCover font-semibold">
            {t(`purify`)}
          </h2>
          <ButtonStyled
            size="lg"
            bg
            ripple
            hover
            title={t(`contactUs`)}
            onClick={() => push(appRoutes.contact)}
          />
        </div>
      )}

      {children}
    </SectionContainer>
  );
};

export default Banner;
