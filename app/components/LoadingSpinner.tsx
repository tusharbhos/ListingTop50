"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingSpinner() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="relative w-40 h-40">
        <div 
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `linear-gradient(to right, var(--gradientFrom), var(--primary), var(--gradientTo))`
          }}
        ></div>
        
        <div 
          className="absolute inset-1 rounded-full border-4 border-dashed"
          style={{ 
            animation: 'spin 8s linear infinite',
            borderColor: 'var(--primary) transparent var(--primary) transparent'
          }}
        ></div>
        
        <div 
          className="absolute inset-2 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, var(--gradientFrom), var(--primary), var(--gradientTo), var(--gradientFrom))`,
            animation: 'spin 6s linear infinite reverse'
          }}
        ></div>
        
        <div 
          className="absolute inset-3 rounded-full border-4"
          style={{ 
            animation: 'spin 4s linear infinite',
            borderColor: 'var(--secondary) var(--primary) var(--gradientFrom) var(--gradientTo)'
          }}
        ></div>
        
        <div 
          className="absolute inset-4 rounded-full animate-pulse"
          style={{
            background: `linear-gradient(to bottom right, var(--gradientFrom), var(--primary))`
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center animate-bounce-slow">
            <Image
              src="https://img.icons8.com/fluency/96/null/real-estate.png"
              alt="Real Estate"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            
            <div 
              className="absolute inset-0 rounded-full opacity-20 animate-ping"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
          </div>
        </div>

        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${angle + rotation}deg) translateX(60px)`,
              opacity: 0.6,
              animation: 'pulse 1.5s ease-in-out infinite',
              animationDelay: `${index * 0.2}s`,
              backgroundColor: "var(--primary)"
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
}