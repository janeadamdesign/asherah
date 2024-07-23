import React from "react";
import { Link } from "react-router-dom";

interface HamburgerMenuProps {
  hamburgerActive: boolean;
  hamburgerSet: (
    e: React.MouseEvent<HTMLImageElement | HTMLAnchorElement>
  ) => void;
}

function HamburgerMenu(props: HamburgerMenuProps): React.ReactElement {
  const linkFunction = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    window.scrollTo(0, 0);
    props.hamburgerSet(e);
  };

  return (
    <div
      id="hamburger-nav"
      className={props.hamburgerActive ? "hm-active" : "hm-passive"}
    >
      <ul id="hamburger-ul">
        <li className="hamburger-li">
          <Link to="/" onClick={linkFunction}>
            Home
          </Link>
        </li>
        <li className="hamburger-li">
          <Link to="/menu" onClick={linkFunction}>
            Menu
          </Link>
        </li>
        <li className="hamburger-li">
          <Link to="/reservations" onClick={linkFunction}>
            Reservations
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
