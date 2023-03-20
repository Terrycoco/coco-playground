"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentDevice, updateCurrentDevice } from "@/slices/uiSlice";

const DeviceHeader = () => {
  const currentDevice = useSelector(selectCurrentDevice);
  const dispatch = useDispatch();
  const variables = useSelector(selectVariables);
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
