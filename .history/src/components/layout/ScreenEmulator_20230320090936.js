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
  const fontSizes = useSelector(selectDeviceElements);

  //get some valid heights
  useEffect(() => {
    if (device !== undefined) {
      console.log("got here");
      setWidth(devices[device].min + 100 + "px");
      setBaseFontSize(fontSizes[device].body.fontSize + "px");
    }
  }, [device]);

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

  if (isFullScreen !== undefined)
    return (
      <>
        {" "}
        {`isFullScreen: ${isFullScreen}`} {children}
      </>
    );
  else
    return (
      <div style={getEmulation()}>
        Screen size: {width} Device: {device}
        {children}
      </div>
    );
};

export default ScreenEmulator;
