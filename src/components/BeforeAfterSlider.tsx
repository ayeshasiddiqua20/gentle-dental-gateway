import { useCallback, useRef, useState } from "react";

import beforeSmile from "@/assets/before-smile.jpg";
import afterSmile from "@/assets/after-smile.jpg";

export function BeforeAfterSlider({ label }: { label: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[420px] w-full select-none overflow-hidden rounded-3xl lg:h-full"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      <img
        src={afterSmile}
        alt="Patient smile after Invisalign treatment"
        loading="lazy"
        width={1088}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSmile}
          alt="Patient smile before Invisalign treatment"
          loading="lazy"
          width={1088}
          height={1088}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      <div
        className="absolute inset-y-0 w-px bg-white/80"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      />
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={`Compare before and after: ${label}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
      <div
        className="pointer-events-none absolute top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xs text-teal shadow-md"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        ⇄
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-teal/85 px-3 py-1 text-[11px] font-semibold text-cream">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-coral px-3 py-1 text-[11px] font-semibold text-cream">
        After
      </span>
      <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-teal-dark">
        {label}
      </span>
    </div>
  );
}
