import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Plain BrowserRouter doesn't reset scroll position on navigation the way a
// full page load would. Reset on every route change, except when a hash is
// present — the target page handles scrolling to its own anchor.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
