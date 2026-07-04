import { useEffect, useRef, useState } from "react";
import SectionEyebrow from "../helpersComponents/SectionEyebrow";
import { PROJECTS } from "../content/content";
import TagChip from "../helpersComponents/TagChip";
import { ExternalLink, X } from "lucide-react";

export default function Projects() {
	const [activeProject, setActiveProject] = useState(null);
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

	return (
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
		</section>
	);
}
