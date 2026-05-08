import React from "react";
import { Mail } from "lucide-react";

export default function UnderDevelopment() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + "px",
              height: Math.random() * 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              opacity: Math.random() * 0.7 + 0.3,
              animation: `drift ${50 + Math.random() * 70}s ease-in-out infinite alternate, twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s, ${Math.random() * 4}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* Earth horizon at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-300 to-transparent rounded-full blur-3xl opacity-70" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-5xl w-full px-4 md:px-8">
        {/* Astronaut side */}
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src="/astronaut1.png"
            alt="Astronaut"
            className="w-64 h-64 object-contain astronaut-float drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)]"
          />
        </div>

        {/* Text side */}
        <div className="md:w-2/3 text-center md:text-right space-y-6">
          {/* Oops heading */}
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">Oops!</p>
          </div>

          {/* Large 404-style text */}
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
              Under
              <br />
              Development
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              This page is currently under maintenance. Please check back soon.
            </p>
            <p className="text-sm md:text-base text-gray-400">
              I'm switching careers and learning new skills, and this portfolio
              is being updated with exciting new content. Thank you for your patience!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end pt-4">
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full text-sm md:text-base font-semibold transition-colors border-2 border-white"
            >
              <Mail size={20} />
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* CSS animation for twinkling stars */}
      <style>{`
        @keyframes astronaut-float {
          0%, 100% {
            transform: translateY(0px) rotate(-2deg);
          }
          50% {
            transform: translateY(-14px) rotate(2deg);
          }
        }

        .astronaut-float {
          animation: astronaut-float 6s ease-in-out infinite;
        }

        @keyframes drift {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(12px, -16px, 0);
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
