import React from "react";

const Tooltip = ({ content, position, children }) => (
  <span title={content} className="relative inline-block">
    {children}
  </span>
);

export default Tooltip;
