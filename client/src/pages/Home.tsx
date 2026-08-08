/**
 * Retro Racer — "Manual Insert" design (see ideas.md)
 * Cream paper background, ink black + safety orange print palette.
 * Space Grotesk display / IBM Plex Mono body.
 * The game (client/public/game.html) is embedded in a pixel-crisp phone frame.
 */
import { useEffect, useRef, useState } from "react";

const ORANGE = "#ff5a1f";
const INK = "#1d1a16";

function PixelCar({ color = ORANGE, size = 22 }: { color?: string; size?: number }) {
  const px = size / 8;
  // 8x6 pixel car glyph (body outline + windows)
  const body = [
    [0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 0, 0, 1],
  ];
  return (
    <span
      role="img"
      aria-hidden
      className="inline-block align-middle"
      style={{
        width: 8 * px,
        height: 6 * px,
        background: color,
        display: "inline-block",
        imageRendering: "pixelated",
        boxShadow: `inset ${-px}px ${-px}px 0 rgba(0,0,0,0.4)`,
      }}
    >
      {body.map((row, y) =>
        row.map((v, x) =>
          v ? (
            <span
              key={`${x}-${y}`}
              style={{
                position: "absolute",
                left: x * px,
                top: y * px,
                width: px,
                height: px,
                background: "rgba(243,236,217,0.9)",
              }}
            />
          ) : null,
        ),
      )}
    </span>
  );
}

function DottedRule() {
  return (
    <div
      className="my-10 h-[2px] w-full"
      style={{
        backgroundImage: `repeating-linear-gradient(to right, ${INK} 0, ${INK} 6px, transparent 6px, transparent 14px)`,
        opacity: 0.35,
      }}
    />
  );
}

