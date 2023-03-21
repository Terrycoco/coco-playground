import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, fn) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        fn();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, fn]);
}
/**
 * Component that run function if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.onClickOutside);

  return (
    <div
      ref={wrapperRef}
      style={props.style ? props.style : { width: "100%" }}
      className={props.className ? props.className : ""}
    >
      {props.children}
    </div>
  );
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
  onClickOutside: PropTypes.func.isRequired,
};

export default OutsideAlerter;
