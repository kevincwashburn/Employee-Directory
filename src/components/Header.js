import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Employee Directory</h1>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        
      </form>
    </header>
  );
}

export default Header;
