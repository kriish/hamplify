import React from "react";

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 100,
    backgroundColor: "#388e3c",
    fontWeight: "bold",
    
  };

  return (
    <div style={topBarStyle}>
      <span></span>
      <h1 class='headerTitle'>My Octank Waste Service</h1>
      <span></span>
    </div>
  );
};

export default TopBar;