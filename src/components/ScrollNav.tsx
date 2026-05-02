"use client";
import { useEffect, useState } from "react";

const sections = ["hero", "adim-adim", "bilgi-kosesi", "bagis-noktalari"];

export default function ScrollNav() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let maxVisibleIdx = 0;
      let minDistance = Infinity;

      sections.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // We look for the section closest to the top of the viewport
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            maxVisibleIdx = idx;
          }
        }
      });
      setCurrentIdx(maxVisibleIdx);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (idx: number) => {
    if (idx >= 0 && idx < sections.length) {
      const el = document.getElementById(sections[idx]);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      <button 
        onClick={() => scrollTo(currentIdx - 1)}
        disabled={currentIdx === 0}
        className="p-3 bg-white hover:bg-orange-500 hover:text-white text-orange-500 rounded-full shadow-xl transition-all disabled:opacity-0 disabled:pointer-events-none"
        aria-label="Yukarı"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <button 
        onClick={() => scrollTo(currentIdx + 1)}
        disabled={currentIdx === sections.length - 1}
        className="p-3 bg-white hover:bg-orange-500 hover:text-white text-orange-500 rounded-full shadow-xl transition-all disabled:opacity-0 disabled:pointer-events-none"
        aria-label="Aşağı"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
