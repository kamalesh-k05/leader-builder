import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BlurText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const words = text.split(" ");
  return (
    <div ref={ref} className={className} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", rowGap: "0.1em" }}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {w}
        </motion.span>
      ))}
    </div>
  );
}
