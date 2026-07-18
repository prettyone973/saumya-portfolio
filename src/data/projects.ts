import type { Project } from "../components/ProjectCard";
import sizzleMockup from "../assets/images/sizzle-mockup.png";
import imobileMockup from "../assets/images/imobile-mockup.png";
import appStore from "../assets/icons/app-store.svg";
import appStore2 from "../assets/icons/app-store-2.svg";
import foodBank from "../assets/icons/food-bank.svg";
import fintech from "../assets/icons/fintech.svg";
import uxCircle from "../assets/icons/ux-circle.svg";
import designServices from "../assets/icons/design-services.svg";
import research from "../assets/icons/research.svg";

export const projects: Project[] = [
  {
    id: "sizzle",
    href: "/work/sizzle",
    badge: "UX case study",
    title: "Sizzle- a cooking buddy",
    description:
      "A smart cooking assistant app that makes home cooking accessible, personalized, and joy-filled for everyone.",
    mockup: sizzleMockup,
    tagRows: [
      [
        { icon: appStore, label: "Mobile app" },
        { icon: foodBank, label: "Food and Lifestyle" },
      ],
      [{ icon: uxCircle, label: "UX design" }],
    ],
    meta: { icon: research, label: "Research · IA · Wireframes" },
    timeline: "Sep 2024 – Sep 2025",
    team: "Solo project",
    role: "UX Designer & Researcher",
    tools: "Figma",
  },
  {
    id: "imobile",
    href: "/work/imobile",
    badge: "UI Case Study",
    title: "iMobile- Fintech redesign",
    description:
      "A redesign of ICICI Bank's mobile banking app — making everyday banking clearer, calmer, and less overwhelming.",
    mockup: imobileMockup,
    tagRows: [
      [
        { icon: appStore2, label: "Mobile app" },
        { icon: fintech, label: "Fintech / Banking" },
      ],
      [{ icon: designServices, label: "App Redesign" }],
    ],
    meta: { icon: research, label: "Heuristic Evaluation · UI Redesign" },
    timeline: "Jan 2025 – Mar 2025",
    team: "Solo project",
    role: "UI Designer & Researcher",
    tools: "Figma",
  },
];
