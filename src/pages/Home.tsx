import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

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
      <Modal open={showModal} closeModal={() => setShowModal(false)}>
        <div>CONTENT</div>
      </Modal>
    </div>
  );
};

export default Home;
