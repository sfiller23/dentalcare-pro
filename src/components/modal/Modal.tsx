import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button } from "../button/Button";
import { StyledModal } from "./Modal.styles";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = (props: ModalProps) => {
  const { children, isOpen, onClose } = props;
  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!modalRoot || !isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModal role="dialog" aria-modal="true">
      {children}
      <Button onClick={onClose}>Close</Button>
    </StyledModal>,
    modalRoot
  );
};

export default Modal;
