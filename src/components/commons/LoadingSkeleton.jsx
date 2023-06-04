import React from "react";
import "./LoadingSkeleton.scss";
export const LoadingSkeleton = ({ ...props }) => {
  const { width, height, radius, className } = props;
  console.log("props", props);
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        height: height,
        width: width || "100%",
        borderRadius: radius,
      }}
    ></div>
  );
};
