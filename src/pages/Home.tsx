import React from "react";
import Button from "../components/Button";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button onClick={() => {}}>Open</Button>
    </div>
  );
};

export default Home;
