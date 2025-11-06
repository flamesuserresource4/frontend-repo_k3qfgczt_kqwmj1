import { Rocket, Cpu, Bot } from 'lucide-react';

const projects = [
  {
    icon: Rocket,
    title: 'RAG Knowledge Assistant',
    desc: 'Production-grade RAG pipeline with embeddings, hybrid search, and real-time citations.',
    tags: ['LLM', 'RAG', 'Vector DB', 'FastAPI'],
  },
  {
    icon: Cpu,
    title: 'Vision Inference Service',
    desc: 'ONNX/TensorRT optimized models serving at 30ms p95 with autoscaling.',
    tags: ['CV', 'ONNX', 'Triton', 'K8s'],
  },
  {
    icon: Bot,
    title: 'Voice Agent Platform',
    desc: 'Streaming ASR + LLM orchestration + TTS for natural conversational agents.',
    tags: ['ASR', 'LLM', 'TTS', 'WebRTC'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Selected Projects</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          A few highlights showing real-world AI impact.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-600/10 p-2 text-purple-700">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-slate-50 px-2.5 py-1 text-xs text-slate-700 ring-1 ring-inset ring-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
