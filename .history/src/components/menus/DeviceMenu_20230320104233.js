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
    },
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
      <li id="full" style={styles.li} onClick={handleSelect} className={css.li}>
        Full
      </li>
      <li
        id="mobile"
        style={styles.li}
        className={css.li}
        onClick={handleSelect}
      >
        mobile
      </li>
      <li
        id="tablet"
        style={styles.li}
        className={css.li}
        onClick={handleSelect}
      >
        tablet
      </li>
      <li
        id="laptop"
        style={styles.li}
        className={css.li}
        onClick={handleSelect}
      >
        laptop
      </li>
      <li
        id="desktop"
        style={styles.li}
        className={css.li}
        onClick={handleSelect}
      >
        desktop
      </li>
      <li id="tv" style={styles.li} className={css.li} onClick={handleSelect}>
        tv
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
