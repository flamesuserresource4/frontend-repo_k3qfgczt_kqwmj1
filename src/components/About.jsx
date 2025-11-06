export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Hi, I’m an AI Engineer</h2>
          <p className="mt-4 text-slate-600">
            I build machine learning solutions that power real products: recommendation engines, NLP pipelines,
            computer vision services, and LLM-based assistants. I care about measurable impact, fast iteration,
            and clean architecture.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• LLM apps: RAG, function calling, tool-use, evals</li>
            <li>• MLOps: data versioning, CI/CD, monitoring, A/B testing</li>
            <li>• Deployment: FastAPI, Triton/ONNX, vector DBs</li>
            <li>• Cloud: AWS/GCP, Docker, Kubernetes</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Skill Snapshot</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <span className="rounded-md bg-slate-50 px-3 py-2">Python</span>
            <span className="rounded-md bg-slate-50 px-3 py-2">FastAPI</span>
            <span className="rounded-md bg-slate-50 px-3 py-2">PyTorch</span>
            <span className="rounded-md bg-slate-50 px-3 py-2">TensorFlow</span>
            <span className="rounded-md bg-slate-50 px-3 py-2">LangChain</span>
            <span className="rounded-md bg-slate-50 px-3 py-2">OpenAI</span>
            <span className="rounded-md bg-slate-50 px-3 py-2">Vector DBs</span>
            <span className="rounded-md bg-slate-50 px-3 py-2">MLOps</span>
            <span className="rounded-md bg-slate-50 px-3 py-2">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}
