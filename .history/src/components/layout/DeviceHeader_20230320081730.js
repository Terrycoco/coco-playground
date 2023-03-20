"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentDevice, updateCurrentDevice } from "@/slices/uiSlice";
import { selectDevices } from "@/slices/themeSlice";

const DeviceHeader = () => {
  const currentDevice = useSelector(selectCurrentDevice);
  const dispatch = useDispatch();
  const devices = useSelector(selectDevices);
  const [userSize, setUserSize] = useState();
  const [userDevice, setUserDevice] = useState();

  useEffect(() => {
    setUserSize(window.innerWidth); //TODO MAKE RESPONSIVE
    setUserDevice(getUserDevice(window.innerWidth, devices));
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

  return (
    <header style={styles.header}>
      <menu style={styles.menu}>
        <li id="full" style={styles.li}>
          Full
        </li>
        <li id="mobile" style={styles.li}>
          mobile
        </li>
        <li id="tablet" style={styles.li}>
          tablet
        </li>
        <li id="laptop" style={styles.li}>
          laptop
        </li>
        <li id="desktop" style={styles.li}>
          desktop
        </li>
        <li id="tv" style={styles.li}>
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
