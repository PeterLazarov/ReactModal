import React, { ReactNode, useRef } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

type Props = {
  children: ReactNode;
  open: boolean;
  closeModal: () => void;
  hideCloseButton?: boolean;
};
const Modal: React.FC<Props> = ({
  children,
  open,
  closeModal,
  hideCloseButton,
}) => {
  // Reference to the modal's outer div element
  const divRef = useRef<HTMLDivElement>(null);

  function onOverlayClick() {
    closeModal();
  }

  function onModalClick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  if (open) {
    return ReactDOM.createPortal(
      <div
        onClick={onOverlayClick}
        className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900/80 backdrop-blur-sm"
      >
        <div
          ref={divRef}
          onClick={onModalClick}
          className="w-8/12 my-10 mx-auto bg-white flex flex-col gap-4 m-4 rounded-xl"
        >
          {children}
          {!hideCloseButton && <Button onClick={closeModal}>Close</Button>}
        </div>
      </div>,
      document.getElementById("modalRoot")!
    );
  } else {
    return "";
  }
};

export default Modal;
