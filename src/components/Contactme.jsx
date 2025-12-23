export default function Contactme() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center py-4 w-3/4 mx-auto text-greyText"
      id="contact"
    >
      {/* Title */}
      <div className="flex  items-center gap-4 mb-4">
        <div className="h-px bg-gray-100 w-36"></div>
        <h1 className="text-[#6effe2dc] font-bold text-3xl">Get In Touch</h1>
        <div className="h-px bg-gray-100 w-36"></div>
      </div>

      {/* Contact Message */}
      <div className="text-center">
        <p className="text-lg text-[#B0BEC5] mb-4">
          Feel Free to email me or download my resume
        </p>

        <div className="flex flex-col gap-4">
          {/* Download Resume Button */}
          <a
            href="/portfolio-afifa/AfifaArgoubResume.pdf" // Replace with the actual path to your resume
            download
            className="border border-[#6EFFE1] text-[#6EFFE1] py-2 px-6 rounded-lg hover:bg-[#6EFFE1] hover:text-black transition duration-300"
          >
            Download My Resume
          </a>

          {/* Email Me Button */}
          <a
            href="mailto:afifa.argoubb@gmail.com"
            className="border border-[#6EFFE1] text-[#6EFFE1] py-2 px-6 rounded-lg hover:bg-[#6EFFE1] hover:text-black transition duration-300"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
}
