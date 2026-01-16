import { ArrowRight, Sparkles, Shield, Cpu, Mail } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Production-grade AI",
    desc: "RAG, agents, evals, and real deployments—not demos.",
  },
  {
    icon: Shield,
    title: "Security-first",
    desc: "Privacy-by-design, adversarial thinking, strict guardrails.",
  },
  {
    icon: Sparkles,
    title: "Minimal + poetic",
    desc: "Hardcore engineering with clean aesthetics and clarity.",
  },
];

const work = [
  {
    title: "RAG Systems",
    points: ["Hybrid retrieval", "Metadata filtering", "Eval harness + telemetry"],
  },
  {
    title: "Agent Orchestration",
    points: ["Tooling + workflows", "Quality gates", "Cost/latency optimization"],
  },
  {
    title: "AI Products",
    points: ["MVP → v1", "User-centric design", "Reliable release cadence"],
  },
];

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Background />
      <Header />

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-sm text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sentientverse AI — studio for real systems
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Hardcore AI,
              <span className="block text-zinc-300">minimal aesthetics.</span>
              <span className="block text-zinc-400">Built to ship.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-zinc-300">
              We build evidence-based AI products: RAG, agent workflows, eval-driven
              reliability, and secure APIs—designed for production from day one.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white"
              >
                Start a project <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-900"
              >
                See capabilities
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-zinc-400">
              <span className="rounded-full border border-zinc-800 bg-zinc-900/30 px-3 py-1">
                RAG
              </span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/30 px-3 py-1">
                Agents
              </span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/30 px-3 py-1">
                Evals
              </span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/30 px-3 py-1">
                Security
              </span>
            </div>
          </div>

          <div className="md:justify-self-end">
            <HeroCard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14" id="features">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-3">
                  <Icon className="h-5 w-5 text-zinc-200" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14" id="work">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              What we build
            </h2>
            <p className="mt-2 max-w-2xl text-zinc-300">
              Clear scope. Strong architecture. Measurable outcomes.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {work.map((w) => (
            <div
              key={w.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <h3 className="text-lg font-semibold">{w.title}</h3>
              <ul className="mt-3 space-y-2 text-zinc-300">
                {w.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16" id="contact">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/30 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Let’s build something that survives reality.
              </h2>
              <p className="mt-3 text-zinc-300">
                Send a short brief: problem, data, constraints, timeline. We’ll reply with
                a crisp plan.
              </p>
              <div className="mt-6 space-y-2 text-zinc-300">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">m.econyale@gmail.com</span>
                </div>

                <p className="text-sm text-zinc-400">
                  Founders: <span className="text-zinc-200">K Chandana</span> &{" "}
                  <span className="text-zinc-200">Mithilesh K</span>
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>

        <footer className="mx-auto mt-10 flex max-w-6xl items-center justify-between px-1 text-sm text-zinc-500">
          <span>© {new Date().getFullYear()} Sentientverse AI</span>
          <div className="flex gap-4">
            <a className="hover:text-zinc-300" href="#work">
              Work
            </a>
            <a className="hover:text-zinc-300" href="#features">
              Features
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-6">
      <nav className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm font-semibold tracking-wide">SENTIENTVERSE AI</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-zinc-300 hover:text-white" href="#features">
            Features
          </a>
          <a className="text-sm text-zinc-300 hover:text-white" href="#work">
            Work
          </a>
          <a
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroCard() {
  return (
    <div className="relative rounded-[2rem] border border-zinc-800 bg-zinc-900/30 p-6 md:p-8">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6">
        <p className="text-xs font-semibold tracking-widest text-zinc-400">
          SIGNAL &gt; NOISE
        </p>
        <h3 className="mt-3 text-xl font-semibold">Build specs, not vibes.</h3>
        <p className="mt-2 text-zinc-300">
          Evals. Observability. Cost controls. Robust prompts. Deterministic fallbacks.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <Stat label="Latency" value="Low" />
          <Stat label="Reliability" value="High" />
          <Stat label="Security" value="Strict" />
          <Stat label="Shipping" value="Fast" />
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-0.5 rounded-[2rem] bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent blur-2xl" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-3">
      <p className="text-xs text-zinc-400">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-6"
      action="https://formspree.io/f/yourFormId"
      method="POST"
    >
      <div className="grid gap-4">
        <div>
          <label className="text-xs text-zinc-400">Name</label>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-zinc-600"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-xs text-zinc-400">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-zinc-600"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label className="text-xs text-zinc-400">Message</label>
          <textarea
            name="message"
            required
            rows={4}
            className="mt-2 w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-zinc-600"
            placeholder="What are you building? What’s the constraint?"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-2xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-white"
        >
          Send
        </button>

        <p className="text-xs text-zinc-500">
          Replace the Formspree URL with your own, or wire to an API route.
        </p>
      </div>
    </form>
  );
}

function Background() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:64px_64px]" />
    </>
  );
}
