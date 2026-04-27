import { useEffect, useState } from "react";
import { ContactPage, LegalNotice, PrivacyPolicy, TermsOfService } from "./LegalPages";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";

type Page = "home" | "cgv" | "privacy" | "rgpd" | "contact";

function getLegalPageFromHash(): Page {
  const hash = window.location.hash.slice(1);
  if (["cgv", "privacy", "rgpd", "contact"].includes(hash)) {
    return hash as Page;
  }
  return "home";
}

export function PageRouter({ homePage }: { homePage: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>(getLegalPageFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getLegalPageFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentPage === "home") {
    return (
      <>
        {homePage}
        <Footer />
        <CookieBanner />
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[#010101] pb-24 text-white">
        {currentPage === "cgv" && <TermsOfService />}
        {currentPage === "privacy" && <PrivacyPolicy />}
        {currentPage === "rgpd" && <LegalNotice />}
        {currentPage === "contact" && <ContactPage />}
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
