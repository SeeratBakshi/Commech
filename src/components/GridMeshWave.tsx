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
    const cols = 48;
    const rows = 14;

    const points: { x: number; y: number }[][] = [];

    // Calculate coordinates with 3D warping
    for (let j = 0; j <= rows; j++) {
      const rowPoints = [];
      const v = j / rows; // 0 to 1 (depth index)
      
      for (let i = 0; i <= cols; i++) {
        const u = i / cols; // 0 to 1 (horizontal index)

        // Skew X values slightly depending on Y depth to create a curved 3D perspective grid
        const xSkew = Math.sin(u * Math.PI * 2 + v * Math.PI * 0.5) * 20 * (0.2 + 0.8 * v);
        const x = u * width + xSkew;

        // Base height curves
        // The top of the mesh (v=0) starts higher up, bottom (v=1) is lower
        const baseY = 120 + v * 160;

        // Overlay multiple sine waves for organic fluid movement
        const wave1 = Math.sin(u * Math.PI * 3.2 - 0.4) * 35 * (0.15 + 0.85 * v);
        const wave2 = Math.cos(u * Math.PI * 1.5 + 0.8) * 15 * (0.3 + 0.7 * v);
        const wave3 = Math.sin(u * Math.PI * 5.0 + 1.2) * 6 * (v * v); // fine detail for foreground

        const y = baseY + wave1 + wave2 + wave3;
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
      // Fainter opacity for distant lines (small j) to simulate depth fog
      const opacity = (0.08 + (j / rows) * 0.28).toFixed(3);
      hPaths.push({ d, opacity });
    }

    // Build SVG Path strings for vertical lines
    const vPaths = [];
    for (let i = 0; i <= cols; i++) {
      let d = `M ${points[0][i].x.toFixed(1)},${points[0][i].y.toFixed(1)}`;
      for (let j = 1; j <= rows; j++) {
        d += ` L ${points[j][i].x.toFixed(1)},${points[j][i].y.toFixed(1)}`;
      }
      // Fade edges slightly
      const edgeFade = Math.sin((i / cols) * Math.PI);
      const opacity = ((0.06 + 0.22) * edgeFade).toFixed(3);
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
            <stop offset="0%" stopColor="#2563eb" /> {/* Blue */}
            <stop offset="35%" stopColor="#4f46e5" /> {/* Indigo */}
            <stop offset="70%" stopColor="#b91c1c" /> {/* Rose/Red */}
            <stop offset="100%" stopColor="#ea580c" /> {/* Orange */}
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
