import { appRoutes } from "../../config";
import { changeLanguage } from "i18next";
import { MdMenuOpen } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Drawer from "./Drawer";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import useActivation from "../../hooks/useActivation";
import DrawerContext from "../context/drawer.context";
import { trim } from "../../utils/general";
import ButtonStyled from "../ButtonStyled";
import Logo from "../Logo";

const Nav = () => {
  const { t, i18n } = useTranslation("header");
  const { pathname } = useLocation();
  const { setOpenDrawer } = useContext(DrawerContext);
  const push = useNavigate();

  const navArr = [
    { name: t("nav.home"), link: appRoutes.home },
    { name: t("nav.about"), link: appRoutes.about },
    { name: t("nav.products"), link: appRoutes.products },
    { name: t("nav.blogs"), link: appRoutes.blogs },
    { name: t("nav.services"), link: appRoutes.services },
    { name: t("nav.contact"), link: appRoutes.contact },
  ];

  const { activationArr } = useActivation(navArr.length, 300);

  const onClickHandler = (link: string) => {
    if (pathname !== link) push(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={trim(`
        flex
        items-center
        justify-between
        lg:justify-evenly
        gap-3
        py-5
        px-5
        w-full
        md:px-[3%]
        lg:px-[10%]
        xl:px-[15%]
        z-50`)}
    >
      <div className="max-w-[250px] px-2 py-1 bg-white rounded-full ltr:-translate-x-1/2 translate-x-1/2 hidden md:block">
        <Logo
          onClick={() => onClickHandler(appRoutes.home)}
          className="cursor-pointer md:w-32"
        />
      </div>
      <div className=" items-center hidden md:flex gap-8 ">
        {navArr.map(({ name, link }, i) => (
          <ButtonStyled
            style={{
              color: "black"
            }}
            key={i}
            onClick={() => onClickHandler(link)}
            className={trim(`
            hidden
            font-medium
            ${pathname === link
                ? `underline underline-offset-4
                 decoration-secondary decoration-4`
                : ""
              }
            ${activationArr[i].active ? `opacity-100` : `opacity-0`}`)}
            size="custom"
            title={name}
            animatedUnderline={pathname !== link}
          />
        ))}
      </div>

      <ButtonStyled
        style={{
          color: "black",
          fontSize: "1.2rem"
        }}
        className={trim(`
          hidden 
          text-2xl
          hover:text-red
          animate-appear`)}
        size="custom"
        title={t("nav.lang")}
        onClick={() => {
          changeLanguage(i18n.language === "en" ? "ar" : "en");
        }}
      />

      <MdMenuOpen
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setOpenDrawer(() => true)}
      />
      <Drawer
        drawerNavFun={onClickHandler}
        activePath={pathname}
        lang={i18n.language}
        navArr={navArr}
        ChangeLanguageBtn={
          <ButtonStyled
            className="!text-white"
            title={t("nav.lang")}
            onClick={() => {
              changeLanguage(i18n.language === "en" ? "ar" : "en");
              setOpenDrawer(() => false);
            }}
          />
        }
      />
    </nav>
  );
};

export default Nav;
