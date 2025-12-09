import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

const Robot = ({ onButtonClick }) => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  // Smooth springs for the movement
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Map mouse position to eye movement range
  // Assuming the robot is centered, we want limited movement (e.g., -10px to 10px)
  const eyeX = useTransform(smoothX, [0, window.innerWidth], [-8, 8]);
  const eyeY = useTransform(smoothY, [0, window.innerHeight], [-8, 8]);

  // Head slight rotation/tilt
  const headRotate = useTransform(smoothX, [0, window.innerWidth], [-10, 10]);
  const headX = useTransform(smoothX, [0, window.innerWidth], [-15, 15]);
  const headY = useTransform(smoothY, [0, window.innerHeight], [-10, 10]);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    const isMobile = checkMobile();

    if (!isMobile) {
      // Desktop: Follow Mouse
      const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    } else {
      // Mobile: Auto Dance
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        // Circular / Figure-8 motion
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const radius = 100;

        // Rhythmic movement
        const x = cx + Math.sin(elapsed * 2) * radius;
        const y = cy + Math.cos(elapsed * 3) * (radius * 0.5);

        mouseX.set(x);
        mouseY.set(y);
      }, 16); // ~60fps

      return () => clearInterval(interval);
    }
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center relative select-none pointer-events-none"
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-2xl"
        initial="rest"
        whileHover="hover"
      >
        {/* Antennas */}
        <motion.g
          style={{
            x: headX,
            y: headY,
            rotate: headRotate,
            transformOrigin: "100px 100px",
          }}
        >
          <line
            x1="100"
            y1="50"
            x2="100"
            y2="30"
            stroke="#52525b"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="100"
            cy="25"
            r="5"
            fill="#f43f5e"
            className="animate-pulse"
          />

          {/* Head Shape */}
          <rect
            x="60"
            y="50"
            width="80"
            height="70"
            rx="15"
            fill="#27272a" // zinc-800
            stroke="#52525b" // zinc-600
            strokeWidth="3"
          />

          {/* Face Screen (Black Glass) */}
          <rect
            x="70"
            y="65"
            width="60"
            height="40"
            rx="8"
            fill="#000000"
            opacity="0.8"
          />

          {/* Eyes Container */}
          <g transform="translate(100, 85)">
            {/* Left Eye */}
            <motion.circle
              cx="-15"
              cy="0"
              r="6"
              fill="#3b82f6" // blue-500
              style={{ x: eyeX, y: eyeY }}
            />
            {/* Right Eye */}
            <motion.circle
              cx="15"
              cy="0"
              r="6"
              fill="#3b82f6"
              style={{ x: eyeX, y: eyeY }}
            />
          </g>

          {/* Mouth */}
          <motion.path
            d="M 90 95 Q 100 100 110 95"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            style={{ opacity: 0.6 }}
          />
        </motion.g>

        {/* Body (Stationary-ish, maybe subtle breathing) */}
        <motion.g
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M 70 130 Q 100 120 130 130 L 130 180 Q 100 190 70 180 Z"
            fill="#3f3f46" // zinc-700
            stroke="#52525b"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Details on body */}
          <circle
            cx="100"
            cy="155"
            r="12"
            fill="#27272a"
            stroke="#52525b"
            strokeWidth="2"
          />
          {/* Interactive Button */}
          <motion.circle
            cx="100"
            cy="155"
            r="6"
            fill="#10b981"
            className="animate-pulse duration-1000 cursor-pointer pointer-events-auto hover:brightness-125"
            onClick={onButtonClick}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default Robot;
