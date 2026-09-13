export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white px-8 md:px-16 lg:px-20 py-24">
      <div className="max-w-3xl mx-auto">
        <a href="/leader-builder/" className="text-xs tracking-[0.14em] uppercase text-white/60 hover:text-white">← Back to Leader Builder</a>
        <h1 className="font-heading italic text-5xl tracking-tight mt-6">Privacy Policy</h1>
        <p className="text-sm text-white/50 mt-2">Last updated: 8 Sep 2026 — Leader Builder, Chennai & Dubai</p>
        <div className="mt-8 space-y-6 text-sm font-light leading-relaxed text-white/80">
          <p>Leader Builder (“we”, “us”) respects your privacy. This policy explains what we collect when you request a private consultation, browse maisons, or watch atelier films.</p>
          <h2 className="font-heading italic text-2xl text-white mt-8">What we collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Contact details you submit (name, phone, plot location, message).</li>
            <li>Analytics with consent: page views, device, approximate location — never sold.</li>
            <li>Cookies: only essential + analytics after you accept the banner.</li>
          </ul>
          <h2 className="font-heading italic text-2xl text-white mt-8">How we use it</h2>
          <p>To schedule a site visit, send BOQ/updates, and improve the atelier experience. We do not share your data with contractors or brokers.</p>
          <h2 className="font-heading italic text-2xl text-white mt-8">Your rights</h2>
          <p>Email <a href="mailto:hello@leaderbuilder.example" className="underline decoration-white/30">hello@leaderbuilder.example</a> to access, correct, or delete your data. We retain consultation records for 24 months unless you ask to delete sooner.</p>
          <h2 className="font-heading italic text-2xl text-white mt-8">Contact</h2>
          <p>Leader Builder, 12/4 OMR, Chennai 600041 — +91 98765 43210.</p>
        </div>
      </div>
    </div>
  );
}
