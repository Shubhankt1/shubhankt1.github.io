import { useState, useEffect, useRef } from "react";

const ExperienceSection = ({
  sectionWidth,
  sectionLeft,
  isVisible,
  isScrolled,
}) => {
  // Experience data from your resume
  const experiences = [
    {
      id: "danlaw",
      company: "Danlaw Inc.",
      role: "Mobile Applications Co-Op",
      location: "Michigan, USA",
      period: "Jun. 2024 – Aug. 2024",
      achievements: [
        "Enhanced cross-platform app performance by optimizing Flutter widget trees and improving responsiveness across different aspect ratios for mobiles, tablets, and laptops, thereby reducing redundant code.",
        "Designed and documented an order management API (Node.js) with JWT authentication and role-based access control, architectural flowcharts for FedEx integration and secured data flows to streamline logistics workflows into a dashboard.",
      ],
      technologies: [
        "Flutter",
        "Node.js",
        "JWT",
        "FedEx API",
        "Cross-platform",
      ],
    },
    {
      id: "forwood-senior",
      company: "Forwood Safety",
      role: "Full Stack Engineer and Release Manager",
      location: "Australia (Remote)",
      period: "Jan. 2023 – Jul. 2023",
      achievements: [
        "Led cross-functional design meetings for mobile and platform features, driving technical solutions from ideation to implementation.",
        "Contributed to CI/CD overhaul with DevOps team by migrating to a monorepo architecture with Terraform-based AWS Lambda deployments, cutting release time by 67% through streamlined workflows.",
        "Architected and developed microservices for the platform ecosystem, including a backup system for AWS DynamoDB and OpenSearch, minimizing potential data loss.",
        "Spearheaded Flutter development for 3 years and architected mobile CI/CD infrastructure using Codemagic, reducing release cycles by 60% and standardizing deployment across platforms.",
      ],
      technologies: [
        "Terraform",
        "Amazon Web Services",
        "DynamoDB",
        "OpenSearch",
        "Flutter",
      ],
    },
    {
      id: "forwood-product",
      company: "Forwood Safety",
      role: "Product Engineer",
      location: "Australia (Remote)",
      period: "Sep. 2020 – Jan. 2023",
      achievements: [
        "Engineered comprehensive Flutter mobile app redesign with QR-code authentication using asymmetric encryption, offline data synchronization, and internationalization across 16 languages, enhancing security, improving uptime by 30%, and expanding global reach to 1.7K+ users.",
        "Modified native Android code in WebView to solve camera capture limitations, implemented GetX for streamlined state management, and integrated OneSignal for push notifications.",
        "Spearheaded development of an MVP for a Computer Vision-based Risk Management System, training YOLOv4 models with 95% accuracy for detecting mining hazards and implementing real-time alert protocols, securing a long-term contract with a leading diamond mining company.",
      ],
      technologies: [
        "Flutter",
        "QR Authentication",
        "Computer Vision",
        "YOLOv4",
        "iOS / Android",
        "OneSignal",
        "Codemagic",
      ],
    },
    {
      id: "aerologiks",
      company: "Aerologiks",
      role: "IoT Engineer Intern",
      location: "Bengaluru, IN",
      period: "Feb. 2020 – Sept. 2020",
      achievements: [
        "Built a hybrid telemetry infrastructure using DynamoDB (cloud) and SQLite (edge) to manage real-time flight data and command tracking for drone operations.",
        "Integrated Flutter mobile interface with Django backend, enabling users to create custom flight paths and remotely execute commands through Raspberry Pi-connected flight controllers for real-time drone operations.",
      ],
      technologies: [
        "DynamoDB",
        "SQLite",
        "Flutter",
        "Django",
        "Raspberry Pi",
        "IoT",
      ],
    },
  ];

  // Refs for each timeline item
  const timelineRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState(new Set());

  // Scroll observer for timeline items
  useEffect(() => {
    const observers = [];

    timelineRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]));
            } else {
              // Item going out
              setVisibleItems((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
            }
          },
          {
            threshold: 0.4, // Trigger when 30% of item is visible
            rootMargin: "0px 0px -100px 0px", // Trigger slightly before fully visible
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [isVisible]);

  return (
    <section
      className={`
		min-h-screen
		${isScrolled ? "bg-white" : "bg-black"}
		sticky
		top-0 px-8 py-16 pt-48
		flex items-center
	`}
      style={{
        width: `${sectionWidth}%`,
        left: `${sectionLeft}%`,
      }}
      id="experience"
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
          Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`
              absolute left-4 tablet-lg:left-8 top-0 bottom-0 w-0.5
              ${isScrolled ? "bg-gray-300" : "bg-gray-600"}
            `}
          />

          {/* Experience Items */}
          <div className="space-y-8 tablet-lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => (timelineRefs.current[index] = el)}
                className={`
					timeline-item relative pl-12 tablet-lg:pl-20
					${visibleItems.has(index) ? "animate-in" : ""}
				`}
              >
                {/* Timeline Dot */}
                <div
                  className={`
					timeline-dot absolute -left-2 tablet-lg:-left-4 top-4
					w-5 h-5 tablet-lg:w-7 tablet-lg:h-7 2k+:w-8 2k+:h-8
					rounded-full border-4
					${isScrolled ? "bg-blue-500 border-white" : "bg-blue-400 border-gray-800"}
					${visibleItems.has(index) ? "animate-in" : ""}
				  `}
                />

                {/* Experience Card */}
                <div
                  className={`
                    rounded-xl p-6 tablet-lg:p-8 3k:p-10
                    border transition-all duration-300
                    ${
                      isScrolled
                        ? "bg-gray-50 border-gray-200 hover:bg-gray-100"
                        : "bg-gray-900/50 border-gray-700 hover:bg-gray-800/50"
                    }
                    backdrop-blur-sm
                  `}
                >
                  {/* Company & Role */}
                  <div className="mb-4">
                    <h3
                      className={`
                        text-xl 3k:text-2xl font-bold
                        ${isScrolled ? "text-blue-600" : "text-blue-400"}
                      `}
                    >
                      {exp.company}
                    </h3>
                    <p
                      className={`
                        text-base 3k:text-lg font-semibold mt-1
                        ${isScrolled ? "text-gray-800" : "text-white"}
                      `}
                    >
                      {exp.role}
                    </p>
                    <div
                      className={`
                        flex flex-col tablet-lg:flex-row tablet-lg:justify-between 
                        tablet-lg:items-center mt-2 text-sm tablet-lg:text-base 3k:text-lg
                        ${isScrolled ? "text-gray-600" : "text-gray-300"}
                      `}
                    >
                      <span>{exp.location}</span>
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className={`
                            text-sm tablet-lg:text-base 3k:text-lg leading-relaxed
                            flex items-start gap-3
                            ${isScrolled ? "text-gray-700" : "text-gray-200"}
                          `}
                        >
                          <span
                            className={`
                              w-2 h-2 rounded-full flex-shrink-0 mt-2
                              ${isScrolled ? "bg-blue-500" : "bg-blue-400"}
                            `}
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`
                          px-3 py-1 rounded-full text-xs tablet-lg:text-sm 3k:text-base
                          font-medium
                          ${
                            isScrolled
                              ? "bg-blue-100 text-blue-800"
                              : "bg-blue-900/50 text-blue-200"
                          }
                        `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline End Dot */}
          <div
            className={`
              absolute -left-1 tablet-lg:-left-2 bottom-0
              w-2 h-2 tablet-lg:w-4 tablet-lg:h-4
              rounded-full
              ${isScrolled ? "bg-gray-400" : "bg-gray-500"}
            `}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
