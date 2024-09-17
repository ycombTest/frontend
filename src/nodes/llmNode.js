// llmNode.js

import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

export const LLMNode = ({ id, data }) => {

  const content = (
    <div>
      <span>This is a Language Learning Model (LLM).</span>
    </div>
  );

  return <BaseNode id={id} title="LLM Node" inputs={[{ id: 'system' }, { id: 'prompt' }]} outputs={[{ id: 'response' }]} content={content} />;
};


