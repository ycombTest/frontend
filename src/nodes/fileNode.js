// FileNode.js

import React from 'react';
import BaseNode from './baseNode';

export const FileNode = ({ id }) => {
    const content = (
        <div className="p-2">
          <div className="mb-2">
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            />
          </div>
          <button
            className="mt-2 px-4 py-2 text-base text-blue-500 rounded hover:text-blue-700"
          >
            Upload File
          </button>
        </div>
      );
  return (
    <BaseNode
      id={id}
      title="File"
      inputs={[]}
      outputs={[{ id: 'fileOutput' }]}
      content={content}
    />
  );
};
