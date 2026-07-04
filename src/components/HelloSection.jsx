import React, { useState, useEffect, useRef } from "react";
import {
	Mail,
	ExternalLink,
	X,
	ArrowRight,
	Download,
	Menu,
	Sparkles,
	Layers,
	ShieldCheck,
	Briefcase,
	GraduationCap,
	MapPin,
	Calendar,
} from "lucide-react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

/* ------------------------------------------------------------------ */
/*  Data — edit the content below with your real details             */
/* ------------------------------------------------------------------ */

const ROLES = [
	"Full-Stack Web Developer",
	"Django Developer",
	"React.js Developer",
];

const SKILL_GROUPS = [
	{
		label: "Frontend",
		skills: [
			"React.js",
			"TypeScript",
			"JavaScript",
			"HTML5",
			"CSS3",
			"Tailwind CSS",
		],
	},
	{
		label: "Backend",
		skills: [
			"Django",
			"Django REST Framework",
			"REST APIs",
			"JWT Authentication",
		],
	},
	{
		label: "Databases & Caching",
		skills: ["PostgreSQL", "MySQL", "SQL Server", "Redis"],
	},
	{
		label: "Tools & CMS",
		skills: [
			"Git & GitHub",
			"WordPress",
			"Wagtail CMS",
			"cPanel",
			"Figma",
			"Adobe XD",
		],
	},
];

const PROJECTS = [
	{
		id: "mini-erp",
		title: "Mini ERP",
		role: "Full-Stack Developer",
		summary:
			"A full-stack business management platform centralizing inventory, product administration, HR, expense tracking, and user management into a single enterprise interface.",
		detail:
			"Mini ERP streamlines day-to-day business operations through dedicated modules for inventory, HR, and expenses, letting organizations manage operational data from one place. Interactive dashboards, multilingual support, and role-based authentication were built for enterprise environments, with a modular component architecture on the frontend and secure JWT-protected REST APIs on the backend.",
		frontend: [
			"React.js",
			"Redux Toolkit",
			"Ant Design",
			"Tailwind CSS",
			"Axios",
			"Chart.js / Recharts",
		],
		backend: [
			"Django",
			"Django REST Framework",
			"JWT Authentication",
			"PostgreSQL",
			"CORS",
		],
		highlights: [
			"Secure JWT authentication and protected routes",
			"Product and inventory management",
			"Human resources management & expense tracking",
			"Interactive analytics dashboards",
			"Role-based user management",
			"Responsive, scalable enterprise UI",
		],
		demo: null,
		featured: true,
	},
	{
		id: "digital-skillers",
		title: "Digital Skillers",
		role: "Full-Stack Developer",
		summary:
			"A freelance marketplace connecting skillers with employers, managing the full hiring lifecycle from job posting to contract completion, with Stripe-powered subscriptions.",
		detail:
			"Digital Skillers lets employers publish offers, discover matched candidates through subscription plans, or receive applications from freelancers, who can showcase profiles and manage contracts. Stripe handles employer subscriptions that unlock candidate matching and offer publication. Once an offer is accepted, the platform manages the full contract lifecycle — invoicing, progress tracking, and freelancer ratings.",
		frontend: [
			"React.js",
			"Redux Toolkit",
			"React Router",
			"Ant Design",
			"Tailwind CSS",
			"Axios",
		],
		backend: [
			"Django",
			"Django REST Framework",
			"JWT Authentication",
			"SQL Database",
			"Stripe API",
		],
		highlights: [
			"Multi-application architecture (user platform, admin dashboard, backend)",
			"Employer subscription management with Stripe",
			"Intelligent candidate matching based on subscription plans",
			"Job posting and application management",
			"End-to-end contract lifecycle tracking",
			"Invoice generation and freelancer rating system",
		],
		demo: null,
		featured: true,
	},
	{
		id: "skillid",
		title: "SkillID",
		role: "Full-Stack Developer",
		summary:
			"A resume builder that guides users through creating professional, ATS-friendly CVs with a customizable, recruiter-ready layout.",
		detail:
			"SkillID walks users through structured CV building and generates clean layouts optimized for Applicant Tracking Systems. The app focuses on dynamic form management and a smooth editing experience, letting people create, edit, and export their resumes with a secure, modular client-server architecture.",
		frontend: [
			"React.js",
			"Redux Toolkit",
			"Ant Design",
			"Tailwind CSS",
			"React Router",
			"Axios",
		],
		backend: [
			"Django",
			"Django REST Framework",
			"JWT Authentication",
			"SQL Database",
		],
		highlights: [
			"Create and manage ATS-friendly resumes",
			"Dynamic and customizable CV sections",
			"Secure user authentication",
			"Responsive, intuitive interface",
			"Modular full-stack architecture with REST APIs",
		],
		demo: "cv-maker.thedigitalskillers.com",
		demoLabel: "cv-maker.thedigitalskillers.com",
		featured: true,
	},
	{
		id: "divaloot",
		title: "DivaLoot",
		role: "Full-Stack Developer",
		summary:
			"An e-commerce platform for browsing products, managing a cart, and placing orders, with an admin side for inventory, categories, and customer orders.",
		detail:
			"DivaLoot follows a clean client-server architecture with secure REST APIs, reusable components, and a responsive interface, giving shoppers a smooth buying flow while giving administrators full control over the catalog and orders.",
		frontend: ["React.js", "React Router", "Axios", "Tailwind CSS"],
		backend: [
			"Django",
			"Django REST Framework",
			"JWT Authentication",
			"SQL Database",
		],
		highlights: [
			"Product catalog, shopping cart, and order management",
			"Admin dashboard for inventory and product management",
			"Responsive, modern user interface",
			"Modular and scalable full-stack architecture",
		],
		demo: "https://divalootshop.netlify.app/",
		demoLabel: "divalootshop.netlify.app",
		featured: true,
	},
	{
		id: "palace-of-languages",
		title: "Palace of Languages",
		role: "Backend Developer",
		summary:
			"A multilingual website for a language learning center, giving administrators an intuitive way to manage courses and content across languages.",
		detail:
			"Built on Django and Wagtail CMS, the platform leans on Wagtail's flexible content management to maintain multilingual pages, course information, and institutional content, keeping the whole system modular, scalable, and easy to maintain.",
		frontend: ["HTML", "CSS", "JavaScript", "Django Templates"],
		backend: ["Django", "Wagtail CMS", "Python", "SQLite"],
		highlights: [
			"Multilingual site with localized content",
			"Dynamic content management via Wagtail CMS",
			"Course discovery and search",
			"Responsive, user-friendly interface",
			"Modular, maintainable Django architecture",
		],
		demo: null,
		featured: true,
	},
];

