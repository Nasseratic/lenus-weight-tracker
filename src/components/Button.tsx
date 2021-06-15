import React from "react";

const Button: React.FC<
  React.HTMLProps<HTMLButtonElement> & {
    type?: "button" | "submit" | "reset" | undefined;
  }
> = ({ children, className, type = "button", ...rest }) => (
  <button
    {...rest}
    type={type}
    className={`focus:outline-none opacity-70 disabled:opacity-100 py-2 disabled:mx-0.5 disabled:ring-opacity-50 disabled:ring-gray-500 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 ${
      className ?? ""
    }`}
  >
    {children}
  </button>
);

export default Button;
