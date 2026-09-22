"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const desktopVideo = useRef<HTMLVideoElement>(null);
  const mobileVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 760px)");

    const isActive = (video: HTMLVideoElement) =>
      mobileQuery.matches ? video === mobileVideo.current : video === desktopVideo.current;

    const play = (video: HTMLVideoElement | null, restart = false) => {
      if (!video || document.hidden) return;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      if (restart) video.currentTime = 0;
      void video.play().catch(() => undefined);
    };

    const syncVideos = () => {
      const active = mobileQuery.matches ? mobileVideo.current : desktopVideo.current;
      const inactive = mobileQuery.matches ? desktopVideo.current : mobileVideo.current;

      if (inactive && !inactive.paused) inactive.pause();
      play(active);
    };

    const installLoopGuard = (video: HTMLVideoElement | null) => {
      if (!video) return () => undefined;

      const restart = () => {
        if (!isActive(video) || document.hidden) return;
        video.currentTime = 0;
        play(video);
      };

      const keepLooping = () => {
        if (!isActive(video) || document.hidden || !Number.isFinite(video.duration)) return;
        // Safari/iOS can occasionally freeze on the last decoded frame of short MP4s.
        // Jump just before the true "ended" state so the hero loops continuously.
        if (video.duration > 0 && video.currentTime >= video.duration - 0.12) {
          restart();
        }
      };

      const recoverFromPause = () => {
        if (!isActive(video) || document.hidden) return;
        window.setTimeout(() => {
          if (video.paused && isActive(video) && !document.hidden) play(video);
        }, 80);
      };

      video.addEventListener("ended", restart);
      video.addEventListener("timeupdate", keepLooping);
      video.addEventListener("pause", recoverFromPause);
      video.addEventListener("stalled", recoverFromPause);
      video.addEventListener("canplay", () => {
        if (isActive(video)) play(video);
      });

      return () => {
        video.removeEventListener("ended", restart);
        video.removeEventListener("timeupdate", keepLooping);
        video.removeEventListener("pause", recoverFromPause);
        video.removeEventListener("stalled", recoverFromPause);
      };
    };

    const cleanDesktop = installLoopGuard(desktopVideo.current);
    const cleanMobile = installLoopGuard(mobileVideo.current);

    const resume = () => syncVideos();
    syncVideos();

    mobileQuery.addEventListener("change", syncVideos);
    document.addEventListener("visibilitychange", resume);
    window.addEventListener("pageshow", resume);
    window.addEventListener("focus", resume);

    return () => {
      cleanDesktop();
      cleanMobile();
      mobileQuery.removeEventListener("change", syncVideos);
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("pageshow", resume);
      window.removeEventListener("focus", resume);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <video
          ref={desktopVideo}
          className="hero-video hero-video-desktop"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
        >
          <source src="/hero-horizontal.mp4" type="video/mp4" />
        </video>
        <video
          ref={mobileVideo}
          className="hero-video hero-video-mobile"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
        >
          <source src="/hero-vertical.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-pattern" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow light">Xalapa · Veracruz · México</span>
          <h1>
            Bienes raíces
            <br />
            <em>con raíz.</em>
          </h1>
          <p>
            Inmobiliaria mexicana contemporánea en Xalapa, Veracruz. Compra, vende e invierte con claridad,
            imagen premium y acompañamiento profesional.
          </p>
          <div className="hero-actions">
            <Link className="button gold" href="#propiedades">
              Ver propiedades disponibles <ArrowDownRight size={18} />
            </Link>
            <Link className="hero-secondary-link" href="#vender">
              Quiero vender una propiedad
            </Link>
          </div>
        </div>
        <div className="hero-availability">
          <span>Listados seleccionados</span>
          <strong>Propiedades disponibles en Xalapa y la región</strong>
          <small>Atención personalizada, sin catálogos saturados.</small>
        </div>
        <div className="hero-note">
          <span>Patrimonio</span>
          <span>Estrategia</span>
          <span>Acompañamiento</span>
        </div>
      </div>
    </section>
  );
}
