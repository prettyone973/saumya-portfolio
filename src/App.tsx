import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import SizzleCaseStudy from "./pages/case-studies/Sizzle";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/sizzle" element={<SizzleCaseStudy />} />
      <Route path="/work/:slug" element={<CaseStudy />} />
    </Routes>
  );
}
