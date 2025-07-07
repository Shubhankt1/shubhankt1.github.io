// src/components/AboutMeSection.jsx
const AboutMeSection = ({ index, sectionWidth, sectionLeft, isVisible }) => (
  <section
    className="
      min-h-screen
      bg-black sticky
      top-0 flex items-center
      px-8 py-16 shadow-xl
    "
    style={{
      width: `${sectionWidth}%`,
      left: `${sectionLeft}%`,
      marginTop: `${index * 90}vh`,
      zIndex: 10 + index * 10,
    }}
  >
    <div
      className={`
        max-w-6xl mx-auto
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      <h2 className="section-heading">About Me</h2>
      <div className="grid grid-cols-1 tablet-lg:grid-cols-2 gap-12 items-center">
        <div
          className="
          w-full
          max-w-[200px] xs:max-w-[250px]
          tablet-sm:max-w-[300px]
          tablet-md:max-w-[350px]
          tablet-lg:max-w-[500px]
          aspect-square overflow-hidden
          rounded-2xl shadow-2xl
          mx-auto tablet-lg:mx-0
        "
        >
          <img
            src="src/shubhank-graduation.jpeg"
            alt="Shubhank Tyagi"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="space-y-6">
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
