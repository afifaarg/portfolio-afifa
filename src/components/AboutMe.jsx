export default function AboutMe() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-greyText py-8 px-4"
      id="aboutMe"
    >
      <div className="flex flex-col items-center text-greyText w-3/4 mx-auto">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <div className="h-px bg-gray-100 w-16 sm:w-36"></div>
          <h1 className="text-[#6effe2dc] font-bold text-2xl sm:text-3xl">
            About Me
          </h1>
          <div className="h-px bg-gray-100 w-16 sm:w-36"></div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-4xl">
          {/* Experience Overview */}
          <div className="bg-[#011d38] border border-gray-800 rounded-xl p-6 mb-8 hover:border-[#6effe270] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
              <div className="p-4">
                <div className="text-3xl font-bold text-[#6EFFE1]">3+</div>
                <div className="text-sm text-gray-300 mt-2">Years in Tech</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-[#6EFFE1]">2+</div>
                <div className="text-sm text-gray-300 mt-2">Corporate Experience</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-[#6EFFE1]">10+</div>
                <div className="text-sm text-gray-300 mt-2">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-6">
            {/* Professional Journey */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">My Journey</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#6EFFE1] font-bold mr-3 mt-1">→</div>
                  <p className="text-gray-300">
                    Master's graduate in Software Engineering from the University of Science and Technology Houari Boumedienne, with over <span className="text-[#6EFFE1] font-medium">3 years</span> of hands-on development experience.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#6EFFE1] font-bold mr-3 mt-1">→</div>
                  <p className="text-gray-300">
                    <span className="text-[#6EFFE1] font-medium">2+ years</span> of corporate experience building enterprise systems including ERP, CRM solutions, and contributing to government platforms at the National Agency of Employment.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#6EFFE1] font-bold mr-3 mt-1">→</div>
                  <p className="text-gray-300">
                    Extensive freelance experience developing e-commerce platforms, educational websites, and custom solutions for diverse clients while creating comprehensive web development courses for beginners.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Expertise */}
            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-white">Technical Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <h3 className="text-[#6EFFE1] font-medium">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">React.js</span>
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">AlpineJS</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[#6EFFE1] font-medium">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">Django</span>
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">.NET</span>
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">REST API</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[#6EFFE1] font-medium">Databases & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">MySQL</span>
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">Git</span>
                    <span className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-sm">WordPress</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}