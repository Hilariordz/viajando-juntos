"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
	Plane, 
	ShieldCheck, 
	Star, 
	Map, 
	Phone, 
	ArrowRight, 
	Calendar, 
	Instagram, 
	Facebook, 
	Twitter,
	Menu,
	X,
	CheckCircle2
} from "lucide-react";

function Counter({ end, duration = 2000, decimals = 0 }: { end: number; duration?: number; decimals?: number }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let startTime: number | null = null;
		const step = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);
			setCount(progress * end);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}, [end, duration]);

	return <span>{count.toFixed(decimals)}</span>;
}

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
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<main className="min-h-screen">
			<div className="w-full">
				<header className="grid min-h-10 grid-cols-1 items-center gap-2 bg-[#0a192f] px-3 py-2 text-center text-[10px] uppercase tracking-[0.1em] text-white/90 sm:grid-cols-[1fr_auto_1fr] sm:gap-3 sm:px-6 sm:py-0 sm:text-[11px]">
					<p className="flex items-center justify-center gap-2 sm:justify-start">
						<Phone size={12} className="text-[var(--accent)]" />
						844 1234567
					</p>
					<p className="hidden sm:block">Asesoría personalizada para vacaciones de lujo</p>
					<a
						href="#reserva"
						className="flex items-center justify-center gap-1 font-bold text-[var(--accent)] transition-opacity hover:opacity-80 sm:justify-end"
					>
						Reserva tu viaje <ArrowRight size={12} />
					</a>
				</header>

				<nav
					className={`sticky top-0 z-50 flex h-20 items-center justify-between border-b transition-all duration-300 px-6 sm:px-12 ${
						isScrolled 
						? "border-[var(--line)] bg-white/80 backdrop-blur-lg py-3 h-16 shadow-sm" 
						: "border-transparent bg-white py-5 h-20"
					}`}
					aria-label="Navegación principal"
				>
					<div className="flex items-center gap-8">
						<ul className="hidden list-none items-center gap-6 p-0 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--secondary)] lg:flex">
							{leftMenu.map((item) => (
								<li key={item}>
									<a href="#" className="relative group overflow-hidden py-1">
										{item}
										<span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-300 group-hover:scale-x-100" />
									</a>
								</li>
							))}
						</ul>
					</div>

					<a
						className="flex items-center gap-3 leading-none"
						href="#"
						aria-label="Viajando Juntos home"
					>
						<div className="h-10 w-10 overflow-hidden">
							<img src="/logo.svg" alt="Logo" className="h-full w-full object-contain" />
						</div>
						<div className="flex flex-col">
							<span className="text-[18px] font-extrabold tracking-[0.2em] text-[var(--secondary)]">
								VIAJANDO JUNTOS
							</span>
							<span className="mt-0.5 font-[var(--font-playfair)] text-[9px] uppercase tracking-[0.4em] text-[var(--primary)]">
								Vacaciones de Lujo
							</span>
						</div>
					</a>

					<div className="flex items-center gap-6">
						<ul className="hidden list-none items-center gap-6 p-0 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--secondary)] lg:flex">
							{rightMenu.map((item) => (
								<li key={item}>
									<a href="#" className="relative group overflow-hidden py-1">
										{item}
										<span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-300 group-hover:scale-x-100" />
									</a>
								</li>
							))}
						</ul>
						<div className="hidden items-center gap-3 sm:flex">
							<Link
								href="/login"
								className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
							>
								Iniciar sesión
							</Link>
							<Link
								href="/register"
								className="rounded-full bg-[var(--accent)] px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] !text-white shadow-lg transition hover:bg-[#ff8c3b] hover:-translate-y-px active:translate-y-0"
							>
								Registrarse
							</Link>
						</div>
						<button 
							className="lg:hidden" 
							onClick={() => setIsMobileMenuOpen(true)}
							aria-label="Menu"
						>
							<Menu size={24} />
						</button>
					</div>
				</nav>

				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, x: "100%" }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: "100%" }}
							transition={{ type: "spring", damping: 25, stiffness: 200 }}
							className="fixed inset-0 z-[100] bg-white p-8 lg:hidden"
						>
							<div className="flex justify-between items-center mb-12">
								<span className="text-[16px] font-bold tracking-[0.2em]">MENU</span>
								<button onClick={() => setIsMobileMenuOpen(false)}>
									<X size={28} />
								</button>
							</div>
							<ul className="grid gap-6 list-none p-0 text-[24px] font-[var(--font-playfair)] text-[var(--secondary)]">
								{[...leftMenu, ...rightMenu].map((item) => (
									<li key={`mobile-${item}`}>
										<a href="#" onClick={() => setIsMobileMenuOpen(false)}>
											{item}
										</a>
									</li>
								))}
							</ul>
							<div className="mt-12 grid gap-4">
								<Link
									href="/login"
									className="flex h-14 items-center justify-center rounded-xl border border-[var(--line)] text-[14px] font-bold uppercase tracking-[0.1em]"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Iniciar sesión
								</Link>
								<Link
									href="/register"
									className="flex h-14 items-center justify-center rounded-xl bg-[var(--accent)] text-[14px] font-bold uppercase tracking-[0.1em] !text-white shadow-md"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Registrarse
								</Link>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<section
					className="relative isolate flex min-h-[90vh] flex-col justify-center overflow-hidden px-6 py-20 sm:px-12"
					aria-label="Hero"
				>
					<motion.div 
						initial={{ scale: 1.1 }}
						animate={{ scale: 1 }}
						transition={{ duration: 10, ease: "easeOut" }}
						className="absolute inset-0 -z-10"
					>
						<div className="absolute inset-0 bg-black/40 z-10" />
						<img 
							src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=80" 
							alt="Beach Resort"
							className="h-full w-full object-cover"
						/>
					</motion.div>

					<div className="absolute left-12 top-12 hidden lg:block">
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md"
						>
							Colección 2026
						</motion.div>
					</div>

					<div className="mx-auto max-w-[1000px] text-center text-white">
						<motion.h1 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="m-0 font-[var(--font-playfair)] text-[clamp(48px,10vw,140px)] leading-[0.85] tracking-tight uppercase"
						>
							Vacaciones <br />
							<span className="italic font-normal lowercase">Extraordinarias</span>
						</motion.h1>
						<motion.p 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="mx-auto mt-8 max-w-[600px] text-[clamp(16px,2vw,24px)] font-light leading-relaxed text-white/90"
						>
							Experiencias de viaje de lujo curadas para el explorador exigente.
						</motion.p>
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
						>
							<a
								href="#reserva"
								className="group inline-flex min-h-[64px] items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-10 text-[12px] font-bold uppercase tracking-[0.2em] text-white shadow-2xl transition hover:bg-[#ff8c3b] hover:-translate-y-1 active:translate-y-0"
							>
								Explorar ahora <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
							</a>
							<button
								type="button"
								className="inline-flex min-h-[64px] items-center justify-center rounded-full border border-white/50 bg-white/5 px-10 text-[12px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition hover:bg-white/15 hover:-translate-y-1"
							>
								Ver catálogo
							</button>
						</motion.div>
					</div>

					<div className="mt-24 grid grid-cols-1 gap-12 sm:grid-cols-3 lg:mt-32">
						<motion.article 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
							className="text-center text-white"
						>
							<strong className="block font-[var(--font-playfair)] text-[clamp(44px,5vw,72px)] leading-none">
								<Counter end={12} />+
							</strong>
							<span className="mt-3 block text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
								Años de Lujo
							</span>
						</motion.article>
						<motion.article 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 }}
							className="text-center text-white"
						>
							<strong className="block font-[var(--font-playfair)] text-[clamp(44px,5vw,72px)] leading-none text-[var(--accent)]">
								<Counter end={4.9} decimals={1} />
							</strong>
							<span className="mt-3 block text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
								Calificación
							</span>
						</motion.article>
						<motion.article 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.2 }}
							className="text-center text-white"
						>
							<strong className="block font-[var(--font-playfair)] text-[clamp(44px,5vw,72px)] leading-none">
								<Counter end={40} />
							</strong>
							<span className="mt-3 block text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
								Destinos Globales
							</span>
						</motion.article>
					</div>
				</section>

				<section className="bg-white py-24 sm:py-32" aria-label="Why choose us">
					<div className="mx-auto max-w-[1200px] px-6">
						<div className="text-center mb-16">
							<motion.p 
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--primary)]"
							>
								La Experiencia
							</motion.p>
							<motion.h2 
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 }}
								className="mt-4 font-[var(--font-playfair)] text-[clamp(32px,4vw,56px)] leading-tight"
							>
								¿Por qué viajar con nosotros?
							</motion.h2>
						</div>

						<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
							{[
								{ icon: Plane, title: "Vuelos Curados", desc: "Arreglos de primera clase con las aerolíneas líderes del mundo." },
								{ icon: ShieldCheck, title: "Seguridad Total", desc: "Seguro de viaje premium y soporte concierge 24/7." },
								{ icon: Star, title: "Acceso Élite", desc: "Entrada exclusiva a eventos privados y tesoros ocultos." },
								{ icon: Map, title: "Rutas a Medida", desc: "Itinerarios construidos según sus preferencias únicas." }
							].map((feature, idx) => (
								<motion.div 
									key={feature.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									className="group text-center"
								>
									<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--neutral)] text-[var(--primary)] transition-transform duration-300 group-hover:-translate-y-2 group-hover:bg-[var(--primary)] group-hover:text-white">
										<feature.icon size={32} />
									</div>
									<h3 className="text-[18px] font-bold text-[var(--secondary)]">{feature.title}</h3>
									<p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{feature.desc}</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section className="bg-[var(--paper)] py-24 sm:py-32" aria-label="Destinations">
					<div className="mx-auto max-w-[1200px] px-6">
						<div className="flex flex-col items-end justify-between gap-6 sm:flex-row mb-16">
							<div className="max-w-[600px]">
								<p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
									Vacaciones Curadas
								</p>
								<h2 className="mt-4 font-[var(--font-playfair)] text-[clamp(32px,4vw,56px)] leading-tight">
									Destinos Destacados
								</h2>
							</div>
							<a href="#" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
								Ver todos los destinos <ArrowRight size={14} />
							</a>
						</div>

						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{destinationCards.map((destination, idx) => (
								<motion.article
									key={destination.name}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									className="group relative overflow-hidden rounded-[32px] bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
								>
									<div className="aspect-[4/5] overflow-hidden">
										<img 
											src={destination.image} 
											alt={destination.name}
											className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
									</div>
									<div className="absolute bottom-0 left-0 w-full p-8 text-white">
										<p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
											{destination.subtitle === "Italy" ? "Italia" : 
											 destination.subtitle === "Polynesia" ? "Polinesia" : 
											 destination.subtitle === "Greece" ? "Grecia" : destination.subtitle}
										</p>
										<h3 className="mt-2 font-[var(--font-playfair)] text-[28px] leading-tight">
											{destination.name}
										</h3>
										<div className="mt-6 flex items-center justify-between border-t border-white/20 pt-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
											<span className="text-[12px] font-medium tracking-wide">{destination.nights.replace("nights", "noches")}</span>
											<span className="flex items-center gap-1 text-[12px] font-bold">
												<Star size={12} className="fill-[var(--accent)] text-[var(--accent)]" /> {destination.rating}
											</span>
										</div>
									</div>
								</motion.article>
							))}
						</div>
					</div>
				</section>

				<section className="bg-white py-24 sm:py-32" aria-label="Testimonials">
					<div className="mx-auto max-w-[1000px] px-6 text-center">
						<Star size={40} className="mx-auto mb-8 text-[var(--accent)] fill-[var(--accent)]" />
						<h2 className="font-[var(--font-playfair)] text-[clamp(28px,3.5vw,48px)] leading-relaxed italic">
							"Un viaje inolvidable. Cada detalle fue manejado con tanto cuidado y sofisticación. No podríamos haber pedido una mejor experiencia."
						</h2>
						<div className="mt-12 flex flex-col items-center">
							<div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[var(--primary)] p-1">
								<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Client" className="h-full w-full rounded-full object-cover" />
							</div>
							<p className="mt-4 text-[16px] font-bold text-[var(--secondary)]">Sophia Henderson</p>
							<p className="text-[12px] uppercase tracking-[0.2em] text-[var(--muted)]">Miembro Platinum</p>
						</div>
					</div>
				</section>

				<section
					className="relative isolate overflow-hidden bg-[var(--secondary)] py-24 sm:py-32"
					id="reserva"
					aria-label="Booking"
				>
					<div className="absolute inset-0 -z-10 opacity-20">
						<img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80" alt="Background" className="h-full w-full object-cover" />
					</div>
					
					<div className="mx-auto max-w-[1200px] px-6">
						<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
							<div className="text-white">
								<p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
									Planificación Concierge
								</p>
								<h2 className="mt-6 font-[var(--font-playfair)] text-[clamp(36px,5vw,64px)] leading-tight">
									¿Listo para su próxima <br />
									<span className="italic font-normal">obra maestra?</span>
								</h2>
								<div className="mt-10 space-y-4">
									{[
										"Consulta personalizada 1 a 1",
										"Conocimiento local experto",
										"Planificación logística sin estrés"
									].map((item) => (
										<div key={item} className="flex items-center gap-3 text-white/80">
											<CheckCircle2 size={18} className="text-[var(--primary)]" />
											<span className="text-[15px]">{item}</span>
										</div>
									))}
								</div>
							</div>

							<motion.div 
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="rounded-[40px] bg-white p-8 shadow-2xl sm:p-12"
							>
								<form className="grid gap-6">
									<div className="grid gap-2">
										<label className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">Destino Deseado</label>
										<div className="relative">
											<Map className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={18} />
											<input 
												placeholder="ej. Costa Amalfitana, Italia"
												className="h-14 w-full rounded-2xl border border-[var(--line)] bg-[var(--paper)] pl-12 pr-4 text-[15px] outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
											/>
										</div>
									</div>
									<div className="grid gap-2">
										<label className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">Fechas de Viaje</label>
										<div className="relative">
											<Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={18} />
											<input 
												placeholder="Mes y Año"
												className="h-14 w-full rounded-2xl border border-[var(--line)] bg-[var(--paper)] pl-12 pr-4 text-[15px] outline-none transition focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
											/>
										</div>
									</div>
									<button className="h-16 w-full rounded-full bg-[var(--accent)] text-[12px] font-bold uppercase tracking-[0.2em] !text-white shadow-xl transition hover:bg-[#ff8c3b] hover:-translate-y-1">
										Solicitar Consulta
									</button>
								</form>
							</motion.div>
						</div>
					</div>
				</section>

				<footer className="bg-[#0a192f] py-20 text-white/60">
					<div className="mx-auto max-w-[1200px] px-6">
						<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
							<div>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10">
									<img src="/logo.svg" alt="Logo" className="h-full w-full object-contain" />
								</div>
								<span className="text-[20px] font-extrabold tracking-[0.3em] text-white">VIAJANDO JUNTOS</span>
							</div>
							<p className="mt-8 max-w-[400px] text-[16px] leading-relaxed">
								Redefiniendo el arte de viajar a través de experiencias exclusivas y un servicio impecable desde 2014.
							</p>
								<div className="mt-10 flex gap-6">
									<a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
									<a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
									<a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
								<div>
									<h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-6">Explorar</h4>
									<ul className="grid gap-4 list-none p-0 text-[14px]">
										<li><a href="#" className="hover:text-white transition-colors">Destinos</a></li>
										<li><a href="#" className="hover:text-white transition-colors">Colecciones</a></li>
										<li><a href="#" className="hover:text-white transition-colors">Jets Privados</a></li>
									</ul>
								</div>
								<div>
									<h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-6">Empresa</h4>
									<ul className="grid gap-4 list-none p-0 text-[14px]">
										<li><a href="#" className="hover:text-white transition-colors">Nuestra Historia</a></li>
										<li><a href="#" className="hover:text-white transition-colors">Concierge</a></li>
										<li><a href="#" className="hover:text-white transition-colors">Aliados</a></li>
									</ul>
								</div>
								<div className="col-span-2 sm:col-span-1">
									<h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-6">Contacto</h4>
									<ul className="grid gap-4 list-none p-0 text-[14px]">
										<li className="flex items-center gap-2"><Phone size={14} /> 844 1234567</li>
										<li>hola@viajandojuntos.com</li>
										<li>CDMX, México</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row">
							<p className="text-[13px]">© 2026 Viajando Juntos. Todos los derechos reservados.</p>
							<div className="flex gap-8 text-[13px]">
								<a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
								<a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</main>
	);
}
