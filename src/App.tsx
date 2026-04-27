import { CheckoutSection } from "./components/CheckoutSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { EmotionSection } from "./components/EmotionSection";
import { FAQ } from "./components/FAQ";
import { FeatureGrid } from "./components/FeatureGrid";
import { Footer } from "./components/Footer";
import { HealthInsights } from "./components/HealthInsights";
import { Hero } from "./components/Hero";
import { ProductDetails } from "./components/ProductDetails";
import { ProductShowcase } from "./components/ProductShowcase";
import { PurchaseForm } from "./components/PurchaseForm";
import { SocialProof } from "./components/SocialProof";
import { TranslationProvider } from "./lib/i18n";

export default function App() {
  return (
    <TranslationProvider>
      <main className="min-h-screen overflow-hidden bg-[#010101] text-white">
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
      </main>
    </TranslationProvider>
  );
}
