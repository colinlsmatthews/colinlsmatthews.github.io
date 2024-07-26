import React from 'react';
import './index.css';

function Button(props) {
  return (
    <button 
      class={`${props.activated === 'true' ? 'activated' : ''}`}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
}


export default Button;
