import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import "./App.css";
import "./fonts/Mulish-Black.ttf";
import "./fonts/Mulish-Regular.ttf";
import "./fonts/Mulish-Light.ttf";
import "./fonts/BallerinascriptRegular-gxLM6.ttf";

import Navigation from "./components/elements/navigation/Navigation";
import { scrollToHash } from "./components/elements/navigation/HashLink";
import Body from "./components/pages/Body";
import Footer from "./components/elements/footer/Footer";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const rawHash = hash || window.location.hash;
    if (!rawHash) {
      window.scrollTo(0, 0);
    } else {
      const targetHash = rawHash.replace("#", "");
      if (targetHash) {
        scrollToHash(targetHash);
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <ThemeContextProvider>
          <Navigation />
          <Body />
          <Footer />
        </ThemeContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
