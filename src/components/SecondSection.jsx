const SecondSection = ({
  sectionWidth,
  sectionLeft,
  borderRadius,
  isVisible,
}) => {
  return (
    <section
      className="min-h-screen bg-black sticky top-0 z-20 px-8 py-16 mt-[40vh] shadow-xl"
      style={{
        width: `${sectionWidth}%`,
        left: `${sectionLeft}%`,
        borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
      }}
    >
      {/* Content Container with fade-in animation */}
      <div
        className={`
          max-w-3xl mx-auto transition-all duration-700 ease-out
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }
        `}
      >
        {/* Section Heading */}
        <h2 className="section-heading">About Me</h2>

        {/* Section Content */}
        <div className="space-y-8">
          <p className="section-text">
            Welcome to my digital space. I'm passionate about creating
            meaningful experiences through technology and design. My journey
            spans across various domains of development, from crafting elegant
            user interfaces to building robust backend systems.
          </p>

          <p className="section-text">
            I believe in the power of clean code, thoughtful design, and
            innovative solutions. Every project is an opportunity to push
            boundaries and create something extraordinary that makes a real
            difference in people's lives.
          </p>

          <p className="section-text">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community. Let's build something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
