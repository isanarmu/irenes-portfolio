"use client";

import { useEffect, useRef } from "react";
import styles from "./ParticleBackground.module.scss";

type Particle = { x: number; y: number; depth: number; phase: number; dx: number; dy: number };

export function ParticleBackground() {
  const container = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvas.current;
    const backdrop = container.current;
    const context = element?.getContext("2d");
    if (!element || !backdrop || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;
    let scroll = window.scrollY;
    let targetScroll = scroll;
    let pointerX = -1000;
    let pointerY = -1000;
    let parallaxX = 0;
    let parallaxY = 0;
    let light = document.documentElement.dataset.theme === "light";
    const wrap = (value: number, size: number) => ((value % size) + size) % size;

    const draw = (time: number) => {
      frame = 0;
      if (document.hidden) return;
      if (!reducedMotion.matches && time - lastTime < 1000 / 30) {
        frame = requestAnimationFrame(draw);
        return;
      }
      const dt = Math.min((time - lastTime) / 1000 || 0, 0.05);
      lastTime = time;
      const moving = !reducedMotion.matches;
      if (moving) elapsed += dt;
      const easing = 1 - Math.exp(-6 * dt);
      scroll += (targetScroll - scroll) * easing;
      const pointerActive = moving && pointerX > -500;
      parallaxX += ((pointerActive ? (pointerX / width - 0.5) * 20 : 0) - parallaxX) * easing;
      parallaxY += ((pointerActive ? (pointerY / height - 0.5) * 16 : 0) - parallaxY) * easing;
      backdrop.style.setProperty("--glow-x", `${parallaxX}px`);
      backdrop.style.setProperty("--glow-y", `${parallaxY}px`);
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        const x = wrap(
          particle.x * width +
            parallaxX * particle.depth +
            Math.sin(elapsed * 0.13 + particle.phase) * 9,
          width,
        );
        const y = wrap(
          particle.y * height -
            (moving ? scroll * (0.05 + particle.depth * 0.13) : 0) +
            parallaxY * particle.depth +
            elapsed * (1 + particle.depth),
          height,
        );
        const deltaX = x - pointerX;
        const deltaY = y - pointerY;
        const distance = Math.hypot(deltaX, deltaY);
        const force = pointerActive && distance < 150 ? (1 - distance / 150) * 34 : 0;
        particle.dx += ((distance > 0 ? (deltaX / distance) * force : 0) - particle.dx) * easing;
        particle.dy += ((distance > 0 ? (deltaY / distance) * force : 0) - particle.dy) * easing;
        const alpha =
          0.12 + particle.depth * 0.38 + Math.sin(elapsed * 0.7 + particle.phase) * 0.06;
        context.fillStyle = light
          ? `rgba(23, 95, 122, ${alpha * 0.65})`
          : `rgba(190, 222, 238, ${alpha})`;
        context.shadowColor = light ? "transparent" : "rgba(101, 204, 244, .35)";
        context.shadowBlur = particle.depth > 0.7 ? 7 : 0;
        context.beginPath();
        context.arc(x + particle.dx, y + particle.dy, 0.45 + particle.depth * 1.45, 0, Math.PI * 2);
        context.fill();
      }
      context.shadowBlur = 0;
      if (moving) frame = requestAnimationFrame(draw);
    };

    const schedule = () => {
      if (!frame && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      width = Math.max(1, window.innerWidth);
      height = Math.max(1, window.innerHeight);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      element.width = Math.round(width * ratio);
      element.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(135, Math.max(38, Math.round((width * height) / 11000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        depth: Math.random(),
        phase: Math.random() * Math.PI * 2,
        dx: 0,
        dy: 0,
      }));
      schedule();
    };
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reducedMotion.matches) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
    };
    const resetPointer = () => {
      pointerX = -1000;
      pointerY = -1000;
    };
    const onScroll = () => {
      targetScroll = window.scrollY;
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else {
        lastTime = performance.now();
        schedule();
      }
    };
    const onMotion = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      resetPointer();
      parallaxX = 0;
      parallaxY = 0;
      particles.forEach((particle) => {
        particle.dx = 0;
        particle.dy = 0;
      });
      schedule();
    };
    const themeObserver = new MutationObserver(() => {
      light = document.documentElement.dataset.theme === "light";
      schedule();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("pointerleave", resetPointer);
    window.addEventListener("blur", resetPointer);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    reducedMotion.addEventListener("change", onMotion);
    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("blur", resetPointer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMotion.removeEventListener("change", onMotion);
    };
  }, []);

  return (
    <div ref={container} className={styles.background} aria-hidden="true">
      <div className={styles.glow} />
      <canvas ref={canvas} className={styles.canvas} />
    </div>
  );
}
