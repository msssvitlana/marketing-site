"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) =>
      e.code === "Escape" && onClose();
    document.addEventListener("keydown", handleKeyDown);

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      className={`${styles.backdrop} ${isOpen ? styles.open : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={styles.modalWrap}>{children}</div>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close modal"
      >
        <svg className={styles.icon} width={20} height={20}>
          <use href="/icons/icon-close.svg#icon-close" />
        </svg>
      </button>
    </div>,
    document.body,
  );
};

export default Modal;
