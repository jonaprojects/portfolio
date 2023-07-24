import React from "react";

const PrimaryButton = (props) => {
  return (
    <button
      className="bg-[#631AFF] hover:bg-[#310198] text-white text-xl rounded px-3 py-2"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
