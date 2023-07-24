import React from "react";

const SecondaryButton = (props) => {
  return (
    <button
      className="border border-[#631AFF] hover:border-transparent hover:bg-[#631AFF] text-white text-xl rounded px-3 py-2"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default SecondaryButton;
