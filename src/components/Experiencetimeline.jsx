export default function Experiencetimeline() {
  const experiences = [
    {
      title: "Web Developer - National Agency of Employment (ANEM)",
      location: "Algiers",
      period: "Dec 2024 - Present",
      points: [
        "Developing internal web apps with ReactJS frontend & .NET backend",
        "Collaborating on employment platforms and public service systems",
        "Building UIs with Tailwind CSS & React.js",
        "Integrating REST APIs and optimizing performance"
      ],
      technologies: ["React.js", ".NET", "MySQL", "TailwindCSS", "REST API"]
    },
    {
      title: "Full Stack Developer - DIVATECH",
      location: "Mohamadia, Algiers",
      period: "May 2023 - Aug 2024",
      points: [
        "Built custom ERP system for inventory, accounting, project management",
        "Developed CRM application for client engagement and data analysis",
        "Implemented full-stack solutions with React, Django, PostgreSQL"
      ],
      technologies: ["React.js", "Django", "PostgreSQL", "AlpineJS"]
    },
    {
      title: "Internship - Cerist",
      location: "Ben Aknoun, Algiers",
      period: "Jan 2023 - Jun 2023",
      points: [
        "Developed backend functionalities and server-side operations",
        "Applied software modeling and database schema management",
        "Worked on frontend-backend system integration"
      ],
      technologies: ["Python", "Django", "PostgreSQL"]
    }
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 w-full mx-auto text-greyText"
      id="experience"
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-4 sm:flex-row mb-8">
        <div className="h-px bg-gray-100 w-24 sm:w-36"></div>
        <h1 className="text-[#6effe2dc] font-bold text-2xl sm:text-3xl">
          Experience
        </h1>
        <div className="h-px bg-gray-100 w-24 sm:w-36"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-[#6EFFE1] via-[#6effe280] to-transparent"></div>

        {/* Experience Items */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-4 w-3 h-3 bg-[#6EFFE1] rounded-full z-10 border-4 border-[#011d38] -translate-x-1.5"></div>

              {/* Experience Card */}
              <div className="ml-10">
                <div className="bg-[#011d38] border border-gray-800 rounded-lg p-5 hover:border-[#6effe270] transition-all duration-300">
                  {/* Header */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#6EFFE1] font-medium">{exp.location}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 italic">{exp.period}</span>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="space-y-2 mb-4">
                    {exp.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex">
                        <span className="text-[#6EFFE1] font-bold mr-2 mt-0.5 flex-shrink-0">-</span>
                        <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-700">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-[#6effe215] text-[#6EFFE1] px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}