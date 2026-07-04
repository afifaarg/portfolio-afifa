import { useState } from "react";
import HelloSection from "./components/HelloSection";
import ContactSideBar from "./components/ContactSideBar";
import AboutMe from "./components/AboutMe";
import EmailSideBar from "./components/EmailSideBar";
import Entryanimation from "./components/EntryAnimation";
import Navbar from "./components/NavBar";
import Experiencetimeline from "./components/Experiencetimeline";
import "./App.css"; // Tailwind CSS should be imported in index.css or App.css
import Educationpath from "./components/Educationpath";
import Projectssection from "./components/Projectssection";
import Contactme from "./components/Contactme";
export default function App() {
	const [showHomePage, setShowHomePage] = useState(false);

	return (
		<section>
			<HelloSection />
			<ContactSideBar />
			{/* <Navbar />
			<AboutMe />
			<Projectssection />
			<Experiencetimeline />
			<Educationpath />
			<Contactme />
			<ContactSideBar /> */}
		</section>
	);
}
