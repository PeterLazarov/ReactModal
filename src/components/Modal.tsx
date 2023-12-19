import React, { ReactNode, useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

type Props = {
  children: ReactNode;
  open: boolean;
  closeModal: () => void;
  draggable?: boolean;
  hideCloseButton?: boolean;
  title?: string;
  footer?: ReactNode;
  footerClass?: string;
  labelClass?: string;
};
const Modal: React.FC<Props> = ({
  children,
  open,
  closeModal,
  draggable,
  hideCloseButton,
  title,
  footer,
  footerClass = "",
  labelClass = "",
}) => {
  const [transformCoord, setTransformCoord] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  function onOverlayClick() {
    closeModal();
  }

  function onModalClick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (dragging) {
      setTransformCoord((curr) => ({
        x: curr.x + e.movementX,
        y: curr.y + e.movementY,
      }));
    }
  }
  function onDragStart() {
    if (draggable) {
      setDragging(true);
    }
  }
  function onDragEnd() {
    if (draggable) {
      setDragging(false);
    }
  }

  if (open) {
    return ReactDOM.createPortal(
      <div
        onClick={onOverlayClick}
        className="fixed top-0 left-0 bottom-0 right-0 bg-gray-900/80 backdrop-blur-sm"
        onMouseMove={onMouseMove}
        onMouseUp={onDragEnd}
      >
        <div
          style={{
            transform: `translate(${transformCoord.x}px, ${transformCoord.y}px)`,
            userSelect: dragging ? "none" : "all",
            cursor: dragging ? "move" : "default",
          }}
          onClick={onModalClick}
          className="w-8/12 my-10 mx-auto bg-white flex flex-col gap-4 m-4 rounded-xl p-5"
          onMouseDown={onDragStart}
        >
          {title && title !== "" && (
            <label className={`uppercase text-lg ${labelClass}`}>{title}</label>
          )}
          <div>{children}</div>

          {footer}
          {!footer && !hideCloseButton && (
            <div className={`flex justify-end ${footerClass}`}>
              <Button onClick={closeModal}>Close</Button>
            </div>
          )}
        </div>
      </div>,
      document.getElementById("modalRoot")!
    );
  } else {
    return "";
  }
};

export default Modal;
