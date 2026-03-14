const leftMenu = ["Inicio", "Destinos", "Paquetes"];
const rightMenu = ["Galeria", "Contacto"];

const destinationCards = [
	{
		name: "Costa Amalfitana",
		subtitle: "Italia",
		nights: "7 noches",
		rating: "4.9",
		image:
			"https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
	},
	{
		name: "Bora Bora",
		subtitle: "Polinesia",
		nights: "6 noches",
		rating: "4.8",
		image:
			"https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=80",
	},
	{
		name: "Santorini",
		subtitle: "Grecia",
		nights: "5 noches",
		rating: "4.7",
		image:
			"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
	},
];

export default function Home() {
	return (
		<main className="min-h-screen">
			<div className="w-full">
				<header className="grid min-h-11 grid-cols-1 items-center gap-2 bg-[var(--secondary)] px-3 py-2 text-center text-[11px] uppercase tracking-[0.05em] text-white sm:grid-cols-[1fr_auto_1fr] sm:gap-3 sm:px-6 sm:py-0 sm:text-[12px]">
					<p>+52 55 4088 9900</p>
					<p className="sm:justify-self-center">Asesoria personalizada para escapadas de lujo</p>
					<a
						href="#reserva"
						className="font-bold transition-opacity hover:opacity-80 sm:justify-self-end"
					>
						Reserva tu viaje
					</a>
				</header>

				<nav
					className="sticky top-0 z-[90] flex min-h-20 items-center justify-between border-b border-[var(--line)] bg-white px-3 py-3 sm:hidden"
					aria-label="Navegacion principal movil"
				>
					<a
						className="grid justify-items-start gap-1 leading-none"
						href="#"
						aria-label="Viajando Juntos home"
					>
						<span
							className="font-[var(--font-playfair)] text-[12px] tracking-[0.2em] text-[var(--primary)]"
							aria-hidden
						>
							+ +
						</span>
						<span className="text-[16px] font-extrabold tracking-[0.12em]">VIAJANDO JUNTOS</span>
					</a>

					<details className="group relative">
						<summary className="relative z-[70] flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-[rgba(17,17,17,0.2)] bg-[#f7f7f7] text-[#1f1f1f] [&::-webkit-details-marker]:hidden group-open:fixed group-open:right-3 group-open:top-3 group-open:z-[80]">
							<span className="sr-only">Abrir menu</span>
							<span className="text-xl leading-none">≡</span>
						</summary>
						<div className="fixed inset-0 z-[60] overscroll-none">
							<div className="absolute inset-0 bg-black/35 touch-none" />
							<div className="absolute right-0 top-0 h-screen w-[80vw] overflow-y-auto border-l border-[rgba(17,17,17,0.14)] bg-white p-4 shadow-[0_18px_40px_rgba(17,17,17,0.2)]">
								<div className="mb-3 border-b border-[rgba(17,17,17,0.1)] pb-3">
									<p className="m-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#4a4a4a]">
										Menu
									</p>
								</div>
								<ul className="m-0 grid list-none gap-1 p-0 text-[11px] font-bold uppercase tracking-[0.1em] text-[#2c2b2a]">
								{leftMenu.map((item) => (
									<li key={`m-left-${item}`}>
										<a
											href="#"
											className="block rounded-lg px-3 py-2 transition-colors hover:bg-[#f4f4f4]"
										>
											{item}
										</a>
									</li>
								))}
								{rightMenu.map((item) => (
									<li key={`m-right-${item}`}>
										<a
											href="#"
											className="block rounded-lg px-3 py-2 transition-colors hover:bg-[#f4f4f4]"
										>
											{item}
										</a>
									</li>
								))}
								</ul>
								<div className="mt-3 grid gap-2 border-t border-[rgba(17,17,17,0.1)] pt-3">
									<a
										href="#"
										className="inline-flex min-h-9 items-center justify-center rounded-full border border-[rgba(17,17,17,0.24)] bg-[#f3f3f3] px-4 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#1f1f1f]"
									>
										Iniciar sesion
									</a>
									<a
										href="#"
										className="inline-flex min-h-9 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white"
									>
										Registro
									</a>
								</div>
							</div>
						</div>
					</details>
				</nav>

				<nav
					className="sticky top-0 z-50 hidden min-h-24 grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-[var(--line)] bg-white px-6 py-0 sm:grid"
					aria-label="Navegacion principal"
				>
					<ul className="flex list-none flex-wrap items-center justify-start gap-5 p-0 text-[11px] font-bold uppercase tracking-[0.1em] text-[#2c2b2a]">
						{leftMenu.map((item) => (
							<li key={item}>
								<a href="#" className="transition-opacity hover:opacity-75">
									{item}
								</a>
							</li>
						))}
					</ul>

					<a
						className="grid justify-items-center gap-1 leading-none"
						href="#"
						aria-label="Viajando Juntos home"
					>
						<span
							className="font-[var(--font-playfair)] text-[14px] tracking-[0.2em] text-[var(--primary)]"
							aria-hidden
						>
							+ +
						</span>
						<span className="text-[27px] font-extrabold tracking-[0.28em]">
							VIAJANDO JUNTOS
						</span>
					</a>

					<ul className="flex list-none flex-wrap items-center justify-end gap-5 p-0 text-[11px] font-bold uppercase tracking-[0.1em] text-[#2c2b2a]">
						{rightMenu.map((item) => (
							<li key={item}>
								<a href="#" className="transition-opacity hover:opacity-75">
									{item}
								</a>
							</li>
						))}
						<li className="ml-2 inline-flex items-center justify-center gap-2">
							<a
								href="#"
								className="inline-flex min-h-9 items-center justify-center overflow-hidden rounded-full border border-[rgba(17,17,17,0.24)] bg-[#f3f3f3] px-4 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#1f1f1f] transition hover:-translate-y-px hover:bg-white hover:shadow-[0_10px_20px_rgba(28,24,18,0.16)]"
							>
								Iniciar sesion
							</a>
							<a
								href="#"
								className="inline-flex min-h-9 items-center justify-center overflow-hidden rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white transition hover:-translate-y-px hover:bg-[#ff5e4d] hover:shadow-[0_10px_20px_rgba(28,24,18,0.16)]"
							>
								Registro
							</a>
						</li>
					</ul>
				</nav>

				<section
					className="relative isolate overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.46),rgba(0,0,0,0.62)),url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center px-3 pb-8 pt-7 before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.55))] sm:min-h-[540px] sm:px-6 sm:pb-[118px] sm:pt-12"
					aria-label="Vacaciones elegantes"
				>
					<div className="mx-auto inline-flex rounded-full border border-[rgba(255,111,97,0.56)] bg-[rgba(255,111,97,0.26)] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#fdfaf5]">
						Coleccion 2026
					</div>
					<div className="mx-auto mt-8 max-w-[900px] text-center text-white sm:mt-[clamp(48px,10vh,114px)]">
						<h1 className="m-0 grid font-[var(--font-caveat)] text-[clamp(40px,8.2vw,132px)] leading-[0.86] uppercase [text-shadow:0_14px_28px_rgba(0,0,0,0.33)]">
							<span>Vacaciones</span>
							<span>Extraordinarias</span>
						</h1>
						<p className="mx-auto mt-3 max-w-[700px] font-[var(--font-playfair)] text-[clamp(18px,2vw,38px)] text-[rgba(255,255,255,0.92)]">
							Disenamos viajes elegantes con experiencias memorables.
						</p>
						<div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
							<a
								href="#reserva"
								className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--accent)] px-8 text-[12px] font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_14px_28px_rgba(180,58,44,0.3)] transition hover:-translate-y-px"
							>
								Planear ahora
							</a>
							<button
								type="button"
								className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[rgba(0,166,118,0.72)] bg-[rgba(0,166,118,0.36)] px-8 text-[12px] font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur transition hover:-translate-y-px"
							>
								Ver catalogo
							</button>
						</div>
					</div>

					<div
						className="mt-5 grid grid-cols-1 gap-2 sm:absolute sm:bottom-6 sm:left-6 sm:right-6 sm:grid-cols-3 sm:gap-3"
						aria-label="Indicadores de servicio"
					>
						<article className="rounded-[18px] border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.16)] px-3 py-3 text-[#f8f4ed] backdrop-blur sm:px-4 sm:py-3.5">
							<strong className="block text-[23px] leading-none sm:text-[28px]">12+</strong>
							<span className="mt-1.5 block text-[13px] text-[rgba(255,251,244,0.86)]">
								Anios creando escapadas premium
							</span>
						</article>
						<article className="rounded-[18px] border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.16)] px-3 py-3 text-[#f8f4ed] backdrop-blur sm:px-4 sm:py-3.5">
							<strong className="block text-[23px] leading-none sm:text-[28px]">4.9/5</strong>
							<span className="mt-1.5 block text-[13px] text-[rgba(255,251,244,0.86)]">
								Satisfaccion promedio de viajeros
							</span>
						</article>
						<article className="rounded-[18px] border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.16)] px-3 py-3 text-[#f8f4ed] backdrop-blur sm:px-4 sm:py-3.5">
							<strong className="block text-[23px] leading-none sm:text-[28px]">40</strong>
							<span className="mt-1.5 block text-[13px] text-[rgba(255,251,244,0.86)]">
								Destinos internacionales curados
							</span>
						</article>
					</div>
				</section>

				<section className="px-0 pt-[clamp(56px,7vw,92px)]" aria-label="Destinos destacados">
					<div className="text-center">
						<p className="m-0 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--secondary)]">
							Destinos exclusivos
						</p>
						<h2 className="mx-auto mt-[18px] max-w-[880px] font-[var(--font-playfair)] text-[clamp(36px,4.2vw,60px)] leading-none tracking-[-0.02em]">
							Escoge la atmosfera ideal para tus proximas vacaciones
						</h2>
					</div>

					<div className="mt-8 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
						{destinationCards.map((destination) => (
							<article
								className="overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.72)] bg-[var(--panel)] shadow-[var(--shadow-md)]"
								key={destination.name}
							>
								<div
									className="min-h-[220px] bg-cover bg-center sm:min-h-[250px] lg:min-h-[280px]"
									style={{ backgroundImage: `url(${destination.image})` }}
								/>
								<div className="p-[18px]">
									<p className="m-0 text-[11px] uppercase tracking-[0.12em] text-[#4d5b55]">
										{destination.subtitle}
									</p>
									<h3 className="mt-2.5 font-[var(--font-playfair)] text-[28px] leading-none">
										{destination.name}
									</h3>
									<div className="mt-3.5 flex flex-wrap gap-2">
										<span className="rounded-full bg-[var(--neutral)] px-2.5 py-2 text-[12px] text-[#1a6d59]">
											{destination.nights}
										</span>
										<span className="rounded-full bg-[var(--neutral)] px-2.5 py-2 text-[12px] text-[#1a6d59]">
											Calificacion {destination.rating}
										</span>
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				<section
					className="mt-[clamp(58px,7vw,98px)] grid grid-cols-1 items-center gap-6 rounded-[26px] border border-[rgba(0,166,118,0.28)] bg-[linear-gradient(135deg,rgba(231,253,245,0.9),rgba(219,250,240,0.88)),#e7fbf4] p-6 shadow-[var(--shadow-lg)] md:grid-cols-[minmax(260px,1fr)_minmax(300px,430px)] md:p-[30px]"
					id="reserva"
					aria-label="Solicitud de viaje"
				>
					<div>
						<p className="m-0 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--secondary)]">
							Planificacion concierge
						</p>
						<h2 className="mt-4 font-[var(--font-playfair)] text-[clamp(28px,4vw,56px)] leading-[0.98]">
							Construyamos tus vacaciones ideales
						</h2>
						<p className="mt-3.5 max-w-[580px] leading-[1.8] text-[#2a6956]">
							Comparte tus fechas y estilo de viaje. En menos de 24 horas te
							enviaremos una propuesta personalizada.
						</p>
					</div>
					<form className="grid gap-2">
						<label
							htmlFor="destino"
							className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#1d8f6a]"
						>
							Destino deseado
						</label>
						<input
							id="destino"
							placeholder="Ej. Riviera Maya"
							className="min-h-12 rounded-xl border border-[rgba(0,166,118,0.3)] bg-[#fcfffd] px-3.5 text-[#1a1a1a] placeholder:text-[#76a395]"
						/>

						<label
							htmlFor="fecha"
							className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#1d8f6a]"
						>
							Fecha aproximada
						</label>
						<input
							id="fecha"
							placeholder="Mes y ano"
							className="min-h-12 rounded-xl border border-[rgba(0,166,118,0.3)] bg-[#fcfffd] px-3.5 text-[#1a1a1a] placeholder:text-[#76a395]"
						/>

						<button
							type="submit"
							className="mt-2 inline-flex min-h-[50px] items-center justify-center rounded-full bg-[var(--primary)] px-6 text-[12px] font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-px"
						>
							Solicitar propuesta
						</button>
					</form>
				</section>

				<footer
					className="mt-[22px] rounded-t-[24px] bg-[#0b0b0b] px-5 pb-[18px] pt-6 text-[#efebe4] shadow-[var(--shadow-lg)] sm:px-[30px] sm:pb-[22px] sm:pt-[34px]"
					aria-label="Pie de pagina"
				>
					<div className="grid grid-cols-1 gap-[18px] lg:grid-cols-[1.5fr_repeat(3,minmax(0,1fr))]">
						<div>
							<p className="m-0 text-[11px] font-bold uppercase tracking-[0.3em] text-white">
								Viajando Juntos
							</p>
							<h3 className="mt-4 max-w-[370px] font-[var(--font-playfair)] text-[clamp(24px,3.1vw,42px)] leading-[1.02]">
								Viajes de vacaciones con diseno premium y atencion humana.
							</h3>
						</div>

						<div>
							<h4 className="m-0 text-[12px] uppercase tracking-[0.1em] text-white">
								Empresa
							</h4>
							<ul className="mt-3.5 grid list-none gap-2 p-0 text-[14px] text-[rgba(245,250,255,0.9)]">
								<li>
									<a href="#">Sobre nosotros</a>
								</li>
								<li>
									<a href="#">Metodo de trabajo</a>
								</li>
								<li>
									<a href="#">Aliados</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="m-0 text-[12px] uppercase tracking-[0.1em] text-white">
								Explorar
							</h4>
							<ul className="mt-3.5 grid list-none gap-2 p-0 text-[14px] text-[rgba(245,250,255,0.9)]">
								<li>
									<a href="#">Destinos</a>
								</li>
								<li>
									<a href="#">Paquetes</a>
								</li>
								<li>
									<a href="#reserva">Reserva</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="m-0 text-[12px] uppercase tracking-[0.1em] text-white">
								Contacto
							</h4>
							<ul className="mt-3.5 grid list-none gap-2 p-0 text-[14px] text-[rgba(245,250,255,0.9)]">
								<li>+52 55 4088 9900</li>
								<li>hola@viajandojuntos.com</li>
								<li>CDMX, Mexico</li>
							</ul>
						</div>
					</div>

					<div className="mt-[22px] flex flex-col items-start justify-between gap-3 border-t border-[rgba(255,255,255,0.28)] pt-[18px] sm:flex-row sm:items-center">
						<p className="m-0 text-[13px] text-[rgba(241,249,255,0.86)]">
							© 2026 Viajando Juntos. Todos los derechos reservados.
						</p>
						<div className="flex gap-3 text-[13px] text-white">
							<a href="#">Privacidad</a>
							<a href="#">Terminos</a>
						</div>
					</div>
				</footer>
			</div>
		</main>
	);
}
