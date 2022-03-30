import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useMountTransition from "../customHook/useMountTransition";
import styles from "../styles/modal.module.css"

const Modal = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const hasTransitionedIn = useMountTransition(show, 1000);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    setIsBrowser(true);

    const closeOnEscapeKeyDown = e => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };

    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  }, [onClose]);

  const modalContent = hasTransitionedIn || show ? (
    <div className={`${styles.modal_overlay} ${hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={onClose}>
      <div className={`${styles.modal} ${hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={e => e.stopPropagation()}>
        <div className={styles.modal_header}>
          <h3>Admin Login</h3>
        </div>
        <div className={styles.modal_body}>
          <form method="post" onSubmit={handleSubmit} className={styles.modal_body_form}>
            <label>Username</label>
            <input className={styles.modal_body_form___input} type="text" placeholder="Enter Username" name="username" required />
            <label className={styles.modal_body_form___label}>Password</label>
            <input className={styles.modal_body_form___input} type="password" placeholder="Enter Password" name="password" required />
            <button className={styles.modal_body_form___button} type="submit">Login</button>
          </form>
        </div>
        <div className={styles.modal_footer}>
          <button className={styles.modal_footer_button} onClick={onClose}>Cancel</button>
          <span>Info</span>
        </div>
      </div>
    </div>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

export default Modal;