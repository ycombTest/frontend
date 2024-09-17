import React, { useState } from 'react'
import { InputNode } from './inputNode'
import { TextNode } from './textNode'
import BaseNode from './baseNode';

export const  Integration = ({ id, data })=> {
    const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
    const [appType, setAppType] = useState(data.inputType || 'Gmail');
    const [actionType, setActionType] = useState(data.inputType || 'Create Email Draft');
    const [integrationType, setIntegrationType] = useState(data.inputType || 'Gmail Demo');

  
    const content = (
      <div>
       <label className="block text-sm font-medium text-gray-700 mb-1">
          App:
          <select
            value={appType}
            onChange={(e) => setAppType(e.target.value)}
           className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm"
          >
            <option value="Text">Gmail</option>
            <option value="File">Notion</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Action:
          <select
            value={actionType}
            onChange={(e) => setActionType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm"
          >
            <option value="Text">Create Email Draft</option>
            <option value="File">Create Notion task</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Integration:
          <select
            value={integrationType}
            onChange={(e) => setIntegrationType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm"
          >
            <option value="Text">Gmail Demo</option>
            <option value="File">Notion Demo</option>
          </select>
        </label>
      </div>
    );
  
    return <BaseNode id={id} title="Input Node" inputs={[{ id: 'system' }, { id: 'prompt' }]} outputs={[{ id: 'prompt' }]} content={content} />;
  };
