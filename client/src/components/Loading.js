import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 3,
        backgroundColor: "rgba(153, 153, 153, 0.5)",
      }}
    >
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
