import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  const linkStyle = { border: "", padding: "" };

  return (
    <nav className='main-header-menu'>
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexwrap: "wrap",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <a
          href='#about'
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>

        <div style={linkStyle}>
          <a href='https://www.instagram.com/sebastianchumley_chuseblok/'>
            Instagram
          </a>
        </div>
        <div style={linkStyle}>
          <a href='https://www.linkedin.com/in/sebastian-chunley-856760141/'>
            Linkedln
          </a>
        </div>
        <div style={linkStyle}>
          <a href='https://github.com/chuseblok/Resume'>Resume</a>
        </div>

        <a
          href='#contact'
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </section>
    </nav>
  );
}

export default Navbar;
