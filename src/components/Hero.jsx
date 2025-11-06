import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="mb-4 inline-flex items-center rounded-full bg-purple-600/10 px-3 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20">
          AI Engineer Portfolio
        </span>
        <h1 className="font-display bg-gradient-to-br from-purple-700 via-blue-700 to-amber-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Building intelligent products with ML, LLMs, and delightful UX
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          I design, train, and ship AI systems — from data to deployment — with a focus on
          generative AI, MLOps, and real-time inference.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="rounded-lg bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
            View Projects
          </a>
          <a href="#contact" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
