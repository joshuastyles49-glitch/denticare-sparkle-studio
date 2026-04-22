import AnimatedBackground from "@/components/site/AnimatedBackground";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import Doctor from "@/components/site/Doctor";
import Reviews from "@/components/site/Reviews";
import Booking from "@/components/site/Booking";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Doctor />
          <Reviews />
          <Booking />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
