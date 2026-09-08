import { useState } from "react";

const faqs = [
  { q: "How is the BOQ different from a contractor quote?", a: "It’s itemised line by line — cement bags, steel kg, makes and rates — so you can verify every line before we start. Changes are written variations, never verbal." },
  { q: "Do you take multiple sites at once?", a: "No. One atelier, one site. The same engineer from soil to brass handle — daily supervision, not weekly visits." },
  { q: "What does 12-year stewardship mean?", a: "After handover we remain custodians: as-built dossier, brass plaque, seasonal checks, and a 48-hour return promise — written." },
  { q: "How fast is the private consultation?", a: "We reply within 24 hours and visit within 48 hours in Chennai. Dubai by appointment." },
  { q: "What about delays and cost overruns?", a: "Gantt-tracked, weekly film + progress %, variance logged. Last 5 years: 96% on-time, avg 1.8% cost variance vs BOQ." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-black border-t border-white/10 py-16 px-8 md:px-16 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-xs tracking-[0.16em] uppercase text-[#E8D9B0]">FAQ — Before you decide</div>
        <h2 className="font-heading italic text-4xl md:text-5xl leading-none tracking-tight mt-3">Questions owners ask.</h2>
        <div className="mt-8 grid gap-3 max-w-3xl">
          {faqs.map((f, i) => (
            <div key={f.q} className="liquid-glass rounded-[1rem] overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-5 py-4 flex justify-between items-center gap-4" aria-expanded={open === i}>
                <span className="text-sm font-medium">{f.q}</span>
                <span className="h-7 w-7 rounded-full bg-white/10 grid place-items-center text-xs shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="px-5 pb-4 text-sm text-white/70 font-light leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
