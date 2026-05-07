import { forwardRef } from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ComparisonSection from "../components/ComparisonSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ContactForm from "../components/ContactForm";

interface HomePageProps {
  servicesRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
  onScrollToContact: () => void;
}

const HomePage = forwardRef<HTMLElement, HomePageProps>(
  ({ servicesRef, contactRef, onScrollToContact }, heroRef) => {
    return (
      <>
        <div className="sky">
          <HeroSection ref={heroRef} />
          <ServicesSection ref={servicesRef} onCtaClick={onScrollToContact} />
        </div>

        <ComparisonSection />
        <HowItWorksSection />
        <ContactForm ref={contactRef} />
      </>
    );
  },
);

HomePage.displayName = "HomePage";

export default HomePage;
