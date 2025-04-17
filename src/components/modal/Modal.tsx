import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import { Card } from "../card/Card";
import { StyledModal } from "./Modal.styles";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
};

const Modal = (props: ModalProps) => {
  const { children, isOpen, onClose } = props;
  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!modalRoot || !isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModal role="dialog" aria-modal="true">
      <Card spacing={0} shadow>
        {children}
      </Card>
    </StyledModal>,
    modalRoot
  );
};

export default Modal;
