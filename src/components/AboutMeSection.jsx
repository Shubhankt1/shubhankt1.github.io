// src/components/AboutMeSection.jsx
const AboutMeSection = ({
  index,
  sectionWidth,
  sectionLeft,
  isVisible,
  isScrolled,
}) => (
  <section
    className={`
        mb-16
        flex items-center
        relative
        px-8 py-16 shadow-xl
        tablet-sm:min-h-screen
        tablet-sm:sticky tablet-sm:top-0
        ${isScrolled ? "bg-white" : "bg-black"}
      `}
    style={{
      width: `${sectionWidth}%`,
      left: `${sectionLeft}%`,
    }}
  >
    <div
      className={`
        max-w-6xl mx-auto
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
        About Me
      </h2>
      <div className="grid grid-cols-1 tablet-sm:grid-cols-2 gap-12 items-start 2k:items-center">
        <div
          className="
          w-full
          max-w-[250px] xs:max-w-[300px]
          tablet-md:max-w-[350px]
          tablet-lg:max-w-[400px]
          2k:max-w-[450px]
          fhd:max-w-[500px]
          qhd:max-w-[600px]
          aspect-square overflow-hidden
          rounded-2xl shadow-2xl
          mx-auto tablet-lg:mx-0
          justify-self-center
        "
        >
          <img
            src="src/shubhank-graduation.jpeg"
            alt="Shubhank Tyagi"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="space-y-6">
          <p
            className={`
              section-text
              ${isScrolled ? "text-black" : "text-white"}
              qhd:text-2xl
            `}
          >
            Welcome to my digital space. I'm passionate about creating
            meaningful experiences through technology and design. My journey
            spans across various domains of development, from crafting elegant
            user interfaces to building robust backend systems.
          </p>
          <p
            className={`
              section-text
              ${isScrolled ? "text-black" : "text-white"}
              qhd:text-2xl
            `}
          >
            I believe in the power of clean code, thoughtful design, and
            innovative solutions. Every project is an opportunity to push
            boundaries and create something extraordinary that makes a real
            difference in people's lives.
          </p>
          <p
            className={`
              section-text
              ${isScrolled ? "text-black" : "text-white"}
              qhd:text-2xl
            `}
          >
            When I'm not coding, you'll find me exploring new technologies,
            watching football (and obsessing over Cristiano Ronaldo <sup>7</sup>
            ), or watching the one show I like the 100<sup>th</sup> time. Let's
            build something amazing together.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
