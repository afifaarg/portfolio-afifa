import { SKILL_GROUPS } from "../content/content";
import SectionEyebrow from "../helpersComponents/SectionEyebrow";

const Skills = () => {
	return (
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
	);
};
export default Skills;
