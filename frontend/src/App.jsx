import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import GlowCursor from "./components/GlowCursor";

function App() {
  return (
    <BrowserRouter>
      <GlowCursor />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/skills" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;