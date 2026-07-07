import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
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
import SizzleWireframes from "./pages/case-studies/sizzle/Wireframes";
import SizzlePrototype from "./pages/case-studies/sizzle/Prototype";
import IMobileBeforeAfter from "./pages/case-studies/imobile/BeforeAfter";
import IMobileCaseStudy from "./pages/case-studies/IMobile";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/sizzle" element={<SizzleCaseStudy />} />
        <Route path="/work/sizzle/competitor-analysis" element={<SizzleCompetitorAnalysis />} />
        <Route path="/work/sizzle/empathize" element={<SizzleEmpathize />} />
        <Route path="/work/sizzle/define" element={<SizzleDefine />} />
        <Route path="/work/sizzle/ideate" element={<SizzleIdeate />} />
        <Route path="/work/sizzle/wireframes" element={<SizzleWireframes />} />
        <Route path="/work/sizzle/prototype" element={<SizzlePrototype />} />
        <Route path="/work/imobile" element={<IMobileCaseStudy />} />
        <Route path="/work/imobile/before-after" element={<IMobileBeforeAfter />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Route>
    </Routes>
  );
}
