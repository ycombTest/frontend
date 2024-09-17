// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

export const InputNode = ({ id, data, title }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');


  const content = (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Name:
        <input 
          type="text" 
          value={currName} 
          onChange={(e) => setCurrName(e.target.value)} 
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm"
        />
      </label>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Type:
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </div>
  );

  return <BaseNode id={id} title="Input Node" inputs={[]} outputs={[{ id: 'value' }]} content={content} />;
};

