import { useRef, useEffect, useState } from "react";

type Props = {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
};

export default function FadingVideo({ src, className, style }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [idx, setIdx] = useState(0);
  const sources = Array.isArray(src) ? src : [src];
  const current = sources[idx % sources.length];

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.style.opacity = "0";
    const onLoaded = () => {
      let op = 0;
      const dur = 500;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        op = t;
        if (v) v.style.opacity = String(op);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const onTimeUpdate = () => {
      if (!v.duration || v.duration === Infinity) return;
      const remain = v.duration - v.currentTime;
      if (remain <= 0.55 && remain > 0) {
        const prog = 1 - remain / 0.55;
        v.style.opacity = String(1 - prog);
      }
    };
    const onEnded = () => {
      if (sources.length === 1) {
        v.currentTime = 0;
        v.play().catch(() => {});
        let op = 0;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 500);
          op = t;
          if (v) v.style.opacity = String(op);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      } else {
        setIdx((i) => (i + 1) % sources.length);
      }
    };
    v.addEventListener("loadeddata", onLoaded);
    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("loadeddata", onLoaded);
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("ended", onEnded);
    };
  }, [sources.length, idx]);

  return (
    <video
      ref={ref}
      src={current}
      className={className}
      style={{ opacity: 0, transition: "opacity 0.15s", ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
}
