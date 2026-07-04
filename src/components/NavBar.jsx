import { useState, useEffect } from "react";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const links = [
		{ id: "aboutMe", num: "01.", label: "About" },
		{ id: "projects", num: "02.", label: "Projects" },
		{ id: "experience", num: "03.", label: "Experience" },
		{ id: "education", num: "04.", label: "Education" },
		{ id: "contact", num: "05.", label: "Contact" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 text-slate-800 dark:text-white transition-all duration-500 ${
				isScrolled
					? "py-2 bg-white/60 dark:bg-white/10 backdrop-blur-xl border-b border-black/5 dark:border-white/10 shadow-lg"
					: "py-4 bg-white/30 dark:bg-white/5 backdrop-blur-md border-b border-transparent"
			}`}
		>
			<div className='max-w-6xl mx-auto w-full flex items-center justify-between px-4 md:px-8'>
				{/* Logo */}
				<a
					href='/'
					className='shrink-0 text-2xl font-bold tracking-tight text-slate-800 dark:text-white transition-transform duration-300 hover:scale-105'
				>
					afifa<span className='text-[#ec4899]'>.</span>
				</a>

				{/* Hamburger (mobile) */}
				<button
					data-collapse-toggle='navbar-default'
					type='button'
					className='relative inline-flex items-center justify-center w-10 h-10 rounded-lg md:hidden text-slate-800 dark:text-white/90 hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20 transition-colors duration-300'
					aria-controls='navbar-default'
					aria-expanded={isOpen}
					onClick={toggleMenu}
				>
					<span className='sr-only'>Open main menu</span>
					<div className='w-5 h-4 relative flex flex-col justify-between'>
						<span
							className={`block h-[2px] w-full bg-current rounded transition-all duration-300 ${
								isOpen ? "rotate-45 translate-y-[7px]" : ""
							}`}
						/>
						<span
							className={`block h-[2px] w-full bg-current rounded transition-all duration-300 ${
								isOpen ? "opacity-0" : "opacity-100"
							}`}
						/>
						<span
							className={`block h-[2px] w-full bg-current rounded transition-all duration-300 ${
								isOpen ? "-rotate-45 -translate-y-[7px]" : ""
							}`}
						/>
					</div>
				</button>

				{/* Mobile Menu Overlay */}
				<div
					className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
						isOpen
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					}`}
					onClick={() => setIsOpen(false)}
				>
					<ul
						className={`absolute top-0 right-0 h-full w-64 bg-white/80 dark:bg-white/10 backdrop-blur-2xl border-l border-black/5 dark:border-white/10 font-sm p-6 pt-24 space-y-6 text-slate-800 dark:text-white/90 transition-transform duration-500 ease-out ${
							isOpen ? "translate-x-0" : "translate-x-full"
						}`}
						onClick={(e) => e.stopPropagation()}
					>
						{links.map((link, i) => (
							<li
								key={link.id}
								className='transition-all duration-300'
								style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
							>
								<a
									href={`#${link.id}`}
									className='group flex items-center py-2 px-3 hover:text-[#ec4899] transition-colors duration-300'
									onClick={() => setIsOpen(false)}
								>
									<span className='text-[#ec4899] pr-1'>{link.num}</span>
									<span className='relative'>
										{link.label}
										<span className='absolute left-0 -bottom-1 w-0 h-[1px] bg-[#ec4899] transition-all duration-300 group-hover:w-full' />
									</span>
								</a>
							</li>
						))}
						<li className='pt-4'>
							<a
								href='/resume.pdf'
								download
								className='inline-block w-full text-center py-2 px-4 rounded-lg border border-[#ec4899] text-[#ec4899] hover:bg-[#ec4899] hover:text-[#011d38] transition-all duration-300'
							>
								Download Resume
							</a>
						</li>
					</ul>
				</div>

				{/* Desktop Menu - centered */}
				<div
					id='navbar-default'
					className='hidden md:flex flex-1 justify-center items-center text-slate-800 dark:text-white/90 font-sm gap-1'
				>
					{links.map((link, index) => (
						<a
							key={link.id}
							href={`#${link.id}`}
							className='group relative py-2 px-3 transition-colors duration-300 hover:text-[#ec4899]'
						>
							<span className='text-sm text-[#ec4899] pr-1'>{link.num}</span>
							{link.label}
							<span className='absolute left-3 right-3 -bottom-0.5 h-[1px] bg-[#ec4899] scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100' />
						</a>
					))}
				</div>

				{/* Download Resume button (desktop) */}
				<a
					href='/resume.pdf'
					download
					className='hidden md:inline-flex items-center gap-2 shrink-0 py-2 px-4 rounded-lg border border-[#ec4899] text-[#ec4899] text-sm font-medium overflow-hidden relative transition-all duration-300 hover:text-[#011d38] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] before:absolute before:inset-0 before:bg-[#ec4899] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100'
				>
					<svg
						className='w-4 h-4 relative z-10'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3'
						/>
					</svg>
					<span className='relative z-10'>Download Resume</span>
				</a>
			</div>
		</nav>
	);
}
