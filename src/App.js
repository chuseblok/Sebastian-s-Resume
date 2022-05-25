import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";
import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <div>
        <Navbar />
        <div>
          <PortfolioContainer />;
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
