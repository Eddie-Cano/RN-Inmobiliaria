"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef, type SyntheticEvent } from "react";

export function Hero() {
  const desktopVideo = useRef<HTMLVideoElement>(null);
  const mobileVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    const playActiveVideo = () => {
      const active = mobileQuery.matches ? mobileVideo.current : desktopVideo.current;
      const inactive = mobileQuery.matches ? desktopVideo.current : mobileVideo.current;
      inactive?.pause();
      if (!active || document.hidden) return;
      active.muted = true;
      if (active.ended) active.currentTime = 0;
      void active.play().catch(() => undefined);
    };

    playActiveVideo();
    const keepPlaying = window.setInterval(playActiveVideo, 1000);
    mobileQuery.addEventListener("change", playActiveVideo);
    document.addEventListener("visibilitychange", playActiveVideo);
    return () => {
      window.clearInterval(keepPlaying);
      mobileQuery.removeEventListener("change", playActiveVideo);
      document.removeEventListener("visibilitychange", playActiveVideo);
    };
  }, []);

  const restartVideo = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    video.currentTime = 0;
    void video.play().catch(() => undefined);
  };

  return <section className="hero"><div className="hero-media" aria-hidden="true"><video ref={desktopVideo} className="hero-video hero-video-desktop" autoPlay muted loop playsInline preload="auto" onEnded={restartVideo}><source src="/hero-horizontal.mp4" type="video/mp4" /></video><video ref={mobileVideo} className="hero-video hero-video-mobile" autoPlay muted loop playsInline preload="auto" onEnded={restartVideo}><source src="/hero-vertical.mp4" type="video/mp4" /></video></div><div className="hero-pattern" aria-hidden="true" /><div className="container hero-inner"><div className="hero-copy"><span className="eyebrow light">Xalapa · Veracruz · México</span><h1>Bienes raíces<br /><em>con raíz.</em></h1><p>Inmobiliaria mexicana contemporánea en Xalapa, Veracruz. Compra, vende e invierte con claridad, imagen premium y acompañamiento profesional.</p><div className="hero-actions"><Link className="button gold" href="#propiedades">Ver propiedades disponibles <ArrowDownRight size={18} /></Link><Link className="hero-secondary-link" href="#vender">Quiero vender una propiedad</Link></div></div><div className="hero-availability"><span>Listados seleccionados</span><strong>Propiedades disponibles en Xalapa y la región</strong><small>Atención personalizada, sin catálogos saturados.</small></div><div className="hero-note"><span>Patrimonio</span><span>Estrategia</span><span>Acompañamiento</span></div></div></section>;
}
