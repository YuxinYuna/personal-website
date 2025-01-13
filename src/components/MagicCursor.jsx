// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";

const MagicCursor = () => {
  const canvasRef = useRef(null);
  const hideCursorRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const particles = [];

    // Helper functions
    const random = (min, max) => Math.random() * (max - min) + min;

    class Particle {
      constructor(x, y) {
        const speedMultiplier = 0.5; // Adjust this value to control speed globally
        this.speedX = random(-1.5, 1.5) * speedMultiplier;
        this.speedY = random(-1.5, 1.5) * speedMultiplier;
        this.x = x;
        this.y = y;
        this.size = random(0.1,2); // Particle size
        this.opacity = 1;
        this.color = `rgba(${Math.floor(random(100, 255))}, ${Math.floor(
          random(50, 200)
        )}, ${Math.floor(random(100, 255))}, ${this.opacity})`;
        // this.color=`rgb(255,1,234)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.04; // Gradually fade
        if (this.opacity < 0) this.opacity = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        // ctx.shadowColor = this.color; // Glow effect
        // ctx.shadowBlur = 20;
        ctx.fill();
      }
    }

    const handleMouseMove = (event) => {
      if (!hideCursorRef.current) {
        const { clientX, clientY } = event;
        for (let i = 0; i < 5; i++) {
          particles.push(new Particle(clientX, clientY));
        }
      }
    };

    const handleMouseOver = (event) => {
      if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        hideCursorRef.current = true; // Hide cursor effect over inputs
      }
    };

    const handleMouseOut = (event) => {
      if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        hideCursorRef.current = false; // Show cursor effect when leaving inputs
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        if (particle.opacity <= 0) {
          particles.splice(index, 1); // Remove faded particles
        } else {
          particle.update();
          particle.draw();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    ></canvas>
  );
};

export default MagicCursor;