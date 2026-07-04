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

export default function NavBar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const navLinks = [
		{ label: "About", href: "#about" },
		{ label: "Skills", href: "#skills" },
		{ label: "Projects", href: "#projects" },
		{ label: "Experience", href: "#experience" },
		{ label: "Education", href: "#education" },
		{ label: "Contact", href: "#contact" },
	];

	return (
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
	);
}
