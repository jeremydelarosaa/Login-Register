import React from "react";

function Navbar() {
  const currentUrl = window.location.pathname;
  const splitUrl = currentUrl.split("/");

  const Navbars = () => {
    if (splitUrl[1] !== "index") {
      return (
        <nav>
          <ul>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/Registrazione">Sign Up</a>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav>
          <ul>
            <li>
              <a href="/index/Home">Home</a>
            </li>
            <li>
              <a href="/index/About">About</a>
            </li>
            <li>
              <a href="/index/Contact">Contact</a>
            </li>
            <li className="signOut">
              <a href="/">Sign Out</a>
            </li>
          </ul>
        </nav>
      );
    }
  };
  return <Navbars />;
}

export default Navbar;