const EXPERIENCE = [
	{
		role: "Software Engineer — Frontend Web Developer",
		org: "National Employment Agency (ANEM)",
		location: "Algiers",
		date: "Dec 2024 – April 2026",
		bullets: [
			"Frontend developer on the reinvention of the Wassit Online employment platform, improving usability and accessibility.",
			"Contributed to the redesign and development of name.anem.dz, implementing modern UI components.",
			"Built responsive interfaces using React.js and Tailwind CSS in collaboration with UX/UI teams.",
			"Integrated frontend applications with secure REST APIs developed in .NET.",
			"Participated in code reviews, performance optimization, and cross-functional collaboration.",
		],
	},
	{
		role: "Web Development Trainer (Beginner Level)",
		org: "Independent",
		location: null,
		date: "Aug 2024 – Dec 2024",
		bullets: [
			"Delivered beginner-level web development training covering HTML, CSS, and JavaScript fundamentals.",
			"Designed hands-on exercises and small projects to help learners build practical skills.",
			"Introduced best practices in responsive design and clean code.",
		],
	},
	{
		role: "Full Stack Web Developer",
		org: "DIVATECH",
		location: "Mohamadia, Algiers",
		date: "May 2023 – Aug 2024",
		bullets: [
			"Designed and developed a modular ERP system covering inventory, HR, accounting, and project management.",
			"Built a custom CRM platform to improve customer engagement, tracking, and reporting.",
			"Implemented full-stack features using Django, React.js, JavaScript, and SQL databases.",
			"Enhanced system scalability, security, and data accuracy using clean architecture principles.",
		],
	},
	{
		role: "Backend Developer Intern (Graduate Project)",
		org: "CERIST",
		location: "Algiers",
		date: "Jan 2023 – Jul 2023",
		bullets: [
			"Developed backend services using Django and Python.",
			"Applied system modeling techniques and database schema design.",
			"Managed integration between frontend and backend layers.",
		],
	},
];

