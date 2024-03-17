import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prices from "./components/Prices";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Prices />
      <Contact />
    </>
  );
}

export default App;
