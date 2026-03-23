import "./styles/global.css";
import "./styles/responsive.css";
import Navbar       from "./components/layout/Navbar";
import Footer       from "./components/layout/Footer";
import Hero         from "./components/sections/Hero";
import About        from "./components/sections/About";
import Ticker       from "./components/sections/Ticker";
import Skills       from "./components/sections/Skills";
import Projects     from "./components/sections/Projects";
import Education    from "./components/sections/Education";
import Certificates from "./components/sections/Certificates";
import Contact      from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ticker />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
