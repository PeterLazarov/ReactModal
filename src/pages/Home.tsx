import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import MoveArrows from "../assets/moveArrows.png";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [allowDragging, setAllowDragging] = useState(true);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold no-underline mb-4">
        Modal Component Demo
      </h1>
      <Button
        variant="primary"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Dialog
      </Button>
      <Modal
        open={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
        title="Draggable dialog"
        draggable={allowDragging}
        footerButtons={
          <Button
            variant="secondary"
            onClick={() => setAllowDragging(!allowDragging)}
          >
            {allowDragging ? "Deny Dragging" : "Allow Dragging"}
          </Button>
        }
      >
        <div className="flex gap-4">
          <img
            className="w-7 h-7 select-none "
            draggable={false}
            src={MoveArrows}
          />
          <span className="text-base">
            {allowDragging ? "Drag me" : "Allow Dragging so you can drag me"}
          </span>
        </div>
        <div style={{ height: 8000 }}>
          <span className="text-base">I am a very big box</span>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
