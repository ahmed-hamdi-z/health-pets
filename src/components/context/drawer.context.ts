import {createContext, type SetStateAction, type Dispatch } from "react";

const DrawerContext = createContext({
  openDrawer: false,
  setOpenDrawer: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export default DrawerContext;
