import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MainTab from "./Components/MainTab/MainTab";
import AboutUs from "./Components/AboutUs/AboutUs";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import Media from "./Components/Media";
import Contact from "./Components/Contact/Contact";
import Donate from "./Components/Donate/Donate";
import ReadMore from "./Components/Read More/ReadMore";
import EventReadMore from "./Components/Read More/EventReadMore";
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
          <Route path="/donate" element={<Donate />} />
          <Route path="/readmore" element={<ReadMore />} />
          <Route path="/eventreadmore" element={<EventReadMore />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
