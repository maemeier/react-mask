import React from "react";
import cover from "../assets/logo.jpg";

const Header = () => {
  return (
    <div>
      <img src={cover} alt="cover" style={{ height: 400, width: 1000 }} />
    </div>
  );
};

export default Header;
