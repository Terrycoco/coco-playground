import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentDevice, selectIsFullScreen } from "@/slices/uiSlice";
import { selectDevices, selectDeviceElements } from "@/slices/themeSlice";
import FakeHeader from "@/components/layout/FakeHeader";
import { useViewport } from "@/hooks";
import { isOneOf } from "@/utils";

const ScreenEmulator = ({ children, ...props }) => {
  const userDevice = useViewport();
  const [width, setWidth] = useState("400px");
  const isFullScreen = useSelector(selectIsFullScreen);
  const device = useSelector(selectCurrentDevice);
  const devices = useSelector(selectDevices);
  const [baseFontSize, setBaseFontSize] = useState();
  const deviceFontSizes = useSelector(selectDeviceElements);

  //get some valid heights
  useEffect(() => {
    if (userDevice && device && device.length > 0 && devices !== undefined) {
      if (isFullScreen) {
        setWidth(window.innerWidth);
        let userDev = userDevice;
        setBaseFontSize(devices[userDev].baseFontSize + "px");
      } else {
        console.log("device is:", device, "devices:", devices);
        let w = devices[device].min + 100 + "px";
        setWidth(w);
        setBaseFontSize(deviceFontSizes[device].root.fontSize + "px");
      }
    }
  }, [device, isFullScreen, device, userDevice]);

  const getEmulation = () => {
    return {
      border: "1px solid darkgray",
      width: `${width}`,
      overflowX: "hidden",
      fontSize: `${baseFontSize}`,
      marginTop: "1rem",
      marginLeft: "1rem",
      height: window.innerHeight - 75 + "px",
      overflowY: "scroll",
      borderRadius: "10px",
      boxShadow: "rgba(213, 217, 217, 0.5) 0 2px 5px 0",
    };
  };

  if (isFullScreen == true || isOneOf(userDevice, ["mobile", "tablet"])) {
    return <>{children}</>;
  } else {
    return (
      <div style={getEmulation()}>
        <FakeHeader />
        {children}
      </div>
    );
  }
};

export default ScreenEmulator;

// function getUserDevice(size, devices) {
//   for (const d in devices) {
//     if (devices[d].min <= size && size <= devices[d].max) {
//       return d;
//     }
//   }
// }
