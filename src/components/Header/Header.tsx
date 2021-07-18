import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [menuHome, setMenuHome] = useState(false);

  const header = () => {
    setMenuHome(true);
  };

  return (
    <header className="header">
      <h2 onClick={header} className="pointer">
        Mstore
      </h2>

      <div className="headerUser">
        <ul>
          <li><a href="/#">Masculino</a></li>
          <li><a href="/#">Feminino</a></li>
          <li><a href="/#">Jóias</a></li>
          <li><a href="/#">Eletrônicos</a></li>
        </ul>
      </div>

      {menuHome !== false && <Redirect to="/" />}
    </header>
  );
};

export default Header;
