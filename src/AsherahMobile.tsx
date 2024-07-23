import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu";
import AMAnimatedRoutes from './AMAnimatedRoutes';

import "./AsherahMobile.css";



function AsherahMobile(): React.ReactElement {
  const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);
  const hamburgerSet = (): void => {
    setHamburgerActive((prev) => !prev);
  };

  return (
    <Router>
      <div id="app-mobile">
        <header className="header-mobile">
          {" "}
          <img
          alt="logo-mobile"
            id="logo-mobile"
            src="/asherahlogo.png"
            onClick={hamburgerSet}
          ></img>
        </header>
        <HamburgerMenu hamburgerActive={hamburgerActive} hamburgerSet={hamburgerSet} />
        <main className="content">
          <AMAnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default AsherahMobile;
