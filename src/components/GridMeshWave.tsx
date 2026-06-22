"use client";

import React, { useMemo } from "react";

interface GridMeshWaveProps {
  className?: string;
}

export default function GridMeshWave({ className = "" }: GridMeshWaveProps) {
  // Generate grid points procedurally to keep the asset footprint at 0KB
  // while ensuring infinite scaling sharpness.
  const { horizontalPaths, verticalPaths } = useMemo(() => {
    const width = 1440;
    const cols = 54;
    const rows = 16;

    const points: { x: number; y: number }[][] = [];

    // Calculate coordinates with 3D warping and perspective compression
    for (let j = 0; j <= rows; j++) {
      const rowPoints = [];
      const vLinear = j / rows;
      // Perspective foreshortening: compress rows towards the top/depth
      const v = Math.pow(vLinear, 1.8); // 0 to 1
      
      for (let i = 0; i <= cols; i++) {
        const u = i / cols; // 0 to 1

        // Horizontal perspective skew
        const xSkew = Math.sin(u * Math.PI * 1.5 + v * Math.PI * 0.4) * 15 * (0.3 + 0.7 * v);

        // Grid width perspective convergence (narrower at the top, wider at the bottom)
        const leftX = width * (0.42 - v * 0.12);
        const rightX = width * (0.85 + v * 0.16);
        const x = leftX + u * (rightX - leftX) + xSkew;

        // Base height curves: background is higher up (y=130), foreground is lower (y=320)
        const baseY = 130 + v * 190;

        // Upward rise concentrated on the right side (u -> 1.0)
        // Background rows curve up more dramatically (145px) than foreground rows (60px)
        const riseAmount = 145 - v * 85;
        const rightRise = Math.pow(u, 2.2) * riseAmount;

        // Overlay sine waves, stronger on the right for organic texture
        const waveRightWeight = Math.sqrt(u);
        const wave1 = Math.sin(u * Math.PI * 3.5 - 0.5) * 20 * waveRightWeight * (0.2 + 0.8 * v);
        const wave2 = Math.cos(u * Math.PI * 1.8 + 0.4) * 10 * waveRightWeight * (0.4 + 0.6 * v);

        const y = baseY - rightRise + wave1 + wave2;
        rowPoints.push({ x, y });
      }
      points.push(rowPoints);
    }

    // Build SVG Path strings for horizontal lines
    const hPaths = [];
    for (let j = 0; j <= rows; j++) {
      let d = `M ${points[j][0].x.toFixed(1)},${points[j][0].y.toFixed(1)}`;
      for (let i = 1; i <= cols; i++) {
        d += ` L ${points[j][i].x.toFixed(1)},${points[j][i].y.toFixed(1)}`;
      }
      // Fainter opacity for background lines (small j) to simulate depth fog
      const opacity = (0.05 + Math.pow(j / rows, 2) * 0.38).toFixed(3);
      hPaths.push({ d, opacity });
    }

    // Build SVG Path strings for vertical lines
    const vPaths = [];
    for (let i = 0; i <= cols; i++) {
      const u = i / cols;
      let d = `M ${points[0][i].x.toFixed(1)},${points[0][i].y.toFixed(1)}`;
      for (let j = 1; j <= rows; j++) {
        d += ` L ${points[j][i].x.toFixed(1)},${points[j][i].y.toFixed(1)}`;
      }
      // Fade edges and fade out completely on the left side
      const edgeFade = Math.sin(u * Math.PI);
      const uFade = Math.pow(u, 1.2);
      const opacity = (0.35 * edgeFade * uFade).toFixed(3);
      vPaths.push({ d, opacity });
    }

    return { horizontalPaths: hPaths, verticalPaths: vPaths };
  }, []);

  return (
    <div className={`relative w-full select-none pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-bottom"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGridGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="35%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#ec4899" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#f43f5e" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="1.0" />
          </linearGradient>
          {/* Subtle overlay shading gradient for background contrast */}
          <radialGradient id="bgGlow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.05)" />
            <stop offset="60%" stopColor="rgba(244, 63, 94, 0.01)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>
        </defs>

        {/* Ambient background glow */}
        <rect width="1440" height="350" fill="url(#bgGlow)" />

        {/* Horizontal Wave Lines */}
        {horizontalPaths.map((path, idx) => (
          <path
            key={`h-${idx}`}
            d={path.d}
            stroke="url(#waveGridGrad)"
            strokeWidth="0.8"
            strokeOpacity={path.opacity}
          />
        ))}

        {/* Vertical Curved Perspective Lines */}
        {verticalPaths.map((path, idx) => (
          <path
            key={`v-${idx}`}
            d={path.d}
            stroke="url(#waveGridGrad)"
            strokeWidth="0.6"
            strokeOpacity={path.opacity}
          />
        ))}
      </svg>
    </div>
  );
}
