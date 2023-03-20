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
import css from "./layout.module.css";

const DeviceHeader = () => {
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
    header: {
      fontFamily: "Arial",
    },
    menu: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    li: {
      textTransform: "uppercase",
      fontSize: ".8rem",
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
    <header style={styles.header}>
      <menu style={styles.menu}>
        <li
          id="full"
          style={styles.li}
          onClick={handleSelect}
          className={css.li}
        >
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
        <li id="tablet" style={styles.li} className={css.li}>
          tablet
        </li>
        <li id="laptop" style={styles.li} className={css.li}>
          laptop
        </li>
        <li id="desktop" style={styles.li} className={css.li}>
          desktop
        </li>
        <li id="tv" style={styles.li} className={css.li}>
          tv
        </li>
      </menu>
    </header>
  );
};

export default DeviceHeader;

function getUserDevice(size, devices) {
  for (const d in devices) {
    if (devices[d].min <= size && size <= devices[d].max) {
      return d;
    }
  }
}
