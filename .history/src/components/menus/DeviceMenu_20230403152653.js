"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentDevice,
  updateCurrentDevice,
  updateIsFullScreen,
  selectIsFullScreen,
} from "@/slices/uiSlice";
import { selectContainers } from "@/slices/themeSlice";
import css from "./menu.module.css";
import { selectVariables } from "@/slices/variablesSlice";
import { useViewport } from "@/hooks";

const DeviceMenu = () => {
  const currentDevice = useSelector(selectCurrentDevice);
  const fullScreen = useSelector(selectIsFullScreen);
  const dispatch = useDispatch();
  const containers = useSelector(selectContainers); //array
  const userDevice = useViewport();
  const variables = useSelector(selectVariables);

  const styles = {
    menu: {
      position: "sticky",
      top: 0,
      paddingBottom: ".5rem",
      paddingTop: "0.5rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "var(--clr-primary5)",
    },
    li: {
      fontFamily: "Arial",
      textTransform: "uppercase",
      fontSize: "10px",
    },
  };

  const getLiStyles = (src) => {
    let listyle = { ...styles.li };
    if (src === "full" && fullScreen == true) {
      listyle.color = variables["var(--clr-primary)"];
    } else if (src === currentDevice) {
      listyle.color = variables["var(--clr-primary)"];
    } else {
      listyle.color = "gray";
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
        id="full"
        style={getLiStyles("full")}
        onClick={handleSelect}
        className={css.li}
      >
        Full
      </li>
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
