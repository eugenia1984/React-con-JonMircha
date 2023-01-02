import React from "react";

export default function OptionsMenu() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="index.html">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          Link
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="index.html"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Framewroks
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a className="dropdown-item" href="index.html">
              React-Bootstrap
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="index.html">
              Material UI
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="index.html"
          tabIndex="-1"
          aria-disabled="true"
        >
          Deshabilitado
        </a>
      </li>
    </ul>
  );
}
