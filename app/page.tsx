import Hero from "./components/sections/Hero";
import Header from "@/components/Header";
import Features from "@/components/sections/Features";
import FeatureDetail from "@/components/sections/FeatureDetail";
import { JobListings } from "@/components/sections/JobListings";
import Testimonials from "@/components/sections/Testimonials";
import IncomeSimulation from "@/components/sections/IncomeSimulation";
import ApplicationProcess from "@/components/sections/ApplicationProcess";
import FAQSection from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <FeatureDetail />
      <JobListings />
      <Testimonials />
      <IncomeSimulation />
      <ApplicationProcess />
      <FAQSection />
      <Footer />
    </main>
  );
}