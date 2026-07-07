import { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const EMAIL = "saumyamehta252004@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/saumyamehta2000";

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <rect
        x="9"
        y="9"
        width="13"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" className="size-5" aria-hidden="true">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard access unavailable; no-op
    }
  }

  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
        <h1 className="font-['Instrument_Sans'] text-[28px] font-semibold text-navy sm:text-[38px]">
          Get in touch
        </h1>
        <p className="mt-4 max-w-[600px] text-base text-ink sm:text-lg">
          Have a project in mind or just want to say hi? Reach out through either of these.
        </p>

        <div className="mt-10 flex flex-col items-start gap-6">
          <div className="flex items-center gap-3 rounded-full border border-paper-border bg-paper px-6 py-3">
            <span className="text-lg text-ink sm:text-xl">{EMAIL}</span>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy email address"
              className="flex items-center justify-center rounded-full p-2 text-navy transition-[background-color,transform] duration-150 hover:bg-navy/10 active:scale-90"
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
            {copied && <span className="text-sm font-medium text-clay">Copied!</span>}
          </div>

          <Button
            variant="primary"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-3"
          >
            <LinkedInIcon />
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
}