function StepBox({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-2 flex gap-5 p-6" style={{ borderColor: INK, background: "#faf4e2" }}>
      <div
        className="shrink-0 flex items-center justify-center font-bold"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          width: 44,
          height: 44,
          fontSize: 22,
          background: ORANGE,
          color: "#f3ecd9",
        }}
      >
        {num}
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold uppercase tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#3d372e" }}>
          {children}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 650);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#f3ecd9", color: INK }}>
      {/* subtle paper grain */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* ---------- Header: manual cover ---------- */}
        <header className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: ORANGE }}
            >
              Operator's Manual · Est. 2003 · J2ME · 240×320
            </p>
            <h1
              className="text-5xl font-bold uppercase leading-none sm:text-6xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Retro<span style={{ color: ORANGE }}>Racer</span>
            </h1>
            <p
              className="mt-4 max-w-lg text-sm leading-relaxed"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#3d372e" }}
            >
              J2ME Edition. A fully playable, single-file racing game drawn with
              pure Canvas — no assets, no libraries, just rectangles and speed.
            </p>
          </div>
          <div
            className="border-2 px-5 py-4 text-right"
            style={{ borderColor: INK, background: "#faf4e2" }}
          >
            <p className="text-xs font-semibold uppercase" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Insert coin? No.
            </p>
            <p
              className="mt-1 text-lg font-bold uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: ORANGE }}
            >
              Just press Space.
            </p>
          </div>
        </header>

        {/* ---------- Game + sidebar ---------- */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          {/* Phone frame */}
          <div>
            <div
              className="flex flex-col items-center border-4 p-4 sm:p-6"
              style={{ borderColor: INK, background: INK, boxShadow: "10px 10px 0 rgba(255,90,31,0.25)" }}
            >
              <div className="mb-3 flex w-full items-center justify-between px-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#f3ecd9" }}>
                  RetroRacer · 240×320
                </span>
                <span className="text-[10px] font-semibold" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#8a8274" }}>
                  JAVA™
                </span>
              </div>
              <div
                className="border-4 overflow-hidden"
                style={{ borderColor: "#3a352c", lineHeight: 0 }}
              >
                <iframe
                  ref={iframeRef}
                  src="/game.html"
                  title="Retro Racer J2ME Edition game"
                  style={{
                    width: "min(480px, calc(100vw - 120px))",
                    height: "min(640px, calc((100vw - 120px) * 4 / 3))",
                    border: 0,
                    display: "block",
                    imageRendering: "pixelated",
                  }}
                />
              </div>
              <div className="mt-4 flex w-full items-center justify-between px-1">
                <div className="flex gap-1">
                  {["▲", "▼", "◄", "►"].map((k) => (
                    <span
                      key={k}
                      className="flex h-6 w-6 items-center justify-center border"
                      style={{ borderColor: "#575044", color: "#c9bfa8", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {k}
                    </span>
                  ))}
                </div>
                <span className="text-[10px]" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#8a8274" }}>
                  ◯ OK
                </span>
              </div>
            </div>
            <p
              className="mt-3 text-center text-xs uppercase tracking-widest"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: ORANGE,
                opacity: blink ? 1 : 0.2,
                transition: "opacity 0.2s",
              }}
            >
              ● Press Space inside the screen to start
            </p>
          </div>

          {/* Sidebar: quick controls */}
          <aside>
            <div className="border-2 p-5" style={{ borderColor: INK, background: "#faf4e2" }}>
              <h2
                className="mb-4 text-sm font-bold uppercase tracking-widest"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Keypad Controls
              </h2>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {[
                  ["◄ ►", "Steer — simulates keys 4 / 6"],
                  ["▲", "Accelerate"],
                  ["▼", "Brake"],
                  ["Space", "Start / Continue"],
                ].map(([k, d]) => (
                  <li key={k} className="flex items-baseline gap-3">
                    <span
                      className="inline-block min-w-[64px] border px-2 py-1 text-center text-xs font-bold"
                      style={{ borderColor: INK, background: "#f3ecd9" }}
                    >
                      {k}
                    </span>
                    <span style={{ color: "#3d372e" }}>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t-2 pt-4" style={{ borderColor: "rgba(29,26,22,0.2)" }}>
                <p className="text-xs leading-relaxed" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#3d372e" }}>
                  On touch devices: tap left / right half of the screen to steer.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 border-2 p-4" style={{ borderColor: ORANGE }}>
              <PixelCar />
              <p className="text-xs leading-relaxed" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Dodge the blue &amp; yellow cars.
                <br />
                Every dodge is worth <b>+10</b>.
              </p>
            </div>
          </aside>
        </div>

        <DottedRule />

        {/* ---------- How to play (manual steps) ---------- */}
        <section className="mb-16">
          <h2
            className="mb-8 text-3xl font-bold uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How To Play
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <StepBox num="1." title="Ignite">
              Press <b>Space</b> to start the engine. Your red racer idles at the
              bottom of the track while the world scrolls by.
            </StepBox>
            <StepBox num="2." title="Weave">
              Use the arrow keys to jump between the three lanes. Blue and yellow
              cars stream down from the horizon — faster as you go.
            </StepBox>
            <StepBox num="3." title="Survive">
              Every second on the road adds to your score. One collision ends the
              run. Game over screens are final and glorious.
            </StepBox>
          </div>
        </section>

        {/* ---------- Spec sheet (manual spread) ---------- */}
        <section className="mb-16">
          <h2
            className="mb-8 text-3xl font-bold uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technical Specification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {[
              ["Display", "240 × 320 internal canvas, nearest-neighbor scaling, zero anti-aliasing"],
              ["Palette", "Limited J2ME-era 256-color style; hand-tuned hex values only"],
              ["Typography", "Custom 4×5 bitmap pixel font, drawn pixel-by-pixel in code"],
              ["Physics", "Stiff arcade steering, lane-snapping, forgiving inner hitboxes"],
              ["Dependencies", "None. Single HTML file, vanilla JS, zero external assets"],
              ["Era", "Circa 2003. The age of Java on candybar phones."],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex gap-6 border-b border-r p-5"
                style={{ borderColor: "rgba(29,26,22,0.25)" }}
              >
                <div
                  className="w-28 shrink-0 text-xs font-bold uppercase tracking-widest"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: ORANGE }}
                >
                  {k}
                </div>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#3d372e" }}>
                  {v}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="pb-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="flex items-center gap-2 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#6b6356" }}>
              <PixelCar size={16} /> Retro Racer J2ME Edition · Built with HTML5 Canvas &amp; vanilla JavaScript
            </p>
            <p className="text-xs uppercase tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace", color: ORANGE }}>
              Warning: extreme 240×320 graphics inside
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
