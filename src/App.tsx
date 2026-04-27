import { CheckoutSection } from "./components/CheckoutSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { CookieBanner } from "./components/CookieBanner";
import { EmotionSection } from "./components/EmotionSection";
import { FAQ } from "./components/FAQ";
import { FeatureGrid } from "./components/FeatureGrid";
import { Footer } from "./components/Footer";
import { HealthInsights } from "./components/HealthInsights";
import { Hero } from "./components/Hero";
import { MobileStickyCta } from "./components/MobileStickyCta";
import { ProductDetails } from "./components/ProductDetails";
import { ProductShowcase } from "./components/ProductShowcase";
import { PurchaseForm } from "./components/PurchaseForm";
import { SocialProof } from "./components/SocialProof";
import { TranslationProvider } from "./lib/i18n";

export default function App() {
  return (
    <TranslationProvider>
      <main className="min-h-screen overflow-hidden bg-[#010101] pb-24 text-white sm:pb-0">
        <Hero />
        <ProductShowcase />
        <FeatureGrid />
        <EmotionSection />
        <HealthInsights />
        <ComparisonSection />
        <SocialProof />
        <ProductDetails />
        <PurchaseForm />
        <CheckoutSection />
        <FAQ />
        <Footer />
        <MobileStickyCta />
        <CookieBanner />
      </main>
    </TranslationProvider>
  );
}
