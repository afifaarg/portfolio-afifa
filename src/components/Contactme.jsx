import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { CONTACT } from "../content/content";
import SectionEyebrow from "../helpersComponents/SectionEyebrow";
import { Download, Mail } from "lucide-react";

export default function Contactme() {
	return (
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
								If you have a product to build or a team that needs a full-stack
								developer, I'd like to hear about it.
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
	);
}
