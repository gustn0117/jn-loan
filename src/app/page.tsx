import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import GtagMainConversion from "@/components/GtagMainConversion";

export default function Home() {
  return (
    <>
      <GtagMainConversion />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
