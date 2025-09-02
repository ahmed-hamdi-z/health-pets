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
import Logo from "../Logo";

const Nav = () => {
  const { t, i18n } = useTranslation("header");
  const { pathname } = useLocation();
  const { setOpenDrawer } = useContext(DrawerContext);
  const push = useNavigate();

  const navArr = [
    { name: t("Home"), link: appRoutes.home },
    { name: t("About us"), link: appRoutes.about },
    { name: t("Products"), link: appRoutes.products },
    { name: t("Services"), link: appRoutes.services },
    { name: t("Blogs"), link: appRoutes.blogs },
    { name: t("Contact us"), link: appRoutes.contact },
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
        text-black
        `)}>
      <div className="max-w-[250px] px-2 py-1 bg-white rounded-full -translate-x-1/2 hidden md:block">
        <Logo
          onClick={() => onClickHandler(appRoutes.home)}
          className="cursor-pointer md:w-32"
        />
      </div>

      {navArr.slice(0, 3).map(({ name, link }, i) => (
        <button
          key={i}
          onClick={() => onClickHandler(link)}
          className={trim(`
            !text-primary
            hidden
            md:inline-flex
            font-medium
            ${pathname === link
              ? `underline underline-offset-4
                 decoration-secondary
                 decoration-4`
              : ""
            }
            ${activationArr[i].active ? `opacity-100` : `opacity-0`}`)}
          title={name}
        >
          {name}
        </button>
      ))}
      {navArr.slice(3).map(({ name, link }, i) => (
        <button
          key={i}
          onClick={() => onClickHandler(link)}
          className={trim(`
            !text-primary
            hidden
            md:inline-flex
            font-medium
            ${pathname === link
              ? `underline underline-offset-4
                 decoration-secondary 
                 decoration-4`
              : ""
            }
            ${activationArr[i + 3].active ? `opacity-100` : `opacity-0`}`)}
          title={name}
        >
          {name}
        </button>
      ))}
      <button
        className={trim(`
          !text-primary 
          hidden 
          md:inline-flex 
          text-responsive-2xs 
          hover:!text-secondary
          animate-appear
          `)}
        title={t("nav.lang")}
        onClick={() => {
          changeLanguage(i18n.language === "en" ? "ar" : "en");
        }}
      />
      <button
        className={`${i18n.language === "ar" ? "-scale-x-100" : ""} md:hidden`}
        onClick={() => setOpenDrawer((prev) => !prev)}
      >
        <MdMenuOpen />
      </button>
      <Drawer
        drawerNavFun={onClickHandler}
        activePath={pathname}
        lang={i18n.language}
        navArr={navArr}
        ChangeLanguageBtn={
          <button
            className={trim(`
              !text-primary 
              text-responsive-2xs 
              hover:!text-secondary
              `)}
            title={t("nav.lang")}
            onClick={() => {
              changeLanguage(i18n.language === "en" ? "ar" : "en");
              setOpenDrawer(() => false);
            }}
          >
            {t("nav.lang")}
          </button>
        }
      />
    </nav>
  );
};

export default Nav;
