const footer = () => {
	return (
		<footer className='border-t border-neutral-900'>
			<div className='max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500'>
				<span>© {new Date().getFullYear()} Afifa Argoub</span>
				<span>built with React &amp; Tailwind CSS</span>
			</div>
		</footer>
	);
};
export default footer;
