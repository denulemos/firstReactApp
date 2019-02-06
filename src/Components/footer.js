import React from "react";

const Footer = () => {
  let divStyles = {
    position: "fixed",
    bottom: "0",
    fontSize: "16px",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#f8f9fa"
  };
  let pStyle = {
    margin: "0 auto"
  };

  return (
    <div style={divStyles} className="col-sm-12 d-flex align-self-end">
      <p style={pStyle}>Todos los derechos reservados</p>
    </div>
  );
};
export default Footer;
