import React from 'react'

const Button = ({ bgColor, color, borderRadius, size, text }) => {
  return (
    <button
      type="button"
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      style={{ background: bgColor, borderRadius, color }}
    >
      {text}
    </button>
  );
};

export default Button