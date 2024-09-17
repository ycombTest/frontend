import React from "react";
import { Handle, Position } from "reactflow";

export const Common = ({ id, title, inputs, outputs, content }) => {
  return (
    <div>
      <div className="mb-2">
        <span className="text-lg font-semibold text-gray-700">{title}</span>
      </div>

      <div className="mb-4">{content}</div>

      {inputs?.map((input, idx) => (
          <Handle
            key={`${id}-input-${idx}`}
            type="target"
            position={Position.Left}
            id={`${id}-input-${idx}`}
            style={{
              top: `${(100 / (inputs.length + 1)) * (idx + 1)}%`,
              background: "#7da5f0",
              borderRadius: "50%",
              width: "12px",
              height: "12px",
              boxShadow: "0 0 3px 2px rgba(0, 123, 255, 0.4)",
            }}
          />
      
      ))}

      {outputs?.map((output, idx) => (
        <Handle
          key={`${id}-output-${idx}`}
          type="source"
          position={Position.Right}
          id={`${id}-output-${idx}`}
          style={{
            top: `${(100 / (outputs.length + 1)) * (idx + 1)}%`,
            background: "#7da5f0",
            borderRadius: "50%",
            width: "12px",
            height: "12px",
            boxShadow: "0 0 3px 2px rgba(0, 123, 255, 0.4)",
          }}
        />
      ))}
    </div>
  );
};
