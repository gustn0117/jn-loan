import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LegalDisclosure from "@/components/LegalDisclosure";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyChooseUs />
        <LegalDisclosure />
      </main>
      <Footer />
    </>
  );
}
