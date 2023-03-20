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

  useEffect(() => {
    setUserSize(window.innerWidth); //TODO MAKE RESPONSIVE
    getUserDevice(1440, devices);
  }, []);

  const styles = {
    header: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "Arial",
    },
  };

  return <header style={styles.header}>Current Size is: {userSize}</header>;
};

export default DeviceHeader;

function getUserDevice(size, devices) {
  for (const d in devices) {
    if (devices[d].min <= size && size <= devices[d].max) {
      return d;
    }
  }
}
