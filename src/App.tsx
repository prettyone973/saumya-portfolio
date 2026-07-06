import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import SizzleCaseStudy from "./pages/case-studies/Sizzle";
import SizzleCompetitorAnalysis from "./pages/case-studies/sizzle/CompetitorAnalysis";
import SizzleEmpathize from "./pages/case-studies/sizzle/Empathize";
import SizzleDefine from "./pages/case-studies/sizzle/Define";
import SizzleIdeate from "./pages/case-studies/sizzle/Ideate";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/sizzle" element={<SizzleCaseStudy />} />
      <Route path="/work/sizzle/competitor-analysis" element={<SizzleCompetitorAnalysis />} />
      <Route path="/work/sizzle/empathize" element={<SizzleEmpathize />} />
      <Route path="/work/sizzle/define" element={<SizzleDefine />} />
      <Route path="/work/sizzle/ideate" element={<SizzleIdeate />} />
      <Route path="/work/:slug" element={<CaseStudy />} />
    </Routes>
  );
}
