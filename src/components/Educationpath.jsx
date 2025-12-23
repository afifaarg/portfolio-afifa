export default function Educationpath() {
  const education = [
    {
      degree: "Master's Degree in Software Engineering",
      institution: "University of Science and Technology Houari Boumedienne",
      period: "Sept 2021 - June 2023",
      points: [
        "Acquired advanced skills in software development, system design, and architecture",
        "Specialized in database management and backend development techniques"
      ]
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "University of Science and Technology Houari Boumedienne",
      period: "Sept 2018 - June 2021",
      points: [
        "Strong foundation in programming languages and algorithms",
        "Proficiency in software engineering methodologies and tools"
      ]
    }
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-8 w-3/4 mx-auto text-greyText"
      id="education"
    >
      {/* Title */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px bg-gray-100 w-16 md:w-36"></div>
        <h1 className="text-[#6effe2dc] font-bold text-2xl sm:text-3xl">
          Education
        </h1>
        <div className="h-px bg-gray-100 w-16 md:w-36"></div>
      </div>

      {/* Education Container */}
      <div className="space-y-6 w-full max-w-5xl">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            {/* Education Card */}
            <div className="bg-[#011d38] border border-gray-800 rounded-lg p-5 hover:border-[#6effe270] transition-all duration-300">
              {/* Header */}
              <div className="mb-3">
                <div className="flex items-start justify-between mb-2">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="text-[#6EFFE1] w-5 h-5 mt-1 mr-3 flex-shrink-0"
                  >
                    <path d="M256 368a16 16 0 01-7.94-2.11L108 285.84a8 8 0 00-12 6.94V368a16 16 0 008.23 14l144 80a16 16 0 0015.54 0l144-80a16 16 0 008.23-14v-75.22a8 8 0 00-12-6.94l-140.06 80.05A16 16 0 01256 368z" />
                    <path d="M495.92 190.5v-.11a16 16 0 00-8-12.28l-224-128a16 16 0 00-15.88 0l-224 128a16 16 0 000 27.78l224 128a16 16 0 0015.88 0L461 221.28a2 2 0 013 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 00496 368V192a14.76 14.76 0 00-.08-1.5z" />
                  </svg>
                  <h3 className="text-lg font-bold text-white flex-grow">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-bold text-[#6EFFE1] ml-3 flex-shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm ml-8">{edu.institution}</p>
              </div>

              {/* Points */}
              <div className="space-y-2 ml-8">
                {edu.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex">
                    <span className="text-[#6EFFE1] font-bold mr-2 mt-0.5 flex-shrink-0">-</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}