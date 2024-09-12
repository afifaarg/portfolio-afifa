import { useState } from "react";
import HelloSection from "./components/HelloSection";
import ContactSideBar from "./components/ContactSideBar";
import AboutMe from "./components/AboutMe";
import EmailSideBar from "./components/EmailSideBar";
import Entryanimation from "./components/EntryAnimation";
import Navbar from "./components/NavBar";
import Experiencetimeline from "./components/Experiencetimeline";
import "./App.css"; // Tailwind CSS should be imported in index.css or App.css

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  return (
    <section>
      {!showHomePage ? (
        <Entryanimation setShowHomePage={setShowHomePage} /> //setShowHomePage is a function itself that set showHomePage to true or false.
      ) : (
        <section>
          <Navbar />
          <ContactSideBar />
          <HelloSection />
          <AboutMe />
          <Experiencetimeline />
          <EmailSideBar />
        </section>
      )}
    </section>
  );
}
