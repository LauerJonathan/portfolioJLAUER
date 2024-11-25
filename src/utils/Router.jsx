import React from "react";
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context";

/**
 * Import pages here !
 */
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Resume from "../pages/Resume";
import Projects from "../pages/Project";

const Router = () => {
  return (
    <Routing>
      <ThemeProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact></Contact>}></Route>
          <Route exact path="/resume" element={<Resume />}></Route>
          <Route exact path="/project" element={<Projects />}></Route>
        </Routes>
      </ThemeProvider>
    </Routing>
  );
};

export default Router;
