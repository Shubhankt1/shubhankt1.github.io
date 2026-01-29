import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <div className="background-grid" />
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-8 px-4 border-t border-white/10 bg-[#1a1a2e]">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Shubhank Tyagi. All rights reserved.
        </p>
      </footer>
    </>
  )
}
