import { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  length: number;
  isStreak: boolean;
  isGlowOrb: boolean;
  angle: number;
  angularVelocity: number;
  orbitRadius: number;
  amplitude: number;
  waveSpeed: number;
  colorIdx: number;
  alpha: number;
  pulseSpeed: number;
  pulseDir: number;
  motionPattern: "vertical" | "sway" | "orbit" | "diagonal";
}

const DustParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Auto-reduces particles count on mobile for low CPU usage & high performance
      const numParticles = window.innerWidth < 768 ? 150 : 240;

      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        // Particle Types: 70% small dust, 20% medium glowing orbs, 10% light streaks
        const typeRand = Math.random();
        let radius = Math.random() * 1.2 + 0.4; // Small dust by default
        let isGlowOrb = false;
        let isStreak = false;
        let length = 0;

        if (typeRand > 0.7 && typeRand <= 0.9) {
          isGlowOrb = true;
          radius = Math.random() * 2.5 + 2.0; // Medium orb with glow
        } else if (typeRand > 0.9) {
          isStreak = true;
          radius = Math.random() * 0.6 + 0.3; // Streak line width
          length = Math.random() * 12 + 6; // Streak length
        }

        // Color Indexes (0 = Base White, 1 = Blue Glow, 2 = Lavender Tint, 3 = Shimmer)
        const colorIdx = Math.floor(Math.random() * 4);

        // Motion Pattern Allocations:
        // - 40% vertical drift (slow upward)
        // - 30% horizontal sway (gentle wave)
        // - 20% circular orbits (orbits)
        // - 10% diagonal flows (multi-directional)
        const motionRand = Math.random();
        let motionPattern: "vertical" | "sway" | "orbit" | "diagonal" = "vertical";

        if (motionRand > 0.4 && motionRand <= 0.7) {
          motionPattern = "sway";
        } else if (motionRand > 0.7 && motionRand <= 0.9) {
          motionPattern = "orbit";
        } else if (motionRand > 0.9) {
          motionPattern = "diagonal";
        }

        // Speed settings to match the 15-25 seconds cycles (very slow movement)
        const cycleSpeedMultiplier = Math.random() * 0.05 + 0.02;

        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * cycleSpeedMultiplier,
          vy: motionPattern === "vertical"
            ? -(Math.random() * 0.12 + 0.05) // upward
            : (Math.random() - 0.5) * cycleSpeedMultiplier,
          radius,
          length,
          isStreak,
          isGlowOrb,
          angle: Math.random() * Math.PI * 2,
          angularVelocity: (Math.random() - 0.5) * 0.003,
          orbitRadius: Math.random() * 12 + 4,
          amplitude: Math.random() * 15 + 5,
          waveSpeed: Math.random() * 0.005 + 0.002,
          colorIdx,
          alpha: Math.random() * 0.55 + 0.15,
          pulseSpeed: Math.random() * 0.002 + 0.001,
          pulseDir: Math.random() > 0.5 ? 1 : -1,
          motionPattern,
        });
      }
    };

    // Debounced resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    };

    resizeCanvas();
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // 1. Motion Updates based on selected pattern
        if (p.motionPattern === "vertical") {
          p.y += p.vy;
          if (p.y < -20) p.y = canvas.height + 20;
        } else if (p.motionPattern === "sway") {
          p.y += -0.06; // Slow vertical drift
          p.angle += p.waveSpeed;
          p.x = p.baseX + Math.sin(p.angle) * p.amplitude;

          if (p.y < -20) {
            p.y = canvas.height + 20;
            p.baseX = Math.random() * canvas.width;
          }
        } else if (p.motionPattern === "orbit") {
          p.angle += p.angularVelocity;
          p.baseY += -0.04; // Slow vertical drift
          p.x = p.baseX + Math.cos(p.angle) * p.orbitRadius;
          p.y = p.baseY + Math.sin(p.angle) * p.orbitRadius;

          if (p.baseY < -20) {
            p.baseY = canvas.height + 20;
            p.baseX = Math.random() * canvas.width;
          }
        } else if (p.motionPattern === "diagonal") {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -20) p.x = canvas.width + 20;
          if (p.x > canvas.width + 20) p.x = -20;
          if (p.y < -20) p.y = canvas.height + 20;
          if (p.y > canvas.height + 20) p.y = -20;
        }

        // 2. Opacity Shimmer Updates
        p.alpha += p.pulseSpeed * p.pulseDir;
        if (p.alpha > 0.75) {
          p.alpha = 0.75;
          p.pulseDir = -1;
        } else if (p.alpha < 0.1) {
          p.alpha = 0.1;
          p.pulseDir = 1;
        }

        // 3. Theme-aware Color Palettes
        let colorStr = "";
        if (theme === "dark") {
          // Palette (Dark Mode)
          switch (p.colorIdx) {
            case 0:
              colorStr = `rgba(255, 255, 255, ${p.alpha * 0.25})`; // Base white
              break;
            case 1:
              colorStr = `rgba(100, 180, 255, ${p.alpha * 0.35})`; // Blue glow
              break;
            case 2:
              colorStr = `rgba(180, 200, 255, ${p.alpha * 0.20})`; // Lavender tint
              break;
            case 3:
            default:
              colorStr = `rgba(200, 220, 255, ${p.alpha * 0.15})`; // Shimmer
              break;
          }
        } else {
          // Color Palette (Light Mode - Premium grays/slates and muted tints)
          switch (p.colorIdx) {
            case 0:
              colorStr = `rgba(75, 85, 99, ${p.alpha * 0.18})`; // Slate gray base
              break;
            case 1:
              colorStr = `rgba(59, 130, 246, ${p.alpha * 0.15})`; // Muted blue
              break;
            case 2:
              colorStr = `rgba(99, 102, 241, ${p.alpha * 0.12})`; // Lavender/indigo
              break;
            case 3:
            default:
              colorStr = `rgba(148, 163, 184, ${p.alpha * 0.14})`; // Slate shimmer
              break;
          }
        }

        // 4. Particle Rendering
        ctx.beginPath();
        if (p.isStreak) {
          // Light streaks (GPU-accelerated line drawings)
          ctx.strokeStyle = colorStr;
          ctx.lineWidth = p.radius;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(
            p.x + Math.cos(p.angle) * p.length,
            p.y + Math.sin(p.angle) * p.length
          );
          ctx.stroke();
        } else {
          // Glowing orbs or small dust particles
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = colorStr;

          if (theme === "dark" && p.isGlowOrb) {
            // Apply high-quality glowing filters to medium orbs in dark mode
            ctx.shadowBlur = p.radius * 2.5;
            ctx.shadowColor = p.colorIdx === 1 ? "rgba(100, 180, 255, 0.45)" : "rgba(255, 255, 255, 0.3)";
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      });

      // Clear shadows configuration to optimize subsequent operations
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full bg-transparent"
      aria-hidden="true"
    />
  );
};

export default DustParticles;
