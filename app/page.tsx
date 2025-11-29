import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonial";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
