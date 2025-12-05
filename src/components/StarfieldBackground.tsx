"use client";

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();

    // Star colors (gold theme variations)
    const starColors = [
      'rgba(255, 184, 0, 1)',      // Gold
      'rgba(255, 215, 0, 1)',      // Bright gold
      'rgba(255, 200, 50, 1)',     // Light gold
      'rgba(255, 255, 255, 1)',    // White
      'rgba(255, 240, 200, 1)',    // Warm white
    ];

    // Initialize stars
    const initStars = () => {
      const numStars = Math.floor((canvas.width * canvas.height) / 8000); // Density based on screen size
      starsRef.current = [];

      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000, // Depth for 3D effect
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.5 + 0.1,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };
    initStars();

    // Mouse movement for parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      starsRef.current.forEach((star) => {
        // 3D projection
        const perspective = 500;
        const scale = perspective / (perspective + star.z);
        const x2d = (star.x - canvas.width / 2) * scale + canvas.width / 2 + mouseRef.current.x * scale;
        const y2d = (star.y - canvas.height / 2) * scale + canvas.height / 2 + mouseRef.current.y * scale;
        const size2d = star.size * scale;

        // Twinkle effect
        const twinkle = Math.sin(Date.now() * 0.003 * star.speed + star.x) * 0.3 + 0.7;
        const finalOpacity = star.opacity * twinkle * scale;

        // Draw star with glow
        ctx.save();
        
        // Outer glow
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size2d * 4);
        gradient.addColorStop(0, star.color.replace('1)', `${finalOpacity})`));
        gradient.addColorStop(0.5, star.color.replace('1)', `${finalOpacity * 0.3})`));
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace('1)', `${finalOpacity})`);
        ctx.fill();

        ctx.restore();

        // Move star towards viewer (3D depth animation)
        star.z -= star.speed * 2;
        
        // Reset star when it passes the viewer
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });

      // Draw occasional shooting stars
      if (Math.random() < 0.002) {
        drawShootingStar(ctx, canvas.width, canvas.height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Shooting star effect
    const drawShootingStar = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const startX = Math.random() * width;
      const startY = Math.random() * height * 0.5;
      const length = Math.random() * 100 + 50;
      const angle = Math.PI / 4 + Math.random() * 0.5;

      const gradient = ctx.createLinearGradient(
        startX, startY,
        startX + Math.cos(angle) * length,
        startY + Math.sin(angle) * length
      );
      gradient.addColorStop(0, 'rgba(255, 215, 0, 0.8)');
      gradient.addColorStop(0.5, 'rgba(255, 184, 0, 0.4)');
      gradient.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(
        startX + Math.cos(angle) * length,
        startY + Math.sin(angle) * length
      );
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    animate();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      initStars();
    };
    window.addEventListener('resize', handleResize);

    // Handle scroll to update canvas height
    const handleScroll = () => {
      const newHeight = document.documentElement.scrollHeight;
      if (canvas.height !== newHeight) {
        canvas.height = newHeight;
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
