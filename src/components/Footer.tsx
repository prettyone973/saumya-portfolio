const EMAIL = "saumyamehta252004@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/saumyamehta2000";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3.5 6 12 12.5 20.5 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

const linkClasses =
  "flex items-center gap-2 text-gold-muted transition-colors duration-150 hover:text-gold hover:underline underline-offset-4";

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-6 py-6 text-sm sm:flex-row sm:justify-between sm:px-10 sm:py-7 lg:px-16 xl:px-20">
        <span className="text-gold-muted">© 2026 Saumya Mehta</span>
        <div className="flex items-center gap-6">
          <a href={`mailto:${EMAIL}`} className={linkClasses}>
            <MailIcon />
            {EMAIL}
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClasses}>
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
