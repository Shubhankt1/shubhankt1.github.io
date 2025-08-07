import { useState } from "react";

const SkillsSection = ({
  sectionWidth,
  sectionLeft,
  isVisible,
  isScrolled,
}) => {
  // State to track which skill category is expanded
  const [expandedCard, setExpandedCard] = useState(null);

  // Skills data grouped by categories
  const skillCategories = [
    {
      id: "mobile",
      title: "Mobile Development",
      icon: "📱",
      skills: [
        "Flutter",
        "CLEAN Architecture",
        "Riverpod / Provider / BloC",
        "Codemagic",
        "XCode",
        "Android Studio",
        "iOS / Android",
      ],
    },
    {
      id: "backend",
      title: "Backend & Languages",
      icon: "⚙️",
      skills: ["C/C++", "Python", "Node.js", "Express.js", "Flask", "Django"],
    },
    {
      id: "cloud",
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: [
        "Amazon Web Services",
        "Terraform",
        "Docker",
        "Shell",
        "API Gateway",
        "EC2",
        "CloudWatch",
        "CloudFront",
        "S3",
        "IAM",
        "Ansible",
      ],
    },
    {
      id: "database",
      title: "Databases",
      icon: "🗄️",
      skills: [
        "Elasticsearch",
        "MongoDB",
        "AWS DynamoDB",
        "Redis",
        "MySQL",
        "SQLite",
        "NoSQL",
      ],
    },
    {
      id: "iot",
      title: "Networking & IoT",
      icon: "🌐",
      skills: [
        "TCP/IP",
        "UDP",
        "MQTT",
        "CoAP",
        "Wi-Fi",
        "Bluetooth/BLE",
        "4G/LTE",
        "5G",
      ],
    },
    {
      id: "tools",
      title: "Tools & Frameworks",
      icon: "🛠️",
      skills: ["Git", "POSTMAN", "REST", "SDLC", "Agile/Scrum", "JIRA"],
    },
  ];

  // Toggle card expansion
  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
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
        w-full max-w-2xl mx-auto
		tablet-lg:max-w-4xl 2k+:max-w-6xl qhd:max-w-2k 3k:max-w-fhd+
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      >
        <h2
          className={`
          section-heading
          ${isScrolled ? "text-black" : "text-white"}
          `}
        >
          Skills
        </h2>

        {/* Skills Grid */}
        <div
          className="
			grid grid-cols-1 tablet-lg:grid-cols-2 qhd:grid-cols-3
			gap-6 items-start
		"
        >
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`
                skill-card relative overflow-hidden cursor-pointer
				transition-all duration-300
                ${
                  isScrolled
                    ? "bg-gray-100 hover:bg-gray-50"
                    : "bg-gray-900 hover:bg-gray-800"
                }
                ${expandedCard === category.id ? "skill-card-expanded" : ""}
              `}
              style={{
                transform:
                  expandedCard === category.id ? "scale(1.02)" : "scale(1)",
                zIndex: expandedCard === category.id ? 10 : 1,
                // height: expandedCard === category.id ? "auto" : "120px", // Fixed height when collapsed
              }}
              onClick={() => toggleCard(category.id)}
            >
              {/* Card Header */}
              <div
                className={`
					${expandedCard === category.id ? "h-auto" : "min-h-[80px] 3k:min-h-[120px]"}
					p-6 flex flex-col justify-center
					3k:p-8
			  `}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="
						text-2xl 3k:text-4xl
					"
                    >
                      {category.icon}
                    </span>
                    <h3
                      className={`
                        font-semibold text-lg
                        ${isScrolled ? "text-black" : "text-white"}
						3k:text-3xl
                      `}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Expand indicator */}
                  <div
                    className={`
                      transform transition-transform duration-300
                      ${expandedCard === category.id ? "rotate-180" : ""}
                    `}
                  >
                    <svg
                      className={`
						w-5 h-5
						3k:w-8 3k:h-8
						${isScrolled ? "text-gray-600" : "text-gray-300"}
					  `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Mobile tap indicator */}
                <p
                  className={`
                    text-xs opacity-70 tablet-lg:hidden
					3k:text-lg
                    ${isScrolled ? "text-gray-600" : "text-gray-400"}
                  `}
                >
                  Tap to expand
                </p>
              </div>

              {/* Expandable Skills List */}
              <div
                className={`
                  skills-list overflow-hidden transition-all duration-500 ease-out
                  ${
                    expandedCard === category.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className={`
                          text-sm px-3 py-2 rounded-lg text-center
						  flex flex-wrap items-center justify-center
						  3k:text-[26px] 3k:leading-[34px]
                          ${
                            isScrolled
                              ? "bg-blue-100 text-blue-800"
                              : "bg-blue-900/50 text-blue-200"
                          }
                        `}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