const EDUCATION = [
	{
		degree: "Master's Degree in Software Engineering",
		school:
			"University of Science and Technology Houari Boumediene (USTHB), Algiers",
		date: "2021 – 2023",
	},
	{
		degree: "Bachelor's Degree in Software Engineering",
		school:
			"University of Science and Technology Houari Boumediene (USTHB), Algiers",
		date: "2018 – 2021",
	},
];

const CONTACT = {
	email: "afifa.argoub@gmail.com",
	linkedin: "https://www.linkedin.com/in/afifa-argoub-808500183/",
	github: "https://github.com/afifaarg",
};

/* ------------------------------------------------------------------ */
/*  Typewriter hook                                                    */
/* ------------------------------------------------------------------ */

function useTypewriter(words, typeSpeed = 55, deleteSpeed = 30, pause = 1400) {
	const [text, setText] = useState("");
	const [wordIndex, setWordIndex] = useState(0);
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		const current = words[wordIndex % words.length];
		let timeout;

		if (!deleting && text === current) {
			timeout = setTimeout(() => setDeleting(true), pause);
		} else if (deleting && text === "") {
			setDeleting(false);
			setWordIndex((i) => i + 1);
		} else {
			timeout = setTimeout(
				() => {
					setText((t) =>
						deleting
							? current.slice(0, t.length - 1)
							: current.slice(0, t.length + 1),
					);
				},
				deleting ? deleteSpeed : typeSpeed,
			);
		}
		return () => clearTimeout(timeout);
	}, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

	return text;
}

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function SectionEyebrow({ children }) {
	return (
		<div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4'>
			<span className='h-1.5 w-1.5 rounded-full bg-pink-400' />
			{children}
		</div>
	);
}

