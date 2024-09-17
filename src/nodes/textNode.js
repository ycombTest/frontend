import { useState } from 'react';
import BaseNode from './baseNode';
import { Common } from './common';

export const TextNode = ({ id, data, title }) => {
  const [currText, setCurrText] = useState(data?.text || 'input');
  const [variables, setVariables] = useState([]);

  
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    detectvariables(e.target.value); 
  };

 
  const detectvariables = (text) => {
    const regex = /\{\{(\w+)\}\}/g;
    let match;
    const foundVariables = [];

    while ((match = regex.exec(text)) !== null) {
      console.log("item: ", match[1]);
      foundVariables.push(match[1]); 
    }

    setVariables(foundVariables);
  };

 
  const handleTextareaResize = (e) => {
    e.target.style.height = 'auto'; 
    e.target.style.height = `${e.target.scrollHeight}px`; 
  };

  const content = (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Text:
        <textarea
          value={currText}
          onChange={(e) => {
            handleTextChange(e);
            handleTextareaResize(e); 
          }}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm resize-none overflow-hidden"
          style={{ minHeight: '20px' }} 
        />
      </label>
    </div>
  );

 
  if (title) {
    return <Common
    id={id}
    title={title || 'Text Node'}
    inputs={variables.map((item) => ({ id: `${id}-input-${id}` }))}
    outputs={[{ id: 'output' }]}
    content={content}
    />;
  }

  return (
    
    <BaseNode
      id={id}
      title={title || 'Text Node'}
      inputs={variables.map((item) => ({ id: item }))} 
      outputs={[{ id: 'output' }]}
      content={content}
    />
  );
};
