import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentDevice,
  selectCurrentDeviceIdx,
  selectUserDevice,
  selectUserDeviceIdx,
  selectIsFullScreen,
} from "@/slices/uiSlice";
import { selectDeviceSettings, selectTheme } from "@/slices/themeSlice";
import FakeHeader from "@/components/layout/FakeHeader";
import { useViewport } from "@/hooks";
import { isOneOf } from "@/utils";

const ScreenEmulator = ({ children, ...props }) => {
  const userDevice = useSelector(selectUserDevice);
  const [width, setWidth] = useState("400px");
  const isFullScreen = useSelector(selectIsFullScreen);
  const currentDevice = useSelector(selectCurrentDevice);
  const theme = useSelector(selectTheme);
  const devIdx = useSelector(selectCurrentDeviceIdx);
  const userDevIdx = useSelector(selectUserDeviceIdx);
  const devSets = useSelector(selectDeviceSettings);
  const [baseFontSize, setBaseFontSize] = useState("16px");
  const [baseLineHeight, setBaseLineHeight] = useState("1.5");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  //get some valid heights
  useEffect(() => {
    if (isLoaded && userDevice !== undefined) {
      if (isFullScreen === true) {
        console.log("userDevice:", userDevice);
        setWidth(window.innerWidth);
        setBaseFontSize(devSets[userDevice].baseFontSize);
      } else {
        console.log("currentDevice:", currentDevice);
        let w = devSets[currentDevice].min + 100;
        setWidth(w);
        setBaseFontSize(devSets[currentDevice].baseFontSize);
      }
    }
  }, [currentDevice, isFullScreen, userDevice, devSets, isLoaded]);

  const getEmulation = () => {
    if (baseFontSize !== undefined) {
      return {
        border: "1px solid darkgray",
        position: "relative",
        width: `${width}px`,
        overflowX: "hidden",
        fontSize: baseFontSize,
        marginTop: calc(theme.containers.header.height + "1rem"),
        marginLeft: "1rem",
        height: window.innerHeight - 75 + "px",
        overflowY: "scroll",
        borderRadius: "10px",
        boxShadow: "rgba(213, 217, 217, 0.5) 0 2px 5px 0",
      };
    }
  };

  if (isFullScreen == true || isOneOf(userDevice, ["mobile", "tablet"])) {
    //still need to set base font size here
    return <div style={{ fontSize: baseFontSize }}>{children}</div>;
  } else {
    return (
      <div id="emulator" style={getEmulation()}>
        <FakeHeader />
        {children}
      </div>
    );
  }
};

export default ScreenEmulator;
