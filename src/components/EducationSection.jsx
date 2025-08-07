// src/components/EducationSection.jsx

const educationData = [
  {
    logo: "assets/logos/northeastern-seal.png",
    location: "Boston, Massachusetts",
    college: "College of Engineering",
    school: "Northeastern University",
    degree: "Master of Science",
    major: "Internet of Things",
    dates: "2023 – 2025",
    gpa: "Graduated cum laude",
    highlights: ["Graduated cum-laude", "Thesis on embedded security"],
  },
  {
    logo: "assets/logos/upes-logo.png",
    location: "Dehradun, India",
    college: "School of Computer Science",
    school: "University of Petroleum and Energy Studies",
    degree: "Bachelor of Technology",
    major: "Computer Science Engineering (IoT)",
    dates: "2016 – 2020",
    gpa: "Graduated with Honors",
    highlights: ["Graduated with Honors", "Joint Secretary of IoT Club"],
  },
];

const EducationSection = ({
  sectionWidth,
  sectionLeft,
  isVisible,
  isScrolled,
}) => (
  <section
    className={`
		min-h-screen
		${isScrolled ? "bg-white" : "bg-black"}
		sticky
		top-0 px-8 py-16
		flex items-center
	`}
    style={{
      width: `${sectionWidth}%`,
      left: `${sectionLeft}%`,
    }}
  >
    <div
      className={`
        w-full max-w-7xl mx-auto
        2k:max-w-2k
        qhd:max-w-fhd
		3k:max-w-qhd
		4k:max-w-3k
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      <h2
        className={`
          section-heading
          ${isScrolled ? "text-black" : "text-white"}
          mb-12
        `}
      >
        Education
      </h2>

      <div
        className="
          grid grid-cols-1
          gap-8
          justify-items-center
          tablet-lg:grid-cols-2
          2k:gap-12
          fhd:gap-20
		    "
      >
        {educationData.map((ed) => (
          <div
            key={ed.school}
            className="
              diploma-card p-8
              w-full max-w-md
              xs:max-w-lg
              tablet-sm:max-w-2xl
              tablet-md:max-w-3xl
              tablet-lg:max-w-7xl
              qhd:max-w-4xl
			  3k:max-w-6xl
			  4k:max-w-7xl
              aspect-[16/9]
              flex flex-col items-center justify-center
              tablet-md: min-h-[400px]
              tablet-lg:min-h-[430px]
			  3k:min-h-[600px]
			      "
          >
            {/* Seal */}
            <img
              src={ed.logo}
              alt={`${ed.school} seal`}
              className="
                diploma-seal
				w-24 h-24
                2k:w-[100px] 2k:h-[100px]
                2k+:w-[110px] 2k+:h-[110px]
				3k:w-[160px] 3k:h-[160px]
              "
            />

            {/* School name in Old English */}
            <h3
              className="
                  diploma-school
				  tablet-sm:text-2xl 2k+:text-3xl
                  qhd:text-4xl 3k:text-5xl
				  2k:mt-2 2k:mb-1
				  2k+:mt-3 2k+:mb-1
                  qhd:mt-4 qhd:mb-4
                  3k:mt-6 3k:mb-6
                "
            >
              {ed.school}
            </h3>

            {/* Details */}
            <p
              className="
			diploma-text italic mb-3 text-sm
			2k+:mb-3 qhd:mb-4
			2k+:text-base 
			3k:text-2xl 3k:mb-6
			"
            >
              {ed.location}
            </p>
            <p
              className="
			diploma-text font-semibold text-[15px]
			qhd:text-[17px] qhd:mb-2
			3k:text-[24px] 3k:mb-5
			"
            >
              {ed.college}
            </p>
            <p
              className="
			diploma-degree text-2xl mb-2
			tablet-sm:text-2xl 2k+:text-[26px]
			qhd:text-3xl 3k:text-[40px] 
			tablet-sm:mb-1 2k+:mb-2 qhd:mb-3 3k:mb-6
			"
            >
              {ed.degree}
            </p>
            <p
              className="
			diploma-text italic mb-3
			qhd:text-lg
			3k:text-2xl 3k:mb-6
			"
            >
              {ed.major}
            </p>
            <p
              className="
			diploma-text text-sm
			qhd:text-lg qhd:mb-2
			3k:text-2xl 3k:mb-2
			"
            >
              {ed.dates}
            </p>
            <p
              className="
			diploma-text italic
			qhd:text-lg qhd:mb-2
			3k:text-2xl
			"
            >
              {ed.gpa}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
