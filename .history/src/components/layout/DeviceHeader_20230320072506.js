"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentDevice, updateCurrentDevice } from "@/slices/uiSlice";

function DeviceHeader() {
  const theme = useSelector(selectTheme);
  const variables = useSelector(selectVariables);
  const [userSize, setUserSize] = useState();

  useEffect(() => {
    setUserSize = window.innerWidth;
  }, []);

  const styles = {
    header: {
      display: "flex",
      justifyContent: "center",
    },
  };

  return <header style={styles.header}></header>;
}

export default DeviceHeader;
