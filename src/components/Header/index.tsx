import Nav from "./Nav";
import { useState } from "react";
import useAtTop from "../../hooks/useAtTop";
import useScrollSpy from "../../hooks/useScrollSpy";
import { trim } from "../../utils/general";
import DrawerContext from "../context/drawer.context";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { isTop } = useAtTop();
  const { scrollDir } = useScrollSpy();

  return (
    <header
      className={trim(`
        overflow-hidden
        flex
        fixed
        w-full
        transition-all
        duration-300
        box-border
        z-10
        ${isTop ? "bg-gray-100/80" : "bg-gray-100"}
        ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}
        ${isTop ? "shadow-none" : "shadow-headerShadow"}`)}
    >
      <DrawerContext.Provider value={{ openDrawer, setOpenDrawer }}>
        <Nav />
      </DrawerContext.Provider>
    </header>
  );
};

export default Header;
