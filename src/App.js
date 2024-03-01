import { Nav } from "./components/Nav.jsx";
import { Home } from "./components/Home.jsx";
import { Skills } from "./components/Skills.jsx"
import { About } from "./components/About.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import './app.css'


export function App() {
  return (
    <div className="main-container">
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}