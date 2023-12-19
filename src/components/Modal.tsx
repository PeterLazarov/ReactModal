import React, { ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

type Props = {
  children: ReactNode;
  open: boolean;
  closeModal: () => void;
  draggable?: boolean;
  title?: string;
  modalClass?: string;
  footerButtons?: ReactNode;
  footerClass?: string;
  labelClass?: string;
};
const Modal: React.FC<Props> = ({
  children,
  open,
  closeModal,
  draggable,
  title,
  modalClass = "",
  footerButtons,
  footerClass = "",
  labelClass = "",
}) => {
  const modalPortal = document.getElementById("modalRoot");
  const [transformCoord, setTransformCoord] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [animationOpen, setAnimationOpen] = useState(open);
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAnimationOpen(open);
  }, [open]);

  function triggerClose() {
    setTimeout(closeModal, 500);
    setAnimationOpen(false);
  }
  function onOverlayClick() {
    triggerClose();
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

  const visibilityClass = open ? "visible" : "invisible";
  const opacityClass = animationOpen ? "opacity-100" : "opacity-0";
  const transitionClass = `transition-opacity duration-1000 ${opacityClass}`;

  return (
    modalPortal &&
    ReactDOM.createPortal(
      <div
        onClick={onOverlayClick}
        className={`fixed top-0 left-0 bottom-0 right-0 bg-gray-900/80 backdrop-blur-sm flex flex-col transition-all ${visibilityClass}`}
        onMouseMove={onMouseMove}
        onMouseUp={onDragEnd}
      >
        <div
          ref={modal}
          style={{
            transform: `translate(${transformCoord.x}px, ${transformCoord.y}px)`,
            userSelect: dragging ? "none" : "all",
            cursor: dragging ? "move" : "default",
          }}
          onClick={onModalClick}
          className={`w-8/12 my-auto mx-auto bg-white flex flex-col gap-4 m-4 rounded-xl p-5 max-h-96 ${transitionClass} ${modalClass}`}
          onMouseDown={onDragStart}
        >
          {title && title !== "" && (
            <label className={`uppercase text-lg ${labelClass}`}>{title}</label>
          )}
          <div className="flex-1 overflow-auto">{children}</div>

          <div className={`flex justify-end gap-4 ${footerClass}`}>
            {footerButtons}
            <Button variant="primary" onClick={() => triggerClose()}>
              Close
            </Button>
          </div>
        </div>
      </div>,
      modalPortal
    )
  );
};

export default Modal;
