// src/components/EducationSection.jsx

const educationData = [
  {
    degree: "M.S. in Internet of Things",
    school: "Northeastern University",
    dates: "Aug 2023 – May 2025",
    logo: "/logos/northeastern.png", // optional
    highlights: ["Graduated cum-laude", "Thesis on embedded security"],
  },
  {
    degree: "B.Tech in Computer Science Engineering",
    school: "University of Petroleum and Energy Studies",
    dates: "Aug 2016 – May 2020",
    highlights: ["Graduated with Honors", "Joint Secretary of IoT Club"],
  },
];

const EducationSection = ({ index, sectionWidth, sectionLeft, isVisible }) => {
  return (
    // <section
    //   className="
    //     min-h-screen bg-white sticky top-0 z-20
    //     px-8 py-16 shadow-xl
    //     flex flex-col justify-center
    //   "
    //   style={{
    //     width: `${sectionWidth}%`,
    //     left: `${sectionLeft}%`,
    //   }}
    // >
    <section
      className="
	  	flex flex-col justify-center
		min-h-screen
		bg-white
		sticky
		top-0
	  "
      style={{
        width: `${sectionWidth}%`,
        left: `${sectionLeft}%`,
        marginTop: `${index * 90}vh`, // push down by one viewport per prior panel
        zIndex: 10 + index * 10, // ensure stacking order: 10, 20, 30…
      }}
    >
      <div
        className={`
            max-w-6xl mx-auto
            transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }
          `}
      >
        <h2 className="section-heading mb-12 text-black">Education</h2>

        <div
          className="
          grid grid-cols-1 tablet-lg:grid-cols-2
          gap-8
        "
        >
          {educationData.map((ed) => (
            <div
              key={ed.degree}
              className="
                bg-[#1a1a1a]
                rounded-2xl
                p-6
                shadow-xl
              "
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                {ed.degree}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{ed.school}</p>
              <p className="text-sm text-gray-500 mb-4">{ed.dates}</p>
              <ul
                className="
                list-disc list-inside
                text-gray-300 space-y-1
              "
              >
                {ed.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
