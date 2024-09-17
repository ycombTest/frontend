// FileNode.js

import React, { useState } from 'react';
import BaseNode from './baseNode';
import { TextNode } from './textNode';


export const OpenAILLM = ({ id,data }) => {
    const [currText, setCurrText] = useState(data?.text || "System");
    const [inputType, setInputType] = useState(data.inputType || 'gpt-4');
  
  const content = (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        System:
        <input 
          type="text" 
          value={currText} 
          onChange={(e) => setCurrText(e.target.value)} 
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
        />
      </label>
      <TextNode id={id} data={data} title="Prompt"/>
      
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Model:
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm"
        >
          <option value="Text">gpt-4</option>
          <option value="File">gpt-4o</option>
        </select>
      </label>
    </div>
  );

  return (
    <BaseNode
      id={id}
      title="OpenAI LLM"
      inputs={[{ id: 'system' }, { id: 'prompt' }]}
        outputs={[{ id: 'prompt' }]}
      content={content}
    />
  );
};
