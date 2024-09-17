// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');


  const content = (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Field Name:
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
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </div>
  );

  return <BaseNode id={id} title="Output Node" inputs={[{ id: 'value' }]} outputs={[]} content={content} />;
};

