import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
