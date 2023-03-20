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
    setUserSize(window.innerWidth);
  }, []);

  const styles = {
    header: {
      display: "flex",
      justifyContent: "center",
    },
  };

  return <header style={styles.header}>Current Size is: {userSize}</header>;
};

export default DeviceHeader;
