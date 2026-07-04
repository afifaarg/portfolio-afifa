import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AboutMe() {
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [controls, isInView]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	const stats = [
		{ value: "3+", label: "Years Experience" },
		{ value: "2+", label: "Corporate Experience" },
		{ value: "10+", label: "Projects Delivered" },
	];

	const frontendSkills = [
		"React.js",
		"Next.js",
		"TypeScript",
		"JavaScript",
		"Tailwind CSS",
	];
	const backendSkills = ["Django", "ASP.NET", "Python", "REST APIs"];
	const toolsSkills = ["PostgreSQL", "MySQL", "Git", "Docker"];

	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={controls}
			variants={containerVariants}
			className='min-h-screen flex items-center justify-center px-4 py-16'
			id='aboutMe'
		>
			<div className='w-full max-w-5xl'>
				{/* Title */}
				<motion.div
					variants={itemVariants}
					className='flex items-center gap-4 mb-12'
				>
					<div className='h-px bg-white/10 flex-1 max-w-20'></div>
					<h2 className='text-[#6EFFE1] font-medium text-sm tracking-[0.2em] uppercase'>
						About Me
					</h2>
					<div className='h-px bg-white/10 flex-1 max-w-20'></div>
				</motion.div>

				<div className='space-y-12'>
					{/* Stats */}
					<motion.div
						variants={itemVariants}
						className='grid grid-cols-1 md:grid-cols-3 gap-4'
					>
						{stats.map((stat) => (
							<div
								key={stat.label}
								className='bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/5'
							>
								<div className='text-3xl font-bold text-[#6EFFE1]'>
									{stat.value}
								</div>
								<div className='text-sm text-gray-400 mt-1'>{stat.label}</div>
							</div>
						))}
					</motion.div>

					{/* Journey */}
					<motion.div variants={itemVariants} className='space-y-6'>
						<h3 className='text-xl font-semibold text-white'>My Journey</h3>
						<div className='space-y-4'>
							<p className='text-gray-300 leading-relaxed'>
								Master's graduate in Software Engineering from the University of
								Science and Technology Houari Boumedienne, with over{" "}
								<span className='text-[#6EFFE1] font-medium'>3 years</span> of
								hands-on development experience.
							</p>
							<p className='text-gray-300 leading-relaxed'>
								<span className='text-[#6EFFE1] font-medium'>2+ years</span> of
								corporate experience building enterprise systems including ERP,
								CRM solutions, and contributing to government platforms at the
								National Agency of Employment.
							</p>
							<p className='text-gray-300 leading-relaxed'>
								Extensive freelance experience developing e-commerce platforms,
								educational websites, and custom solutions for diverse clients.
							</p>
						</div>
					</motion.div>

					{/* Skills */}
					<motion.div variants={itemVariants} className='space-y-6'>
						<h3 className='text-xl font-semibold text-white'>
							Technical Expertise
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{/* Frontend */}
							<div className='space-y-3'>
								<h4 className='text-sm font-medium text-[#6EFFE1] tracking-wider'>
									Frontend
								</h4>
								<div className='flex flex-wrap gap-2'>
									{frontendSkills.map((skill) => (
										<span
											key={skill}
											className='px-3 py-1 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full'
										>
											{skill}
										</span>
									))}
								</div>
							</div>

							{/* Backend */}
							<div className='space-y-3'>
								<h4 className='text-sm font-medium text-[#6EFFE1] tracking-wider'>
									Backend
								</h4>
								<div className='flex flex-wrap gap-2'>
									{backendSkills.map((skill) => (
										<span
											key={skill}
											className='px-3 py-1 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full'
										>
											{skill}
										</span>
									))}
								</div>
							</div>

							{/* Tools */}
							<div className='space-y-3'>
								<h4 className='text-sm font-medium text-[#6EFFE1] tracking-wider'>
									Tools & Databases
								</h4>
								<div className='flex flex-wrap gap-2'>
									{toolsSkills.map((skill) => (
										<span
											key={skill}
											className='px-3 py-1 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full'
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
