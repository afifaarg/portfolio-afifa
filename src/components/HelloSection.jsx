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
import { FEATURES, ROLES } from "../content/content";
import useTypewriter from "../customHooks/useTypeWriter";

export default function AfifaPortfolio() {
	const typed = useTypewriter(ROLES);

	return (
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
					{FEATURES.map((m) => (
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
	);
}
