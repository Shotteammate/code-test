import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
