import React from "react";

const Footer = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    bottom: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 100,
    backgroundColor: "#388e3c",
    borderBottom: `1px solid black`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={topBarStyle}>
      <span>LOGO</span>
      <h1>FOOTER</h1>
      <span>{`⚙️`}</span>
    </div>
  );
};

export default Footer;