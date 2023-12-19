import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import MoveArrows from "../assets/moveArrows.png";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [allowDragging, setAllowDragging] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        variant="primary"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open
      </Button>
      <Modal
        open={showModal}
        closeModal={() => setShowModal(false)}
        title="Draggable dialog"
        draggable={allowDragging}
        footer={
          <div className="flex justify-end gap-4">
            <Button
              variant="secondary"
              onClick={() => setAllowDragging(!allowDragging)}
            >
              {allowDragging ? "Deny Dragging" : "Allow Dragging"}
            </Button>
            <Button variant="primary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </div>
        }
      >
        <div className="flex gap-4">
          <img
            className=" w-7 h-7 select-none "
            draggable={false}
            src={MoveArrows}
          />
          <label className=" text-base">Drag me</label>
        </div>
        <div style={{ height: 8000 }}>
          <label className=" text-base">I am a very big box</label>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
