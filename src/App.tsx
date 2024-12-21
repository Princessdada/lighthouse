import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MainTab from "./Components/MainTab/MainTab";
import AboutUs from "./Components/AboutUs";
import WhatWeDo from "./Components/WhatWeDo";
import Media from "./Components/Media";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainTab />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
