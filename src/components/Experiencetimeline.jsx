import { Calendar, MapPin } from "lucide-react";
import { EXPERIENCE } from "../content/content";
import SectionEyebrow from "../helpersComponents/SectionEyebrow";

export default function Experiencetimeline() {
	return (
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
	);
}
