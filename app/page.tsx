import Advantages from "@/components/Advantages";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import Started from "@/components/Started";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Advantages />
      <Testimonial />
      <FAQ />
      <Started />
      <Footer />
    </>
  );
}
