import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
}

const Modal = (props: ModalProps) => {
  const { children } = props;
  const modalRoot = document.getElementById("modal"); // Target the #modal div in index.html

  if (!modalRoot) {
    return null; // Ensure the target exists
  }

  return ReactDOM.createPortal(
    children, // Content to render
    modalRoot // DOM node to render into
  );
};

export default Modal;
