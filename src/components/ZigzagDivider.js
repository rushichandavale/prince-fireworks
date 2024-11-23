import React from "react";

const ZigzagDivider = ({ fill = "#f6f4f0", triangleWidth = 30, triangleHeight = 20 }) => {
  const points = [];
  const width = 2000; // Default SVG width, adjust based on your requirements

  // Generate points for the zigzag path
  for (let i = 0; i <= width / triangleWidth; i++) {
    const x = i * triangleWidth;
    points.push(`${x},${i % 2 === 0 ? triangleHeight : 0}`);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${triangleHeight}`}
      className="w-full"
      preserveAspectRatio="none"
    >
      <path
        fill={fill}
        d={`M0,${triangleHeight} ${points.join(" ")} L${width},${triangleHeight} Z`}
      />
    </svg>
  );
};

export default ZigzagDivider;
