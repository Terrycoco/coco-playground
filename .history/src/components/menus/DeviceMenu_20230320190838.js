"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentDevice,
  updateCurrentDevice,
  updateIsFullScreen,
  selectIsFullScreen,
} from "@/slices/uiSlice";
import { selectDevices } from "@/slices/themeSlice";
import css from "./menu.module.css";

const DeviceMenu = () => {
  const currentDevice = useSelector(selectCurrentDevice);
  const fullScreen = useSelector(selectIsFullScreen);
  const dispatch = useDispatch();
  const devices = useSelector(selectDevices);
  const [userSize, setUserSize] = useState();
  const [userDevice, setUserDevice] = useState();

  useEffect(() => {
    setUserSize(window.innerWidth); //TODO MAKE RESPONSIVE
    let ud = getUserDevice(window.innerWidth, devices);
    console.log("userDevice:", ud);
    setUserDevice(ud);
    dispatch(updateCurrentDevice(ud));
  }, []);

  const styles = {
    menu: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    li: {
      fontFamily: "Arial",
      textTransform: "uppercase",
      fontSize: ".8em",
      paddingRight: "1rem",
    },
  };

  const getLiStyles = (src) => {
    let listyle = { ...styles.li };
    if (src === "full" && fullScreen == true) {
      listyle.letterSpacing = "1px";
      listyle.fontWeight = "700";
    } else if (src === currentDevice) {
      listyle.letterSpacing = "1px";
      listyle.fontWeight = "700";
    } else {
      listyle.letterSpacing = "normal";
      listyle.fontWeight = "400";
    }
    return listyle;
  };

  const handleSelect = (e) => {
    const dev = e.target.id;
    if (dev === "full") {
      dispatch(updateIsFullScreen(true));
      dispatch(updateCurrentDevice(userDevice));
    } else {
      dispatch(updateCurrentDevice(dev));
      dispatch(updateIsFullScreen(false));
    }
  };

  return (
    <menu style={styles.menu}>
      <li
        id="mobile"
        style={getLiStyles("mobile")}
        className={css.li}
        onClick={handleSelect}
      >
        mobile
      </li>
      <li id="tablet" style={getLiStyles("tablet")} onClick={handleSelect}>
        tablet
      </li>
      <li
        id="laptop"
        style={getLiStyles("laptop")}
        className={css.li}
        onClick={handleSelect}
      >
        laptop
      </li>
      <li
        id="desktop"
        style={getLiStyles("desktop")}
        className={css.li}
        onClick={handleSelect}
      >
        desktop
      </li>
      <li
        id="tv"
        style={getLiStyles("tv")}
        className={css.li}
        onClick={handleSelect}
      >
        tv
      </li>
      <li
        id="full"
        style={getLiStyles("full")}
        onClick={handleSelect}
        className={css.li}
      >
        Full
      </li>
    </menu>
  );
};

export default DeviceMenu;

function getUserDevice(size, devices) {
  for (const d in devices) {
    if (devices[d].min <= size && size <= devices[d].max) {
      return d;
    }
  }
}
