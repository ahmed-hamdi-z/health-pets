import { useTranslation } from "react-i18next";
import useScrollInToView from "../../hooks/useScrollInToView";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../config";
import SectionContainer from "../containers/SectionContainer";
import { trim } from "../../utils/general";

const HomeHero = () => {
  const { t, i18n } = useTranslation(["home", "common"]);
  const { targetRef, isInView } = useScrollInToView();
  const push = useNavigate();

  return (
    <SectionContainer
      ref={targetRef}
      className={`
        bg-[url('/images/cat.jpg')]
        bg-cover
        bg-no-repeat 
        bg-center
        h-screen
        justify-center`}
      wraperClassName={`${i18n.language === "en" ? "md:items-end" : ""}`}
    >
      {/* <video
        autoPlay
        muted
        className="w-screen h-screen object-fill"
        src="/images/web.mp4"
      ></video> */}
      <div
        className={trim(`
          overflow-hidden
          absolute 
          bottom-1/9
          right-1/9
          md:flex 
          flex-col 
          items-center
          gap-2
          transform
          md:gap-4 
           `)}
      >
        {/* <h1
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
        </h1> */}
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
            ${i18n.language === "ar" ? "" : ""}`)}
        >

          <h3
            className={trim(`
            text-xl
            md:text-5xl
            font-bold text-black`)}
          > Healthy pets...Happy gets...
          </h3>
        </div>{" "}
        <button
          className={trim(`
            mb-2
            px-9
            z-50
            py-2
            rounded-2xl
            text-white
            bg-[#48BACC]
            text-responsive-lg
            scale-100
            hover:scale-105
            cursor-pointer
            transition-all
            duration-300
            shadow-md
            shadow-[#48BACC]/50
            ${isInView ? "opacity-100" : "opacity-0"}`)}
          title={t("contactUs", { ns: "common" })}
          onClick={() => push(appRoutes.contact)}
        >
          {t("contactUs", { ns: "common" })}
        </button>
      </div>
    </SectionContainer>
  );
};

export default HomeHero;
