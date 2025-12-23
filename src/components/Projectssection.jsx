import { useState } from "react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("professional");

  // Project categories data
  const professionalProjects = [
    {
      title: "Government Platform - National Employment Agency",
      description: "Contributed to the development of multiple government platforms including the National Employment Agency system, handling job matching, employment services, and nationwide statistics.",
      technologies: ["React.js", ".NET", "MySQL", "REST API"],
      role: "Full Stack Developer",
      status: "In Progress",
      type: "Government Platform",
      confidential: true,
      government: true
    },
    {
      title: "ERP System",
      description: "Developed a comprehensive enterprise resource planning system integrating sales, HR, statistics, and product management modules. Streamlined internal processes and provided unified business analytics dashboard with real-time reporting.",
      technologies: ["Django", "PostgreSQL", "AlpineJS", "TailwindCSS",],
      role: "Full Stack Developer",
      type: "Enterprise Software",
      confidential: true
    },
    {
      title: "CRM Application",
      description: "Built a modern customer relationship management application with React.js frontend and Django backend. Features include lead management, customer tracking, marketing automation, and sales pipeline visualization.",
      technologies: ["React.js", "Django", "PostgreSQL", "Chart.js", "REST API"],
      role: "Full Stack Developer",
      type: "Business Application",
      confidential: true
    }
  ];

  const freelanceProjects = [
    {
      title: "Digital Skillers Platform",
      description: "Currently developing a freelance marketplace connecting freelancers with employers. Features include project posting, bidding system, payment processing, portfolio management, and skill matching algorithms.",
      technologies: ["React.js", "Django", "PostgreSQL", "Stripe API", "WebSocket"],
      role: "Full Stack Developer",
      status: "In Progress",
      type: "Marketplace Platform",
      confidential: true
    },
    {
      title: "Sleep Well E-commerce",
      description: "Built a complete e-commerce solution for a bedding business with React.js frontend and Django backend. Features include product catalog, shopping cart, payment integration, order management, and admin dashboard.",
      technologies: ["React.js", "Django", "PostgreSQL", "Stripe", "Redux"],
      role: "Full Stack Developer",
      type: "E-commerce Platform",
      confidential: true
    },
    {
      title: "Palace of Languages School",
      description: "Developed a comprehensive language school website with course management, event scheduling, student registration, and content management using Django and Wagtail CMS.",
      technologies: ["Django", "Wagtail", "PostgreSQL", "JavaScript", "Bootstrap"],
      role: "Backend Developer",
      type: "Educational Platform",
      confidential: true
    },
    {
      title: "DML Engineering Website",
      description: "Created a responsive corporate React.js application showcasing engineering services, projects portfolio, and company information with animated elements and interactive components.",
      technologies: ["React.js", "TailwindCSS", "JavaScript", "Framer Motion", "API Integration"],
      role: "Frontend Developer",
      type: "Corporate Website",
      confidential: true
    },
    {
      title: "Rafikni WordPress Website",
      description: "Developed and customized a WordPress website with WooCommerce integration for an e-commerce business, focusing on performance optimization and user experience.",
      technologies: ["WordPress", "WooCommerce", "PHP", "Elementor", "MySQL"],
      role: "Web Developer",
      type: "E-commerce Website",
      confidential: true
    }
  ];

  const showcaseProjects = [
    {
      title: "My Portfolio Website",
      description: "Designed and developed this portfolio from scratch using React.js and TailwindCSS. Demonstrates expertise in creating dynamic, responsive web applications with modern UI/UX principles and smooth animations.",
      technologies: ["React.js", "TailwindCSS", "JavaScript", "Vite", "CSS3"],
      role: "Frontend Developer",
      link: "#",
      type: "Portfolio",
      confidential: false
    },
    {
      title: "League of Legends Fan Site",
      description: "Interactive fan website for League of Legends showcasing champion statistics, game mechanics, and community features. Created as a passion project to explore modern frontend technologies.",
      technologies: ["HTML5", "CSS3", "JavaScript", "API Integration", "Responsive Design"],
      role: "Frontend Developer",
      link: "https://afifaarg.github.io/leagueLoveHate/",
      type: "Fan Community",
      confidential: false
    },
    {
      title: "Green Kitchen Restaurant",
      description: "Responsive website for an eco-friendly restaurant concept, created as part of web development coursework. Features menu display, reservation system, and sustainability information.",
      technologies: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      role: "Frontend Developer",
      link: "https://afifaarg.github.io/greenkitchen",
      type: "Showcase",
      confidential: false
    },
    {
      title: "Dribbble Clone",
      description: "Clone of Dribbble design platform showcasing creative designs and portfolio items with responsive layout and interactive elements.",
      technologies: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      role: "Frontend Developer",
      link: "https://afifaarg.github.io/dribble-cllone-website/",
      type: "Showcase",
      confidential: false
    }
  ];

  return (
    <div>
      <section
        className="min-h-screen flex flex-col items-center justify-center py-10 text-center sm:text-left w-3/5 sm:w-3/4 mx-auto text-greyText"
        id="projects"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <div className="h-px bg-gray-100 w-36"></div>
          <h1 className="text-[#6effe2dc] font-bold text-3xl">My Projects</h1>
          <div className="h-px bg-gray-100 w-36"></div>
        </div>

        {/* Short Privacy Notice */}
        <div className="mb-10 text-center">
          <p className="text-gray-400 text-sm">
            <span className="text-[#6EFFE1] font-medium">Note:</span> Client projects are confidential and maintained in private repositories. 
            Technical details available upon request.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center space-x-4 mb-12">
          <div
            className={`relative cursor-pointer px-6 py-3 text-lg font-semibold rounded-lg mb-4 ${
              activeTab === "professional"
                ? "text-[#6EFFE1] bg-[#062c50] border-2 border-[#6EFFE1]"
                : "text-white bg-[#011d38] hover:bg-[#062c50]"
            } transition-all duration-300`}
            onClick={() => setActiveTab("professional")}
          >
            Professional Experience
          </div>
          <div
            className={`relative cursor-pointer px-6 py-3 text-lg font-semibold rounded-lg mb-4 ${
              activeTab === "freelance"
                ? "text-[#6EFFE1] bg-[#062c50] border-2 border-[#6EFFE1]"
                : "text-white bg-[#011d38] hover:bg-[#062c50]"
            } transition-all duration-300`}
            onClick={() => setActiveTab("freelance")}
          >
            Freelance Projects
          </div>
          <div
            className={`relative cursor-pointer px-6 py-3 text-lg font-semibold rounded-lg mb-4 ${
              activeTab === "showcase"
                ? "text-[#6EFFE1] bg-[#062c50] border-2 border-[#6EFFE1]"
                : "text-white bg-[#011d38] hover:bg-[#062c50]"
            } transition-all duration-300`}
            onClick={() => setActiveTab("showcase")}
          >
            Showcase Projects
          </div>
        </div>

        {/* Professional Experience Tab */}
        {activeTab === "professional" && (
          <div className="space-y-12 w-full">
            {professionalProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-[#011d38] border border-gray-800 rounded-xl p-8 hover:border-[#6effe270] transition-all duration-300 hover:shadow-lg hover:shadow-[#6effe210] relative"
              >
                {/* Government Badge */}
                {project.government && (
                  <div className="absolute top-4 right-4 flex items-center text-[#4299E1] text-sm">
                    <svg 
                      className="w-5 h-5 mr-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Government Platform</span>
                  </div>
                )}
                
                {/* Confidential Badge */}
                {project.confidential && !project.government && (
                  <div className="absolute top-4 right-4 flex items-center text-[#6EFFE1] text-sm">
                    <svg 
                      className="w-5 h-5 mr-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Confidential</span>
                  </div>
                )}
                
                <div className="pr-32">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-sm font-medium text-gray-300 bg-[#062c50] px-3 py-1 rounded-full">
                      {project.role}
                    </span>
                    {project.status && (
                      <span className="text-sm font-medium text-[#6EFFE1] bg-[#6effe210] px-3 py-1 rounded-full animate-pulse">
                        {project.status}
                      </span>
                    )}
                    <span className="text-sm font-medium text-gray-400 bg-[#1a3a5a] px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-[#6effe220] text-[#6EFFE1] px-4 py-2 rounded-full text-sm font-medium border border-[#6effe240] hover:bg-[#6effe230] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Freelance Projects Tab */}
        {activeTab === "freelance" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {freelanceProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-[#011d38] border border-gray-800 rounded-xl p-8 hover:border-[#6effe270] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6effe210] relative"
              >
                {/* Confidential Badge */}
                {project.confidential && (
                  <div className="absolute top-4 right-4 flex items-center text-[#6EFFE1] text-sm">
                    <svg 
                      className="w-4 h-4 mr-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Confidential</span>
                  </div>
                )}
                
                <div className="pr-16">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white hover:text-[#6EFFE1] transition-colors">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="text-xs font-medium text-[#6EFFE1] bg-[#6effe210] px-2 py-1 rounded animate-pulse">
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-gray-300 bg-[#062c50] px-3 py-1 rounded-full">
                      {project.role}
                    </span>
                    <span className="text-sm text-gray-400 bg-[#1a3a5a] px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 text-base leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-xs font-medium hover:bg-[#6effe225] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Showcase Projects Tab */}
        {activeTab === "showcase" && (
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 w-full">
            {showcaseProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-[#011d38] border border-gray-800 rounded-xl p-8 hover:border-[#6effe270] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#6effe210] flex flex-col"
              >
                <div className="mb-6 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 hover:text-[#6EFFE1] transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-300 bg-[#062c50] px-3 py-1 rounded-full">
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-[#6effe215] text-[#6EFFE1] px-3 py-1 rounded-full text-xs font-medium hover:bg-[#6effe225] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && project.link !== "#" ? (
                  <a
                    href={project.link}
                    className="inline-flex items-center justify-center text-[#6EFFE1] font-medium hover:text-white transition-colors bg-[#6effe210] hover:bg-[#6effe220] py-2 px-4 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Live Demo</span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      className="ml-2 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ) : (
                  <div className="text-center py-2 px-4 rounded-lg bg-[#062c50] text-gray-400 text-sm">
                    Currently viewing this project
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}