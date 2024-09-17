// submit.js
import React from "react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import axios from "axios";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/pipelines/parse",
        {
          nodes: nodes.map((node) => node.id),
          edges: edges.map((edge) => [edge.source, edge.target]),
        }
      );

      const data = response.data;
      alert(
        `number of Nodes: ${data.num_nodes}\n` +
          `Number of Edges: ${data.num_edges}\n` +
          `Is DAG: ${data.is_dag}`
      );
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the pipeline.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </div>
  );
};
