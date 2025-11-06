import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold">AI Engineer</a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#about" className="text-slate-700 hover:text-slate-900">About</a>
            <a href="#projects" className="text-slate-700 hover:text-slate-900">Projects</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-500">
          © {new Date().getFullYear()} AI Engineer Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
