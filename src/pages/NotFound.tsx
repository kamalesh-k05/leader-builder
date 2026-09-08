export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white grid place-items-center px-8 py-24">
      <div className="text-center max-w-lg">
        <div className="liquid-glass rounded-full px-3 py-1 text-xs tracking-[0.14em] uppercase inline-block">404 — Not Found</div>
        <h1 className="font-heading italic text-6xl tracking-tight mt-6">This maison is not built yet.</h1>
        <p className="text-sm text-white/60 font-light mt-4">The page you sought does not exist. Return to the atelier.</p>
        <a href="/" className="mt-8 inline-flex bg-white text-black rounded-full px-6 py-3 text-sm font-medium">Back to Atelier →</a>
      </div>
    </div>
  );
}
