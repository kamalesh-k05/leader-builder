import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import FadingVideo from "./components/FadingVideo";
import BlurText from "./components/BlurText";
import { ArrowUpRight, Play, ClockIcon, GlobeIcon, ImageIcon, MovieIcon, LightbulbIcon } from "./components/Icons";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import FAQ from "./components/FAQ";
import CookieConsent from "./components/CookieConsent";

const heroVideo = `${import.meta.env.BASE_URL}hero.mp4`;
const capVideo = `${import.meta.env.BASE_URL}atelier.mp4`;

function Home() {
  const easeOut = { filter: "blur(0px)", opacity: 1, y: 0 } as const;
  const init = { filter: "blur(10px)", opacity: 0, y: 20 } as const;
  const [analyticsLoaded, setAnalyticsLoaded] = useState(false);
  const loadAnalytics = () => {
    if (analyticsLoaded) return;
    // Placeholder analytics — only after consent (e.g., Plausible/GA4)
    // Example: inject <script src="https://plausible.io/js/script.js" data-domain="northform-atelier.vercel.app">
    console.log("Analytics enabled after consent");
    setAnalyticsLoaded(true);
  };
  useEffect(() => {
    if (localStorage.getItem("nf_consent") === "accepted") loadAnalytics();
  }, []);

  return (
    <div className="bg-black text-white font-body overflow-x-hidden">
      <CookieConsent onAccept={loadAnalytics} />
      {/* HERO — 1/6 Cinematic atelier */}
      <section className="min-h-screen overflow-hidden bg-black relative flex flex-col">
        <FadingVideo src={heroVideo} className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0" style={{ width: "120%", height: "120%" } as React.CSSProperties} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/85 z-0" />
        <div className="relative z-10 flex flex-col flex-1 min-h-screen">
          <nav className="fixed top-4 left-0 right-0 z-50 flex justify-between items-center px-8 lg:px-16">
            <div className="liquid-glass h-12 w-12 rounded-full grid place-items-center"><span className="font-heading text-2xl italic">L</span></div>
            <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
              <a href="#work" className="px-3 py-2 text-sm font-medium text-white/90">Maisons</a>
              <a href="#atelier" className="px-3 py-2 text-sm font-medium text-white/90">Atelier</a>
              <a href="#materiaux" className="px-3 py-2 text-sm font-medium text-white/90">Materials</a>
              <a href="#contact" className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium inline-flex items-center gap-2">Private Consultation <ArrowUpRight className="h-4 w-4" /></a>
            </div>
            <div className="h-12 w-12" />
          </nav>
          <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
            <div className="mt-6 max-w-3xl">
              <BlurText text="Houses that outlive us, built with quiet precision." className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]" />
            </div>
            <motion.p initial={init} animate={easeOut} transition={{ duration: 0.8, delay: 0.8 }} className="text-sm md:text-base text-white/90 max-w-2xl font-body font-light leading-tight mt-4">
              Leader Builder is a private construction studio — not a contractor. Travertine, bronze and oak. One site, one engineer, daily supervision, and a 12-year stewardship.
            </motion.p>
            <motion.div initial={init} animate={easeOut} transition={{ duration: 0.8, delay: 1.1 }} className="mt-6 flex gap-6 items-center flex-wrap justify-center">
              <a href="#contact" className="liquid-glass-strong rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-sm font-medium">Private Consultation <ArrowUpRight className="h-4 w-4" /></a>
              <a className="inline-flex items-center gap-2 text-sm text-white/90"><span className="h-8 w-8 rounded-full bg-white/10 grid place-items-center"><Play className="h-3 w-3" /></span> Watch Atelier Film</a>
            </motion.div>
            <motion.div initial={init} animate={easeOut} transition={{ duration: 0.8, delay: 1.3 }} className="mt-8 flex gap-4 flex-wrap justify-center">
              <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
                <ClockIcon className="h-5 w-5 text-white/80" />
                <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">18 mo</div>
                <div className="text-xs text-white/70 font-light leading-tight mt-1">Average atelier build — soil to stewardship</div>
              </div>
              <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
                <GlobeIcon className="h-5 w-5 text-white/80" />
                <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">240+</div>
                <div className="text-xs text-white/70 font-light leading-tight mt-1">Houses and ateliers across South India</div>
              </div>
            </motion.div>
          </div>
          <motion.div initial={init} animate={easeOut} transition={{ duration: 0.8, delay: 1.4 }} className="flex flex-col items-center gap-3 pb-6 lg:pb-8 px-4 mt-auto pt-6 shrink-0">
            <div className="liquid-glass rounded-full px-4 py-2 text-xs text-white/90 border border-white/15 bg-white/[0.06]">Trusted by owners who stay — not flippers</div>
            <div className="flex gap-8 md:gap-12 lg:gap-16 flex-wrap justify-center">
              {["Anahata", "Northgate", "SIPCOT", "Besant", "Vela"].map((n) => (
                <span key={n} className="font-heading italic text-xl md:text-2xl lg:text-3xl tracking-tight text-white">{n}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP — 2/6 proof fast, liquid glass */}
      <section className="relative bg-black border-y border-white/10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { n: "18", s: "yrs", l: "Atelier since 2008", sub: "One house at a time" },
            { n: "240+", s: "", l: "Houses delivered", sub: "Homes, ateliers, maisons" },
            { n: "96", s: "%", l: "On-time handover", sub: "Last 5 years · audited" },
            { n: "12", s: " yrs", l: "Stewardship", sub: "After handover care" },
          ].map((x) => (
            <div key={x.l} className="p-6 md:p-7">
              <div className="font-heading italic text-4xl tracking-tight leading-none">{x.n}<span className="text-[#E8D9B0] text-2xl">{x.s}</span></div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-white/60 mt-2">{x.l}</div>
              <div className="text-xs text-white/40 mt-1">{x.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES — 3/6 (kept from prompt, customized) */}
      <section id="atelier" className="min-h-screen overflow-hidden bg-black relative">
        <FadingVideo src={capVideo} className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
          <div className="mb-auto">
            <div className="text-sm font-body text-white/70 mb-6">// Capabilities</div>
            <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">Atelier craft,<br />end to end</h2>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <ImageIcon />, title: "Design", tags: ["Measured Drawings", "BOQ Clarity", "Soil Study", "Light Studies"], body: "We shape houses that age well — travertine, bronze, oak. Drawings you can build from, checked at every pour." },
              { icon: <MovieIcon />, title: "Build", tags: ["Daily Supervision", "IS Codes", "Weekly Film", "QA Log"], body: "One atelier, one site. The same engineer from soil to brass handle. Production-grade, not improvisation." },
              { icon: <LightbulbIcon />, title: "Stewardship", tags: ["12-Year Care", "As-Built Dossier", "Snag Closure", "Brass Plaque"], body: "Handover is not the end. We steward — 48-hour return, seasonal checks, and a number that still answers." },
            ].map((c) => (
              <div key={c.title} className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
                <div className="flex justify-between items-start gap-4">
                  <div className="liquid-glass h-11 w-11 rounded-[0.75rem] grid place-items-center">{c.icon}</div>
                  <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
                    {c.tags.map((t) => (
                      <span key={t} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 whitespace-nowrap">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-1" />
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none">{c.title}</h3>
                <p className="text-sm text-white/85 font-light leading-snug max-w-[32ch] mt-3">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — 4/6 pinned timeline, liquid glass cards */}
      <section className="bg-black border-t border-white/10 py-16 px-8 md:px-16 lg:px-20">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-[380px_1fr] gap-10">
          <div className="md:sticky md:top-24 h-fit">
            <div className="text-xs tracking-[0.18em] uppercase text-[#E8D9B0]">How we work — atelier</div>
            <h2 className="font-heading italic text-5xl leading-[0.9] tracking-[-2px] mt-3">From blueprint<br />to brass handle.</h2>
            <p className="text-sm text-white/60 font-light leading-relaxed mt-4 max-w-sm">Four stages, one custodian. Scroll is the crane — the same discipline that frames the concrete frames the schedule.</p>
            <div className="mt-8 space-y-4 border-l border-white/10 pl-6 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#E8D9B0]/40" />
              {[
                { n: "01", t: "Site & Soil Study", d: "Topography, bearing, water table — measured before a line is drawn.", meta: "2–4 days · Report + photos" },
                { n: "02", t: "Drawings, BOQ & Quote", d: "Measured drawings + itemised BOQ you can verify line by line.", meta: "10–14 days · Drawings + BOQ" },
                { n: "03", t: "Atelier Build + QA", d: "Daily engineer, weekly film, IS-code tests, QA log you actually receive.", meta: "Build duration · Weekly film" },
                { n: "04", t: "Handover & Stewardship", d: "As-built dossier, brass plaque, 12-year stewardship begins.", meta: "Handover + 12 yrs" },
              ].map((s) => (
                <div key={s.n} className="py-3">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-[#E8D9B0]">{s.n}</div>
                  <div className="font-heading italic text-xl leading-none mt-1">{s.t}</div>
                  <div className="text-xs text-white/60 font-light mt-1">{s.d}</div>
                  <div className="text-[10px] tracking-[0.12em] uppercase text-white/35 mt-1">{s.meta}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              { img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f6?q=80&w=800&auto=format&fit=crop", k: "Stage 01 — Survey", h: "We measure before we promise.", p: "Total station + soil lab report. Setbacks and drainage mapped, not assumed.", alt: "Surveyors measuring topography with total station on construction site" },
              { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop", k: "Stage 02 — Drawings", h: "Drawings you can build from.", p: "Coordinated architectural + structural + MEP, 120+ line BOQ.", alt: "Architect reviewing blueprints and BOQ drawings at desk" },
              { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", k: "Stage 03 — Atelier", h: "Supervision is the product.", p: "One engineer, one site. QA at slab/beam/plaster, weekly drone film.", alt: "Construction site supervision with concrete structure and scaffolding" },
              { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", k: "Stage 04 — Stewardship", h: "Keys, dossier, and a promise.", p: "As-builts, warranties, brass plaque — then we return at 3, 6, 12 months.", alt: "Completed luxury villa handover with keys and dossier" },
            ].map((c) => (
              <div key={c.k} className="liquid-glass rounded-[1.1rem] overflow-hidden grid md:grid-cols-[1.15fr_0.9fr]">
                <img src={c.img} alt={c.alt} loading="lazy" decoding="async" className="h-[220px] md:h-auto object-cover w-full" />
                <div className="p-6 flex flex-col justify-center">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-[#E8D9B0]">{c.k}</div>
                  <div className="font-heading italic text-2xl leading-none mt-2">{c.h}</div>
                  <div className="text-xs text-white/65 font-light mt-2">{c.p}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK — 5/6 liquid glass project cards */}
      <section id="work" className="bg-black border-t border-white/10 py-16 px-8 md:px-16 lg:px-20">
        <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between items-end gap-6 mb-8">
          <div>
            <div className="text-xs tracking-[0.16em] uppercase text-[#E8D9B0]">Selected work — evidence</div>
            <h2 className="font-heading italic text-5xl md:text-6xl leading-[0.9] tracking-[-2px] mt-2">Things we<br />have built.</h2>
          </div>
          <div className="text-xs text-white/50 font-light max-w-sm">Real houses, not renders. Each with a logbook you can audit. Scroll →</div>
        </div>
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop", tag: "Residential · 2024", h: "Villa Anahata — ECR", m: "4,200 sq ft · Chennai", p: "Coastal villa — exposed concrete, courtyard, cross ventilation. 11 months." },
            { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop", tag: "Atelier · 2023", h: "Northgate — Guindy", m: "18,000 sq ft · Chennai", p: "G+4 atelier block — post-tensioned slabs, brass veil." },
            { img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop", tag: "Industrial · 2023", h: "Precision Unit — SIPCOT", m: "32,000 sq ft · Hosur", p: "PEB + RCC hybrid — EOT crane, epoxy, QA pours." },
            { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop", tag: "Maison · 2022", h: "Terrace House — Besant", m: "2,800 sq ft · Chennai", p: "Retrofit — terracotta jaali, low-heat interiors." },
          ].map((c) => (
            <div key={c.h} className="liquid-glass rounded-[1.1rem] overflow-hidden group">
              <div className="h-[220px] overflow-hidden relative">
                <img src={c.img} alt={c.h + " — " + c.m} loading="lazy" decoding="async" className="h-full w-full object-cover group-hover:scale-[1.04] transition duration-700" />
                <span className="absolute top-3 left-3 liquid-glass rounded-full px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase">{c.tag}</span>
              </div>
              <div className="p-4">
                <div className="font-heading italic text-lg leading-none">{c.h}</div>
                <div className="text-[11px] text-white/45 mt-1">{c.m}</div>
                <div className="text-xs text-white/65 font-light leading-relaxed mt-2">{c.p}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CRAFT — 6/6 split + testimonial */}
      <section id="materiaux" className="bg-black border-t border-white/10 py-16 px-8 md:px-16 lg:px-20">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="liquid-glass rounded-[1.1rem] overflow-hidden relative h-[520px]">
            <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=900&auto=format&fit=crop" alt="Close-up of concrete and bronze detailing poured on site" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 liquid-glass rounded-full px-4 py-3 flex justify-between items-center">
              <span className="font-heading italic">Slab QA — Pour #14 · Level 02</span>
              <span className="text-[10px] tracking-[0.12em] uppercase text-white/60">Photo log 12 Mar 2024</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-xs tracking-[0.16em] uppercase text-[#E8D9B0]">Craft & Materials</div>
            <h2 className="font-heading italic text-5xl leading-[0.9] tracking-[-2px] mt-2">Concrete doesn’t<br />lie. Neither do we.</h2>
            <p className="text-sm text-white/65 font-light leading-relaxed mt-4">Every stage has a checklist, a photo, and a signature. Ask for any pour record and get it in an hour.</p>
            <div className="mt-6 space-y-3">
              {[
                ["Materials tested", "Cement, steel, aggregates per IS codes. Reports with each bill."],
                ["Supervision daily", "Site engineer + supervisor — not ‘visit when free’."],
                ["Safety every morning", "Toolbox talk, harnesses, barricades — audited."],
                ["Film you receive", "Weekly single-take film + progress vs plan."],
              ].map(([h, p]) => (
                <div key={h} className="liquid-glass rounded-[0.9rem] px-4 py-3 flex gap-3">
                  <span className="h-7 w-7 rounded-full bg-white text-black grid place-items-center text-xs shrink-0">✓</span>
                  <div><div className="font-heading italic text-base leading-none">{h}</div><div className="text-xs text-white/60 font-light mt-1">{p}</div></div>
                </div>
              ))}
            </div>
            <div className="mt-8 liquid-glass rounded-[1rem] p-6 text-center">
              <div className="font-heading italic text-2xl leading-tight">“Finished three weeks early — the BOQ matched the final bill to within 2%.”</div>
              <div className="text-xs text-white/60 mt-2">R. Karthik — Precision Components, Hosur · 32,000 sq ft · 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — dark liquid glass — clear primary CTA per viewport */}
      <section id="contact" className="bg-black border-t border-white/10 py-16 px-8 md:px-16 lg:px-20">
        <div className="max-w-[1280px] mx-auto liquid-glass-strong rounded-[1.25rem] p-8 md:p-10 grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-xs tracking-[0.16em] uppercase text-[#E8D9B0]">Start your maison</div>
            <h2 className="font-heading italic text-5xl leading-[0.9] tracking-[-2px] mt-2">Let’s put<br />a date on it.</h2>
            <p className="text-sm text-white/65 font-light mt-3 max-w-md">One site visit, measured BOQ, and a timeline you can hold us to. One primary action — private consultation.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="liquid-glass rounded-[0.9rem] p-4"><div className="text-[10px] tracking-[0.12em] uppercase text-white/50">Call</div><div className="font-heading italic text-lg">+91 98765 43210</div></div>
              <div className="liquid-glass rounded-[0.9rem] p-4"><div className="text-[10px] tracking-[0.12em] uppercase text-white/50">WhatsApp</div><div className="font-heading italic text-lg">Chat now</div></div>
            </div>
          </div>
          <form className="liquid-glass rounded-[1rem] p-6 space-y-3" onSubmit={(e) => { const f=e.target as HTMLFormElement; if(!f.checkValidity()){ f.reportValidity(); return; } e.preventDefault(); (e.target as HTMLFormElement).reset(); alert("Request sent — we’ll call within 24 hrs."); }} noValidate>
            <div className="font-heading italic text-xl">Request a Private Visit</div>
            <div className="grid grid-cols-2 gap-3">
              <label className="sr-only" htmlFor="nf-name">Your name</label>
              <input id="nf-name" placeholder="Your name" required aria-label="Your name" className="bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm outline-none focus:border-[#E8D9B0]/40 focus-visible:ring-2 focus-visible:ring-[#E8D9B0]/40" />
              <label className="sr-only" htmlFor="nf-phone">Phone</label>
              <input id="nf-phone" placeholder="+91 —" required aria-label="Phone" pattern="[0-9+\-\s]{8,20}" className="bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm outline-none focus:border-[#E8D9B0]/40" />
            </div>
            <label className="sr-only" htmlFor="nf-loc">Plot location</label>
            <input id="nf-loc" placeholder="Plot / site location — e.g. ECR, Chennai" required aria-label="Plot location" className="bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm w-full outline-none focus:border-[#E8D9B0]/40" />
            <label className="sr-only" htmlFor="nf-msg">Message</label>
            <textarea id="nf-msg" placeholder="Plot size, floors, timeline" rows={3} aria-label="Message" className="bg-white/5 border border-white/10 rounded-[1rem] px-4 py-2.5 text-sm w-full outline-none focus:border-[#E8D9B0]/40" />
            <button type="submit" className="w-full bg-white text-black rounded-full py-3 text-sm font-medium inline-flex justify-center items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">Request Private Visit <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button>
            <div className="text-[10px] tracking-[0.06em] text-white/40 text-center">By submitting you agree to a callback & site visit. No spam.</div>
          </form>
        </div>
        <div className="max-w-[1280px] mx-auto flex justify-between flex-wrap gap-4 text-[10px] tracking-[0.1em] uppercase text-white/30 mt-8">
          <span>© 2026 Leader Builder · Private — <a href="/northform-atelier/privacy" className="underline">Privacy</a> · <a href="/northform-atelier/terms" className="underline">Terms</a></span>
          <span>Instrument Serif + Barlow · Liquid Glass · Bronze on Black</span>
        </div>
      </section>

      <FAQ />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/northform-atelier">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
