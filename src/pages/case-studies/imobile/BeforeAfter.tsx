import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import BeforeAfterPanel from "../../../components/case-studies/panels/BeforeAfterPanel";

export default function BeforeAfter() {
  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-8 py-16 sm:px-14">
        <Link to="/work/imobile" className="text-sm font-medium text-clay hover:text-navy">
          ← Back to iMobile- Fintech redesign
        </Link>

        <div className="rounded-xl border border-paper-border bg-paper p-6 sm:p-10">
          <BeforeAfterPanel />
        </div>
      </div>
    </div>
  );
}
