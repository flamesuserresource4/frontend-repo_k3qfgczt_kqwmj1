export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let’s build something</h2>
        <p className="mt-2 text-slate-600">Interested in collaborating or hiring? Reach out and I’ll get back to you.</p>
        <form
          className="mt-8 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            if (form && 'reset' in form) {
              form.reset();
            }
            alert("Thanks! I'll be in touch soon.");
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input required type="text" name="name" placeholder="Name" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-slate-200 focus:border-slate-400 focus:ring" />
            <input required type="email" name="email" placeholder="Email" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-slate-200 focus:border-slate-400 focus:ring" />
          </div>
          <input type="text" name="subject" placeholder="Subject" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-slate-200 focus:border-slate-400 focus:ring" />
          <textarea required name="message" placeholder="Message" rows={5} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-slate-200 focus:border-slate-400 focus:ring" />
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Or email me at: <span className="font-medium text-slate-700">you@domain.com</span></p>
            <button type="submit" className="rounded-lg bg-purple-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-purple-700">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
