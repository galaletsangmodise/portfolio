import Image from "next/image";
import Arrow from "@/components/Arrow";
import King from "@/components/King";
import { about, footer, hero, projects, site, steps } from "@/lib/content";

const eyebrow = "text-xs uppercase tracking-[0.2em] text-espresso/80";
const underlineLink =
  "inline-flex items-center gap-2 border-b border-espresso pb-0.5 transition-opacity hover:opacity-60";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d9c8ba] via-[#e6d8cc] to-[#cdb9a9]">
        <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-14">
          <a href="#top" aria-label="Home"><King solid="#1f1917" className="h-9 w-auto" /></a>
          <div className="flex items-center gap-6 text-lg md:gap-10">
            <a href="#about" className="hover:opacity-60">About</a>
            <a href="#projects" className="hover:opacity-60">Projects</a>
            <a href="#contact" className="hover:opacity-60">Contact</a>
          </div>
        </nav>

        <div id="top" className="relative z-10 grid gap-10 px-6 pb-40 pt-10 md:grid-cols-2 md:px-14 md:pt-16">
          <div className="flex flex-col justify-center">
            <p className={eyebrow}>{hero.eyebrow}</p>
            <div className="mt-3 h-px w-48 bg-espresso/30" />
            <h1 className="mt-8 font-display text-[clamp(3.5rem,9vw,7.5rem)] font-light leading-[0.95] tracking-tight">
              {hero.lines.map((l) => (<span key={l} className="block">{l}</span>))}
              <em className="block font-light">{hero.italic}</em>
            </h1>
            <a href="#projects" className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-espresso px-7 py-3.5 text-cream transition-opacity hover:opacity-85">
              {hero.cta} <Arrow />
            </a>
          </div>

          <div className="mx-auto flex aspect-[3/4] w-full max-w-[420px] items-end justify-center overflow-hidden rounded-t-full bg-gradient-to-b from-[#6a584b] to-[#3b2f28] pb-8">
            <King className="h-[88%] w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]" />
          </div>
        </div>

        <div className="floor pointer-events-none absolute -bottom-12 left-[-20%] right-[-20%] h-72" />
      </section>

      {/* About */}
      <section id="about" className="grid gap-10 bg-sand px-6 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,0.7fr)] md:items-center md:gap-14 md:px-14">
        <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-t-full">
          <Image
            src="/images/portrait.png"
            alt={`Portrait of ${site.name}`}
            width={1145}
            height={1374}
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>

        <div>
          <div className="flex items-center gap-4">
            <p className={eyebrow}>{about.label}</p>
            <span className="h-px w-24 bg-espresso/25" />
          </div>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] md:text-6xl">
            {about.heading.map((l) => (<span key={l} className="block">{l}</span>))}
          </h2>
          <p className="mt-6 max-w-md text-lg">{about.body}</p>
          <a href="#contact" className={`${underlineLink} mt-8`}>{about.cta} <Arrow /></a>
        </div>

        <ol className="space-y-8 md:border-l md:border-espresso/15 md:pl-10">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="font-display text-lg text-clay">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-3xl font-normal leading-tight">{s.title}</h3>
              <p className="text-base text-espresso/80">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-cream px-6 py-16 md:px-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.6fr)_minmax(0,2fr)] md:items-center">
          <div>
            <div className="flex items-center gap-4">
              <p className={eyebrow}>Projects</p>
              <span className="h-px w-20 bg-espresso/25" />
            </div>
            <h2 className="mt-6 font-display text-6xl font-light leading-[1.02]">
              Selected <em>Work.</em>
            </h2>
            <a href="#" className={`${underlineLink} mt-8 text-base`}>View all projects <Arrow /></a>
          </div>

          <ul className="grid grid-cols-2 gap-3 md:grid-cols-[1.3fr_1.15fr_0.8fr_1fr] md:gap-4">
            {projects.map((p) => (
              <li key={p.title}>
                <a href={p.href} className="group relative block aspect-[3/4] overflow-hidden bg-taupe md:aspect-[3/4.3]">
                  {p.image ? (
                    <Image src={p.image} alt={p.title} fill sizes="(min-width: 768px) 20vw, 50vw" className="object-cover" />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-b ${p.tone}`} />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/70 to-transparent p-4 text-cream">
                    <p className="font-display text-xl leading-tight">{p.title}</p>
                    <p className="text-sm opacity-80">{p.tag}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-espresso px-6 py-10 text-cream md:px-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <King solid="#f3ebe4" className="h-10 w-auto shrink-0" />
            <p className="text-lg text-cream/80">{footer.line}</p>
          </div>
          <div className="flex items-center gap-8">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 border-b border-cream/60 pb-0.5 hover:opacity-70">
              {footer.cta} <Arrow />
            </a>
            <a href={site.github} className="hover:opacity-70">GitHub</a>
            <a href={site.linkedin} className="hover:opacity-70">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
