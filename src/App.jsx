import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import "./App.css";
import "./fonts/Mulish-Black.ttf";
import "./fonts/Mulish-Regular.ttf";
import "./fonts/Mulish-Light.ttf";
import "./fonts/BallerinascriptRegular-gxLM6.ttf";

import Navigation from "./components/elements/navigation/Navigation";
import Body from "./components/pages/Body";
import Footer from "./components/elements/footer/Footer";

function App() {
  return (
    <BrowserRouter>
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
