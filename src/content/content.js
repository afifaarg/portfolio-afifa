export const ROLES = [
	"Full-Stack Web Developer",
	"Django Developer",
	"React.js Developer",
];

export const SKILL_GROUPS = [
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

export const PROJECTS = [
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

export const EXPERIENCE = [
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

export const EDUCATION = [
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

export const CONTACT = {
	email: "afifa.argoubb@gmail.com",
	linkedin: "https://www.linkedin.com/in/afifa-argoub-808500183/",
	github: "https://github.com/afifaarg",
};

export const FEATURES = [
	{ label: "Years of experience", value: "3+" },
	{ label: "Projects shipped", value: "7+" },
	{ label: "Used by", value: "thousands nationwide" },
	{ label: "Core stack", value: "React & Django" },
];
