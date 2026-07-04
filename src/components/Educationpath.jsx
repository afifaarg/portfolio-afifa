import { GraduationCap } from "lucide-react";
import { EDUCATION } from "../content/content";
import SectionEyebrow from "../helpersComponents/SectionEyebrow";

export default function Educationpath() {
	return (
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
	);
}
