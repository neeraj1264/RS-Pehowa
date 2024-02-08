import React from "react";

const Loader = () => {
  const loaderStyle = {
    textAlign: "center",
    color: "var(--skyblue)",
    fontSize: "4rem", // Example font size
  };
  return (
    <div style={loaderStyle}>
      {/* You can customize the loader here */}
      Loading...
    </div>
  );
};

export default Loader;
