import Link from "next/link";

export default function IniciarSesionPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] lg:h-screen lg:overflow-hidden">
      <section className="grid min-h-screen grid-cols-1 lg:h-screen lg:grid-cols-[1fr_0.88fr] lg:items-center">
        <aside className="relative hidden h-[25vh] overflow-hidden lg:order-2 lg:block lg:h-screen">
          <img
            src="https://images.unsplash.com/photo-1543988590-f0d786ac6ef2?auto=format&fit=crop&w=1800&q=80"
            alt="Costa vista aerea"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.45))]" />
          <div className="absolute left-8 top-8 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
            Viajando Juntos
          </div>
          <div className="absolute bottom-10 left-8 right-8 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">
              Coastal Collection
            </p>
            <h1 className="mt-2 max-w-[520px] font-[var(--font-playfair)] text-[clamp(24px,3.2vw,48px)] leading-[0.98]">
              Inicia sesión y continúa tu próxima escapada
            </h1>
          </div>
        </aside>

        <div className="flex items-center justify-center px-6 py-10 lg:order-1 lg:h-screen lg:px-12 lg:py-0 xl:px-16">
          <div className="w-full max-w-[440px]">
            <div className="mb-8 lg:hidden">
              <span className="text-[18px] font-extrabold tracking-[0.2em] text-[var(--secondary)]">
                VIAJANDO JUNTOS
              </span>
            </div>

            <Link
              href="/"
              className="inline-flex text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--primary)] underline underline-offset-4 transition hover:opacity-80"
            >
              Regresar al inicio
            </Link>

            <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              Bienvenido de vuelta
            </p>
            <h2 className="mt-2 font-[var(--font-playfair)] text-[clamp(32px,3.5vw,48px)] leading-tight">
              Iniciar sesión
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
              Accede a tus reservas, itinerarios y experiencias personalizadas.
            </p>

            <form className="mt-10 grid gap-5">
              <div className="grid gap-2">
                <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="h-13 rounded-2xl border border-[var(--line)] bg-white px-4 text-[15px] text-[var(--ink)] placeholder:text-[var(--muted)] outline-none transition focus:border-[var(--primary)]"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="h-13 rounded-2xl border border-[var(--line)] bg-white px-4 text-[15px] text-[var(--ink)] placeholder:text-[var(--muted)] outline-none transition focus:border-[var(--primary)]"
                />
              </div>

              <div className="flex items-center justify-between text-[13px] text-[var(--muted)]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 accent-[var(--primary)]" />
                  Recordarme
                </label>
                <Link href="#" className="underline underline-offset-2 hover:text-[var(--ink)]">
                  Olvidé mi contraseña
                </Link>
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex h-14 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-[12px] font-bold uppercase tracking-[0.2em] !text-white shadow-lg transition hover:bg-[#ff8c3b] hover:-translate-y-px active:translate-y-0"
              >
                Entrar
              </button>
            </form>

            <p className="mt-8 text-center text-[14px] text-[var(--muted)] lg:text-left">
              ¿No tienes cuenta?{" "}
              <Link href="/register" className="font-bold text-[var(--ink)] underline underline-offset-2">
                Crear registro
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
