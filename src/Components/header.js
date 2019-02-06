import React from "react";
import img from "../flat,800x800,075,f.png";
const Header = () => {
  return (
    <div className="com-sm-12">
      <nav className="navbar navbar-light bg-light d-flex flex-row">
        <a className="navbar-brand" href="/">
          <img
            src={img}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
        <h1>Introduccion a ReactJS</h1>
      </nav>
    </div>
  );
};
export default Header;
