import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";

type IModal = {
  content: React.ReactNode;
  onCloseModal: () => void;
};

let modalElement: HTMLElement;

const Modal = ({ content, onCloseModal }: IModal): JSX.Element => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    modalElement = document.getElementById("modal-root") as HTMLElement;
  }, []);

  if (isBrowser) {
    return createPortal(
      <section
        className={styles.modalContainer}
        data-testid="modal"
        role="dialog"
        aria-label="modal"
      >
        <div className={styles.modalInner}>
          <button
            onClick={onCloseModal}
            className={styles.closeBtn}
            data-testid="modal-close-btn"
          >
            X
          </button>
          <div className={styles.modalContent}>{content}</div>
        </div>
      </section>,
      modalElement
    );
  } else {
    return <div></div>;
  }
};

export default Modal;
