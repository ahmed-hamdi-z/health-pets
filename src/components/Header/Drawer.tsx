import { useCallback, useContext, type JSX } from "react";
import useDelay from "../../hooks/useDelay";
import useRemoveScroll from "../../hooks/useRemoveScroll";

import { MdKeyboardArrowRight } from "react-icons/md";
import DrawerContext from "../context/drawer.context";
import { trim } from "../../utils/general";
import ButtonStyled from "../ButtonStyled";

const tailWindClasses = {
  aside: {
    width: "w-2/3",
    bg: "bg-[#99D8E0]/90",
    darkBg: null,
  },
  backDrop: {
    bg: "bg-black/50",
  },
};

const Drawer = ({
  navArr,
  activePath,
  ChangeLanguageBtn,
  lang,
  drawerNavFun,
}: {
  navArr: { name: string; link: string }[];
  activePath?: string | null;
  ChangeLanguageBtn?: JSX.Element;
  lang: string;
  drawerNavFun: (link: string) => void;
}) => {
  const { openDrawer, setOpenDrawer } = useContext(DrawerContext);

  const [showComponent, setShowComponent] = useDelay(10, openDrawer);
  useRemoveScroll(openDrawer);

  const handleClose = useCallback(() => {
    setShowComponent(setOpenDrawer, { value: false, delay: 300 });
  }, [setOpenDrawer, setShowComponent]);

  const onNavHandler = (link: string) => {
    handleClose();
    drawerNavFun(link);
  };

  const { aside, backDrop } = tailWindClasses;

  return (
    <div
      className={trim(`
        fixed
        right-0
        top-0
        w-full
        h-full
        min-w-screen
        min-h-screen
        lg:hidden
        md:hidden
        z-20
        ${openDrawer ? "block" : "hidden"}`)}
    >
      <aside
        className={trim(`
          absolute
          top-0
          flex
          flex-col
          h-full
          duration-300
          ease-linear
          px-8
          py-5
          gap-10
          z-10
          ${aside.width || ""}
          ${aside.bg || ""}
          ${aside.darkBg || ""}
          ${lang === "ar" ? "right-full" : "right-0"}
          ${lang === "ar"
            ? showComponent
              ? "translate-x-full"
              : "-translate-x-0"
            : showComponent
              ? "translate-x-0"
              : "translate-x-full"
          }`)}
      >
        <ButtonStyled
          className={trim(` 
            self-start 
            ${lang === "ar" ? "-scale-x-100" : ""}`)}
          size="xs"
          onClick={handleClose}
          SvgIcon={<MdKeyboardArrowRight size={35} />}
        />

        <ul
          className={trim(`
            flex
            h-full
            w-full
            flex-col
            justify-start
            items-center
            gap-5
            overflow-y-auto`)}
        >
          {navArr.map(({ name, link }, i) => (
            <li key={i}>
              <ButtonStyled
                onClick={() => onNavHandler(link)}
                className={trim(`
                  text-black
                  hover:!text-secondary
                  font-medium
                  ${activePath === link
                    ? `underline underline-offset-4
                       decoration-secondary decoration-4`
                    : ""
                  }`)}
                size="md"
                title={name}
              />
            </li>
          ))}

          {ChangeLanguageBtn && <li>{ChangeLanguageBtn}</li>}
        </ul>
      </aside>
      <div
        className={trim(`
          absolute
          w-full
          min-w-screen
          min-h-screen
          h-full
          ${backDrop.bg || ""}
          ${showComponent ? "opacity-70" : "opacity-0"}`)}
        onClick={handleClose}
      ></div>
    </div>
  );
};

export default Drawer;
