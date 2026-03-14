import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import ExitCTA from "@/components/ExitCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <Approach />
      <Testimonials />
      <ExitCTA />
      <Contact />
      <Footer />
    </main>
  );
}
