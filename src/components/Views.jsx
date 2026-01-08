import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";
import Infos from "./pages/Infos";
import News from "./pages/news/News";

import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/about-us/About";
import Join from "./pages/jointheteam/Join";
import Offerings from "./pages/ServiceOfferings/Offerings";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />

      <Route path="/news" element={<News />} />
      <Route path="/about" element={<About />} />
      <Route path="/join-us" element={<Join />} />
      <Route path="/services" element={<Offerings />} />

      <Route path="/infos" element={<Infos />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        index
        element={
          <div>
            <Welcome />
          </div>
        }
      />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Views;
