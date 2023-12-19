import React from "react";

const variants = {
  primary:
    "bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700",
  secondary:
    "bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white border border-blue-500 hover:border-transparent",
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: keyof typeof variants;
};

const Button: React.FC<Props> = ({
  children,
  variant,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`py-2 px-4 rounded ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
