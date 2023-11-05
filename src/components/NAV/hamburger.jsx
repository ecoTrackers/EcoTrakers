import React from "react";

function Hamburger() {
  const buttonStyle = {
    outline: "none",
    boxShadow: "none",
  };

  return (
      <button
          id="toggleButton"
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={buttonStyle}
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 9h8a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0-8a1 1 0 0 1-1-1 1 1 0 0 1 1-1h8a1 1 0 0 1 1 1 1 1 0 0 1-1 1H4z"
            />
          </svg>
      </button>
  );
}

export default Hamburger;