function TagChip({ children }) {
	return (
		<span className='text-[11px] uppercase tracking-wide text-neutral-400 border border-neutral-800 rounded-full px-2.5 py-1'>
			{children}
		</span>
	);
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function AfifaPortfolio() {
	const typed = useTypewriter(ROLES);
	const [activeProject, setActiveProject] = useState(null);
	const [mobileOpen, setMobileOpen] = useState(false);
	const modalRef = useRef(null);

	useEffect(() => {
		if (activeProject && modalRef.current) modalRef.current.focus();
	}, [activeProject]);

	useEffect(() => {
		function onKey(e) {
			if (e.key === "Escape") setActiveProject(null);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	const navLinks = [
		{ label: "About", href: "#about" },
		{ label: "Skills", href: "#skills" },
		{ label: "Projects", href: "#projects" },
		{ label: "Experience", href: "#experience" },
		{ label: "Education", href: "#education" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<div className='min-h-screen bg-neutral-950 text-neutral-200 font-body selection:bg-pink-400/30 selection:text-white'>
			{/* ---------------- Nav ---------------- */}
			<header className='sticky top-0 z-40 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md'>
				<div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
					<a
						href='#top'
						className='font-display text-base font-bold text-neutral-100'
					>
						<img
							src='/portfolio-afifa/afifa.png'
							alt='Afifa Logo'
							className='h-8 w-auto'
						/>
					</a>

					{/* Desktop Navigation */}
					<div className='hidden sm:flex flex-row items-center gap-8'>
						<nav className='flex items-center gap-8 text-xs font-medium uppercase tracking-widest'>
							{navLinks.map((l) => (
								<a
									key={l.href}
									href={l.href}
									className='text-neutral-400 hover:text-pink-400 transition-colors'
								>
									{l.label}
								</a>
							))}
						</nav>

						<a
							href='#contact'
							className='inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-pink-400 transition-colors'
						>
							Hire me <ArrowRight className='h-3 w-3' />
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden text-neutral-300'
						onClick={() => setMobileOpen((v) => !v)}
						aria-label='Toggle menu'
					>
						{mobileOpen ? (
							<X className='h-5 w-5' />
						) : (
							<Menu className='h-5 w-5' />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{mobileOpen && (
					<div className='md:hidden border-t border-neutral-900 px-6 py-4 flex flex-col gap-4 text-xs font-medium uppercase tracking-widest'>
						{navLinks.map((l) => (
							<a
								key={l.href}
								href={l.href}
								onClick={() => setMobileOpen(false)}
								className='text-neutral-400 hover:text-pink-400 transition-colors'
							>
								{l.label}
							</a>
						))}
						<a
							href='#contact'
							onClick={() => setMobileOpen(false)}
							className='inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-pink-400 transition-colors'
						>
							Hire me <ArrowRight className='h-3 w-3' />
						</a>
					</div>
				)}
			</header>
			{/* ---------------- Hero ---------------- */}
			<section
				id='top'
				className='relative border-b border-neutral-900 overflow-hidden'
			>
				<div className='glow-blob h-72 w-72 bg-pink-500 -top-20 -left-10' />
				<div className='glow-blob h-72 w-72 bg-violet-500 top-40 right-0' />

				<div className='relative max-w-6xl mx-auto px-6 py-24 md:py-32'>
					<div className='max-w-3xl'>
						<div className='inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-1.5 text-xs font-medium text-pink-300 mb-8'>
							<span className='relative flex h-1.5 w-1.5'>
								<span className='absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75 animate-ping' />
								<span className='relative inline-flex rounded-full h-1.5 w-1.5 bg-pink-400' />
							</span>
							Open to remote & freelance work
						</div>

						<div className='text-lg md:text-xl font-medium mb-3'>
							<span className='grad-text cursor-blink'>{typed}</span>
						</div>

						<h1 className='font-display text-4xl md:text-6xl font-bold text-white leading-tight'>
							Hi, I'm Afifa Argoub.
						</h1>

						<p className='mt-6 text-neutral-400 text-lg leading-relaxed max-w-xl'>
							A software engineer building modern, scalable and responsive web
							applications — currently shipping government digital platforms by
							day, and freelance products on the side. Clean architecture, solid
							APIs, no shortcuts on user experience.
						</p>

						<div className='mt-10 flex flex-wrap items-center gap-4'>
							<a
								href='#projects'
								className='inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-pink-400 transition-colors'
							>
								View projects <ArrowRight className='h-3.5 w-3.5' />
							</a>
							<a
								href='#contact'
								className='inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-neutral-300 hover:border-pink-400/60 hover:text-pink-300 transition-colors'
							>
								Get in touch
							</a>
						</div>
					</div>

					<div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-4'>
						{[
							{ label: "Years of experience", value: "3+" },
							{ label: "Projects shipped", value: "7+" },
							{ label: "Used by", value: "thousands nationwide" },
							{ label: "Core stack", value: "React & Django" },
						].map((m) => (
							<div
								key={m.label}
								className='rounded-2xl border border-neutral-800 bg-neutral-900/40 px-5 py-4'
							>
								<div className='font-display text-xl font-bold text-white'>
									{m.value}
								</div>
								<div className='mt-1 text-xs text-neutral-500'>{m.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ---------------- Skills ---------------- */}
			<section id='skills' className='border-b border-neutral-900'>
				<div className='max-w-6xl mx-auto px-6 py-20'>
					<SectionEyebrow>skills & tools</SectionEyebrow>
					<h2 className='font-display text-3xl text-white font-bold mb-10'>
						What I work with
					</h2>

					<div className='grid md:grid-cols-4 gap-4'>
						{SKILL_GROUPS.map((group) => (
							<div
								key={group.label}
								className='rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5'
							>
								<div className='text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4'>
									{group.label}
								</div>
								<ul className='space-y-2.5'>
									{group.skills.map((s) => (
										<li
											key={s}
											className='flex items-center gap-2.5 text-sm text-neutral-300'
										>
											<span className='h-1 w-1 rounded-full bg-neutral-600' />
											{s}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ---------------- Projects ---------------- */}
			<section id='projects' className='border-b border-neutral-900'>
				<div className='max-w-6xl mx-auto px-6 py-20'>
					<SectionEyebrow>selected work</SectionEyebrow>
					<div className='flex items-baseline justify-between mb-10 flex-wrap gap-2'>
						<h2 className='font-display text-3xl text-white font-bold'>
							Projects
						</h2>
						<span className='text-xs text-neutral-500'>
							click any card for full details
						</span>
					</div>

					<div className='grid md:grid-cols-2 gap-5'>
						{PROJECTS.map((p) => (
							<button
								key={p.id}
								onClick={() => setActiveProject(p)}
								className={`group relative text-left rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-pink-400/40 hover:bg-neutral-900/70 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400/50 ${
									p.featured ? "md:col-span-2" : ""
								}`}
							>
								<span className='corner-frame top-3 left-3 border-t-2 border-l-2 rounded-tl-md' />
								<span className='corner-frame top-3 right-3 border-t-2 border-r-2 rounded-tr-md' />
								<span className='corner-frame bottom-3 left-3 border-b-2 border-l-2 rounded-bl-md' />
								<span className='corner-frame bottom-3 right-3 border-b-2 border-r-2 rounded-br-md' />

								<div className='flex items-start justify-between gap-3'>
									<div>
										<h3 className='font-display text-xl font-bold text-white'>
											{p.title}
										</h3>
										<p className='mt-1 text-xs uppercase tracking-widest text-pink-400'>
											{p.role}
										</p>
									</div>
									<ExternalLink className='h-4 w-4 text-neutral-600 group-hover:text-pink-400 transition-colors flex-shrink-0' />
								</div>

								<p className='mt-4 text-sm text-neutral-400 leading-relaxed'>
									{p.summary}
								</p>

								<div className='mt-5 flex flex-wrap gap-2'>
									{[...p.frontend.slice(0, 3), ...p.backend.slice(0, 2)].map(
										(t) => (
											<TagChip key={t}>{t}</TagChip>
										),
									)}
								</div>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* ---------------- Experience ---------------- */}
			<section id='experience' className='border-b border-neutral-900'>
				<div className='max-w-6xl mx-auto px-6 py-20'>
					<SectionEyebrow>experience</SectionEyebrow>
					<h2 className='font-display text-3xl text-white font-bold mb-10'>
						Professional experience
					</h2>

					<div className='relative border-l border-neutral-800 pl-8 space-y-10'>
						{EXPERIENCE.map((e) => (
							<div key={e.role + e.org} className='relative'>
								<span className='absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-pink-400 ring-4 ring-neutral-950' />

								<div className='flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-2'>
									<span className='inline-flex items-center gap-1.5'>
										<Calendar className='h-3.5 w-3.5' /> {e.date}
									</span>
									{e.location && (
										<span className='inline-flex items-center gap-1.5'>
											<MapPin className='h-3.5 w-3.5' /> {e.location}
										</span>
									)}
								</div>

								<h3 className='font-display text-lg text-white font-semibold'>
									{e.role}
								</h3>
								<p className='text-sm font-medium text-pink-300 mt-0.5'>
									{e.org}
								</p>

								<ul className='mt-3 space-y-2'>
									{e.bullets.map((b) => (
										<li
											key={b}
											className='flex items-start gap-2.5 text-sm text-neutral-400 leading-relaxed'
										>
											<span className='mt-2 h-1 w-1 rounded-full bg-neutral-600 flex-shrink-0' />
											{b}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ---------------- Education ---------------- */}
			<section id='education' className='border-b border-neutral-900'>
				<div className='max-w-6xl mx-auto px-6 py-20'>
					<SectionEyebrow>education</SectionEyebrow>
					<h2 className='font-display text-3xl text-white font-bold mb-10'>
						Education
					</h2>

					<div className='grid md:grid-cols-2 gap-5'>
						{EDUCATION.map((ed) => (
							<div
								key={ed.degree}
								className='rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6'
							>
								<GraduationCap className='h-5 w-5 text-pink-400' />
								<h3 className='mt-3 font-display text-base font-semibold text-white'>
									{ed.degree}
								</h3>
								<p className='mt-1 text-sm text-neutral-400'>{ed.school}</p>
								<p className='mt-3 text-xs uppercase tracking-widest text-neutral-500'>
									{ed.date}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ---------------- Contact ---------------- */}
			<section id='contact'>
				<div className='max-w-6xl mx-auto px-6 py-24'>
					<div className='rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-900 to-pink-950/30 p-10 md:p-16 relative overflow-hidden'>
						<div className='glow-blob h-64 w-64 bg-pink-500 -bottom-20 -right-10' />
						<div className='relative grid md:grid-cols-2 gap-10 items-center'>
							<div>
								<SectionEyebrow>connect</SectionEyebrow>
								<h2 className='font-display text-3xl md:text-4xl text-white font-bold leading-tight'>
									Let's build something together.
								</h2>
								<p className='mt-4 text-neutral-400 leading-relaxed max-w-md'>
									If you have a product to build or a team that needs a
									full-stack developer, I'd like to hear about it.
								</p>
							</div>

							<div className='flex flex-col gap-3'>
								<a
									href={`mailto:${CONTACT.email}`}
									className='inline-flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950/60 px-5 py-4 text-sm text-neutral-200 hover:border-pink-400/50 hover:text-pink-300 transition-colors'
								>
									<Mail className='h-4 w-4' /> {CONTACT.email}
								</a>
								<a
									href={CONTACT.linkedin}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950/60 px-5 py-4 text-sm text-neutral-200 hover:border-pink-400/50 hover:text-pink-300 transition-colors'
								>
									<LinkedinOutlined className='h-4 w-4' /> {CONTACT.linkedin}
								</a>
								<a
									href={CONTACT.github}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950/60 px-5 py-4 text-sm text-neutral-200 hover:border-pink-400/50 hover:text-pink-300 transition-colors'
								>
									<GithubOutlined className='h-4 w-4' /> {CONTACT.github}
								</a>
								<a
									href='/portfolio-afifa/AfifaArgoubResume.pdf'
									download
									className='inline-flex items-center justify-center gap-2 rounded-xl bg-pink-500 px-5 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-pink-400 transition-colors'
								>
									<Download className='h-4 w-4' /> Download résumé
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className='border-t border-neutral-900'>
				<div className='max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500'>
					<span>© {new Date().getFullYear()} Afifa Argoub</span>
					<span>built with React &amp; Tailwind CSS</span>
				</div>
			</footer>

			{/* ---------------- Project modal ---------------- */}
			{activeProject && (
				<div
					className='fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm px-4'
					onClick={() => setActiveProject(null)}
				>
					<div
						ref={modalRef}
						tabIndex={-1}
						role='dialog'
						aria-modal='true'
						onClick={(e) => e.stopPropagation()}
						className='w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-900 p-6 focus:outline-none'
					>
						<div className='flex items-start justify-between gap-4'>
							<div>
								<h3 className='font-display text-xl font-bold text-white'>
									{activeProject.title}
								</h3>
								<p className='mt-1 text-xs uppercase tracking-widest text-pink-400'>
									{activeProject.role}
								</p>
							</div>
							<button
								onClick={() => setActiveProject(null)}
								aria-label='Close details'
								className='text-neutral-500 hover:text-neutral-200 transition-colors flex-shrink-0'
							>
								<X className='h-5 w-5' />
							</button>
						</div>

						<p className='mt-4 text-sm text-neutral-300 leading-relaxed'>
							{activeProject.detail}
						</p>

						<div className='mt-5'>
							<div className='text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2'>
								Frontend
							</div>
							<div className='flex flex-wrap gap-2'>
								{activeProject.frontend.map((t) => (
									<TagChip key={t}>{t}</TagChip>
								))}
							</div>
						</div>

						<div className='mt-4'>
							<div className='text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2'>
								Backend
							</div>
							<div className='flex flex-wrap gap-2'>
								{activeProject.backend.map((t) => (
									<TagChip key={t}>{t}</TagChip>
								))}
							</div>
						</div>

						<div className='mt-5 border-t border-neutral-800 pt-5'>
							<div className='text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3'>
								Highlights
							</div>
							<ul className='space-y-2'>
								{activeProject.highlights.map((h) => (
									<li
										key={h}
										className='flex items-start gap-2.5 text-sm text-neutral-300'
									>
										<span className='mt-1.5 h-1 w-1 rounded-full bg-pink-400 flex-shrink-0' />
										{h}
									</li>
								))}
							</ul>
						</div>

						{activeProject.demo && (
							<a
								href={activeProject.demo}
								target='_blank'
								rel='noopener noreferrer'
								className='mt-6 inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-pink-400 transition-colors'
							>
								{activeProject.demoLabel || "View live"}{" "}
								<ExternalLink className='h-3.5 w-3.5' />
							</a>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
