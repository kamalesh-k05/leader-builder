import { useEffect, useState } from "react";

export default function CookieConsent({ onAccept }: { onAccept: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const v = localStorage.getItem("nf_consent");
    if (!v) {
      // delay so hero renders clean first — not spoiling the first paint
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    } else if (v === "accepted") onAccept();
  }, [onAccept]);

  if (!visible) return null;
  return (
    <div role="dialog" aria-label="Cookie consent" className="fixed bottom-6 right-6 left-auto w-[86%] md:w-[360px] z-50 liquid-glass rounded-[1rem] p-4 flex flex-col gap-3 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="text-sm font-medium leading-none">Cookies — your choice</div>
      <p className="text-xs text-white/60 font-light leading-relaxed">Analytics only after you accept. Essential preference is stored locally. See <a href="/privacy" className="underline decoration-white/30">Privacy</a>.</p>
      <div className="flex gap-2">
        <button onClick={() => { localStorage.setItem("nf_consent", "accepted"); setVisible(false); onAccept(); }} className="flex-1 bg-white text-black rounded-full py-2 text-sm font-medium">Accept</button>
        <button onClick={() => { localStorage.setItem("nf_consent", "declined"); setVisible(false); }} className="flex-1 liquid-glass rounded-full py-2 text-sm font-medium">Decline</button>
      </div>
    </div>
  );
}
