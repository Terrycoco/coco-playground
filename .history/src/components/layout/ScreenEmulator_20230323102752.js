import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentDevice,
  selectCurrentDeviceIdx,
  selectUserDevice,
  selectUserDeviceIdx,
  selectIsFullScreen,
} from "@/slices/uiSlice";
import { selectDevices, selectDeviceSettings } from "@/slices/themeSlice";
import FakeHeader from "@/components/layout/FakeHeader";
import { useViewport } from "@/hooks";
import { isOneOf } from "@/utils";

const ScreenEmulator = ({ children, ...props }) => {
  const userDevice = useViewport();
  const [width, setWidth] = useState("400px");
  const isFullScreen = useSelector(selectIsFullScreen);
  const currentDevice = useSelector(selectCurrentDevice);
  const devIdx = useSelector(selectCurrentDeviceIdx);
  const userDevIdx = useSelector(selectUserDeviceIdx);
  const devSets = useSelector(selectDeviceSettings);
  const [baseFontSize, setBaseFontSize] = useState();
  const [baseLineHeight, setBaseLineHeight] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  //const deviceFontSizes = useSelector(selectDeviceElements);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  //get some valid heights
  useEffect(() => {
    // if (userDevice && device && device.length > 0 && devices !== undefined) {
    if (isLoaded) {
      if (isFullScreen) {
        setWidth(window.innerWidth);
        setBaseFontSize(devSets[userDevice].baseFontSize);
      } else {
        console.log("device is:", device);
        let w = devSets[devIdx].min + 100;
        setWidth(w);
        setBaseFontSize(devSets[currentDevice].baseFontSize);
      }
    }
  }, [devIdx, isFullScreen, userDevIdx, devSets, isLoaded]);

  const getEmulation = () => {
    return {
      border: "1px solid darkgray",
      width: `${width}px`,
      overflowX: "hidden",
      fontSize: baseFontSize,
      marginTop: "1rem",
      marginLeft: "1rem",
      height: window.innerHeight - 75 + "px",
      overflowY: "scroll",
      borderRadius: "10px",
      boxShadow: "rgba(213, 217, 217, 0.5) 0 2px 5px 0",
    };
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
