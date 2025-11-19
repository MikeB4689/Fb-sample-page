import "./App.css";
import { Faq } from "./Components/Faq";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Join } from "./Components/Join";
import { Slides } from "./Components/Slides";

function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="App">
      <section id="header">
        <Header />
      </section>
      <section id="Hero">
        <Hero />
      </section>
      <section id="Join">
        <Join />
      </section>
      <section id="Slider">
        <Slides />
      </section>
      <section id="Faq">
        <Faq />
      </section>

      <section id="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
