// FileNode.js

import React, { useState } from 'react';
import BaseNode from './baseNode';


export const ExaAISearch = ({ id,data }) => {
  const [currText, setCurrText] = useState("Query");
  const [inputType, setInputType] = useState(data.inputType || 'General');

  const content = (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Text:
        <input 
          type="text" 
          value={currText} 
          onChange={(e) => setCurrText(e.target.value)} 
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm"
        />
      </label>
     <label className="block text-sm font-medium text-gray-700 mb-1">
        Loader Type:
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm"
        >
          <option value="Text">General</option>
          <option value="File">Other</option>
        </select>
      </label>
    </div>
  );

  return (
    <BaseNode
      id={id}
      title="Exa AI Search"
      inputs={[{ id: 'fileInput' }]}
      outputs={[{ id: 'fileOutput' }]}
      content={content}
    />
  );
};
