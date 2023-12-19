import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import MoveArrows from "../assets/moveArrows.png";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        onClick={() => {
          console.log({ showModal });
          setShowModal(true);
        }}
      >
        Open
      </Button>
      <div>{`${showModal}`}</div>
      <Modal
        open={showModal}
        closeModal={() => setShowModal(false)}
        title="Draggable dialog"
        draggable
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
