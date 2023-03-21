"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { currentTheme } from "@/themes";

export const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(0); //avoid window not defined error
  const [screen, setScreen] = useState();
  const [screens, setScreens] = useState(currentTheme.devices);

  const handleWindowResize = () => {
    let w = window.innerWidth;
    setWidth(w);
    for (const s in screens) {
      if (screens[s].min <= w && w <= screens[s].max) {
        setScreen(s);
        break;
      }
    }
  };

  //initial
  useEffect(() => {
    setScreens(currentTheme.devices); //TODO WARNING SCREEN SIZES NOT CHANGEABLE AFTER THIS POINT
    let w = window.innerWidth;
    setWidth(w);
    for (const s in screens) {
      if (screens[s].min <= w && w <= screens[s].max) {
        setScreen(s);
        console.log("intial screen size: ", s);
        break;
      }
    }
    //and listen for changes
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={screen}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const screen = useContext(viewportContext);
  return screen;
};
