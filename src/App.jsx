import { useState } from "react";
import HelloSection from "./components/HelloSection";
import ContactSideBar from "./components/ContactSideBar";
import Navbar from "./components/NavBar";
import Experiencetimeline from "./components/Experiencetimeline";
import "./App.css";
import Educationpath from "./components/Educationpath";
import Projectssection from "./components/Projectssection";
import Contactme from "./components/Contactme";
import Skills from "./components/Skills";
export default function App() {
	const [showHomePage, setShowHomePage] = useState(false);

	return (
		<div className='min-h-screen bg-neutral-950 text-neutral-200 font-body selection:bg-pink-400/30 selection:text-white'>
			<Navbar />
			<HelloSection />
			<ContactSideBar />
			<Projectssection />
			<Skills />
			<Experiencetimeline />
			<Educationpath />
			<Contactme />
			<footer />
		</div>
	);
}
