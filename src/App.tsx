import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top" className="pt-16">
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer/>
    </>
  );
}