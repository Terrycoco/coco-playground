import styles from "./modals.module.css";

const Modal = ({ show, onClose, children }) => {
  const closeMe = () => {
    onClose();
  };
  return (
    <>
      {show && (
        <div className={styles.modal}>
          <div className={styles.content}>
            <span className={styles.close} onClick={closeMe}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
