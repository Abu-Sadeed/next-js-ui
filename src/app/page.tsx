import BenefitSection from "./landingComponents/BenefitSection";
import ContactUs from "./landingComponents/ContactUs";
import Download from "./landingComponents/Download";
import FeatureSection from "./landingComponents/FeatureSection";
import HeroSection from "./landingComponents/HeroSection";

export default function Home() {
    return (
        <div className=" size-full bg-blue-100 px-40">
            <HeroSection />
            <FeatureSection />
            <BenefitSection />
            <Download />
            <ContactUs />
        </div>
    );
}
