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
      display: "flex",
      justifyContent: "center",
      fontFamily: "Arial",
    },
  };

  return (
    <header style={styles.header}>
      <menu>
        <li>Full</li>
        <li>mobile</li>
        <li>tablet</li>
        <li>laptop</li>
        <li>desktop</li>
        <li>tv</li>
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
