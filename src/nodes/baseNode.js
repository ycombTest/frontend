import React from "react";
import { Common } from "./common";

export const BaseNode = ({ id, title, inputs, outputs, content }) => {
  const handleCancel = () => {
    console.log(`Cancel node with id: ${id}`);
  };
  return (
    <div className="w-full max-w-xs p-4 bg-white shadow-md border border-gray-300 rounded-lg transition duration-300 ease-in-out hover:border-purple-300 hover:ring-2 hover:ring-purple-200">
      <button
        onClick={handleCancel}
        className="absolute top-2 right-2 p-1 rounded-full  text-gray-900 hover:bg-slate-400 focus:outline-none"
      >
        &times;
      </button>
      <Common
        id={id}
        title={title}
        content={content}
        inputs={inputs}
        outputs={outputs}
      />
    </div>
  );
};

export default BaseNode;
