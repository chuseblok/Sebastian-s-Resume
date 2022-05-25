import React, { useState } from "react";
import Navbar from "./Navbar/index";

import About from "./pages/About";

import Contact from "./pages/Contact";

import PDF from "./pages/PDF";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Navbar");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }

    if (currentPage === "PDF") {
      return <PDF />;
    }

    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
    </div>
  );
}
