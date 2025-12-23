export default function HelloSection() {
  const handleScroll = () => {
    const nextSection = document.getElementById("aboutMe");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl">
        <main className="relative">
          {/* Animated background gradient */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#6effe210] via-transparent to-[#6effe210] rounded-3xl blur-2xl opacity-20"></div>
          
          <div className="relative px-6 py-12 md:px-10 md:py-16">
            <div className="text-left space-y-6 md:space-y-8">
              {/* Greeting */}
              <div className="space-y-2">
                <p className="font-medium text-sm md:text-base text-[#6EFFE1] tracking-wider uppercase">
                  Hello, I'm
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-[#6EFFE1] to-[#4fd3c7] bg-clip-text text-transparent">
                    Afifa Argoub
                  </span>
                </h1>
              </div>

              {/* Tagline */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Full Stack Developer building
                <br />
                <span className="text-[#6EFFE1]">impactful digital solutions</span>
              </h2>

              {/* Description */}
              <div className="max-w-2xl">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Software engineer specializing in React.js, Django, and .NET development. 
                  Currently contributing to government platforms at the National Agency of Employment while 
                  freelancing for diverse client projects. Passionate about creating scalable, 
                  user-centric applications that solve real-world problems.
                </p>
              </div>

              {/* Quick highlights */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-[#6EFFE1] rounded-full"></div>
                  <span className="text-sm md:text-base">React.js Developer</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-[#6EFFE1] rounded-full"></div>
                  <span className="text-sm md:text-base">Django Backend</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-[#6EFFE1] rounded-full"></div>
                  <span className="text-sm md:text-base">Full Stack Development</span>
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="pt-8 md:pt-12 w-full mx-auto">
                <button
                  onClick={handleScroll}
                  className="group flex flex-col items-center mx-auto text-gray-400 hover:text-[#6EFFE1] transition-colors duration-300"
                  aria-label="Scroll to next section"
                >
                  <span className="text-sm mb-2 tracking-wider">Explore my work</span>
                  <svg
                    className="w-6 h-6 group-hover:animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          
        </main>
      </div>
    </div>
  );
}