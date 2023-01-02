import React from "react";
import BtnMenu from "./BtnMenu";
import OptionsMenu from "./OptionsMenu";
import SearchBar from "./SearchBar";

export default function NavBar({ logo }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {logo}
        </a>
        <BtnMenu />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <OptionsMenu />
          <SearchBar text="Buscar" placeholder="Buscar..." />
        </div>
      </div>
    </nav>
  );
}
