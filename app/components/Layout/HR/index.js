import React from 'react';
import './style.css';
function HR({ content }) {
  return <hr class="hr-text" data-content={content} />;
}
export default HR;
