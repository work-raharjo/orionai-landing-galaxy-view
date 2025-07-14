import Hero from "@/components/Hero"
import Features from "@/components/Features"
import UseCases from "@/components/UseCases"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
