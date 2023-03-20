import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentDevice, selectIsFullScreen } from "@/slices/uiSlice";
import { selectDevices, selectDeviceElements } from "@/slices/themeSlice";

const ScreenEmulator = ({ children, ...props }) => {
  const [width, setWidth] = useState("400px");
  const isFullScreen = useSelector(selectIsFullScreen);
  const device = useSelector(selectCurrentDevice);
  const devices = useSelector(selectDevices);
  const [baseFontSize, setBaseFontSize] = useState();
  const deviceFontSizes = useSelector(selectDeviceElements);

  //get some valid heights
  useEffect(() => {
    if (device.length > 0 && devices !== undefined) {
      if (isFullScreen) {
        setWidth(window.innerWidth);
      } else {
        console.log("device is:", device, "devices:", devices);
        let w = devices[device].min + 100 + "px";
        setWidth(w);
      }
      setBaseFontSize(deviceFontSizes[device].body.fontSize + "px");
    }
  }, [device, isFullScreen]);

  const getEmulation = () => {
    return {
      border: "1px solid darkgray",
      width: `${width}`,
      fontSize: `${baseFontSize}`,

      height: "550px",
      overflow: "scroll",
      borderRadius: "10px",
      boxShadow: "rgba(213, 217, 217, 0.5) 0 2px 5px 0",
    };
  };

  if (isFullScreen == true) {
    return (
      <>
        {" "}
        {`isFullScreen: ${isFullScreen}`} {children}
      </>
    );
  } else {
    return (
      <div style={getEmulation()}>
        Screen size: {width} Device: {device}
        {children}
      </div>
    );
  }
};

export default ScreenEmulator;
