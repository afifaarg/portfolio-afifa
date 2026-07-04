const SectionEyebrow = ({ children }) => {
	return (
		<div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4'>
			<span className='h-1.5 w-1.5 rounded-full bg-pink-400' />
			{children}
		</div>
	);
};
export default SectionEyebrow;
