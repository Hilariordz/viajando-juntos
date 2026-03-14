import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinos", href: "/#destinos" },
  { label: "Reserva", href: "/#reserva" },
  { label: "Contacto", href: "/#footer" },
];

const stars = [
  { x: 120, y: 90, r: 2.2 },
  { x: 220, y: 160, r: 1.5 },
  { x: 360, y: 120, r: 1.8 },
  { x: 520, y: 80, r: 2.4 },
  { x: 680, y: 200, r: 1.7 },
  { x: 820, y: 130, r: 2.1 },
  { x: 960, y: 250, r: 1.6 },
  { x: 1080, y: 160, r: 2.1 },
  { x: 260, y: 320, r: 1.7 },
  { x: 760, y: 360, r: 2.0 },
  { x: 980, y: 440, r: 1.4 },
  { x: 1160, y: 300, r: 2.3 },
  { x: 160, y: 520, r: 2.0 },
  { x: 380, y: 610, r: 1.3 },
  { x: 620, y: 560, r: 2.2 },
  { x: 900, y: 620, r: 1.9 },
  { x: 1120, y: 540, r: 1.4 },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a1821] text-white">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1280 720"
        aria-labelledby="svgtitle2"
        role="img"
      >
        <title id="svgtitle2">Starry sky</title>
        <defs>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#d4d7dd" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#d4d7dd" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1280" height="720" fill="#0a1821" />
        <rect
          width="1280"
          height="720"
          fill="url(#topFog)"
          opacity="0.25"
        />

        <g className="stars-far" fill="#f6f5bc" opacity="0.85">
          {stars.map((star) => (
            <circle key={`${star.x}-${star.y}`} cx={star.x} cy={star.y} r={star.r} />
          ))}
        </g>

        <g className="stars-near" fill="#fff8d8" opacity="0.9">
          <circle cx="140" cy="240" r="3" />
          <circle cx="450" cy="230" r="2.7" />
          <circle cx="700" cy="150" r="3" />
          <circle cx="1020" cy="90" r="2.6" />
          <circle cx="1160" cy="260" r="2.9" />
          <circle cx="560" cy="420" r="2.8" />
          <circle cx="860" cy="510" r="2.6" />
          <circle cx="280" cy="430" r="2.9" />
        </g>

        <circle cx="210" cy="500" r="170" fill="url(#moonGlow)" />
        <circle cx="210" cy="500" r="128" fill="#d1d5d6" />
        <circle cx="165" cy="470" r="24" fill="#ffffff" opacity="0.7" />
        <circle cx="260" cy="540" r="19" fill="#ffffff" opacity="0.55" />
        <circle cx="242" cy="470" r="9" fill="#ffffff" opacity="0.75" />
      </svg>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.55))]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-start justify-end px-4 py-8 sm:px-8 sm:py-10">
        <div className="w-full max-w-[460px] rounded-2xl border border-white/10 bg-black/45 p-5 text-right backdrop-blur-md sm:p-7">
          <svg
            aria-labelledby="svgtitle1"
            className="ml-auto h-[120px] w-[280px] sm:h-[165px] sm:w-[380px]"
            role="img"
            viewBox="0 0 420 180"
          >
            <title id="svgtitle1">404 Page not found</title>
            <text
              x="8"
              y="136"
              fill="#ffffff"
              fontFamily="var(--font-playfair)"
              fontSize="138"
              fontWeight="700"
              letterSpacing="4"
            >
              404
            </text>
            <text
              x="13"
              y="141"
              fill="var(--accent)"
              fontFamily="var(--font-playfair)"
              fontSize="138"
              opacity="0.3"
              letterSpacing="4"
            >
              404
            </text>
          </svg>

          <h1 className="mt-1 text-[30px] font-bold uppercase tracking-[0.08em] sm:text-[38px]">
            Page Not Found
          </h1>

          <div className="mt-5 flex items-center justify-end gap-2 border-b border-white/35 pb-2">
            <input
              id="input1"
              type="text"
              placeholder="Search"
              className="w-full max-w-[240px] bg-transparent text-right text-[17px] text-white placeholder:text-white/65 focus:outline-none"
            />
            <svg className="h-6 w-6" viewBox="0 0 26 26" aria-hidden>
              <path
                fill="var(--primary)"
                fillOpacity="0.8"
                d="M16.7 15.3c3.2-3.2 3.2-8.5 0-11.7s-8.5-3.2-11.7 0-3.2 8.5 0 11.7c2.9 2.9 7.3 3.2 10.6.8l5.1 5.1c.4.4 1 .4 1.4 0l.6-.6c.4-.4.4-1 0-1.4l-5.1-5.1c2.3-3.3 2.1-7.7-.9-10.6zm-10.3-1.4c-2.4-2.4-2.4-6.2 0-8.6 2.4-2.4 6.2-2.4 8.6 0 2.4 2.4 2.4 6.2 0 8.6-2.4 2.4-6.2 2.4-8.6 0z"
              />
            </svg>
          </div>

          <ul className="mt-6 space-y-2 text-right text-[16px] font-light sm:text-[18px]">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block border-b border-[var(--secondary)] pb-0.5 text-white/95 transition hover:border-white hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}
