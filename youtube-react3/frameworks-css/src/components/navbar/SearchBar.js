import React from "react";

export default function SearchBar({ text, placeholder }) {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder={placeholder}
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        {text}
      </button>
    </form>
  );
}
