import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prices from "./components/Prices";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Prices />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
