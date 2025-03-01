"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { realisationsCarouselData } from "~/data/carouselData";

export function RealisationsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const slideRef = useRef(currentSlide);

  // Update the ref when currentSlide changes
  useEffect(() => {
    slideRef.current = currentSlide;
  }, [currentSlide]);

  const handlePagination = (direction: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newSlide =
      direction === "right"
        ? (slideRef.current + 1) % realisationsCarouselData.length
        : (slideRef.current - 1 + realisationsCarouselData.length) %
          realisationsCarouselData.length;

    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    // Auto advance slides every 5 seconds
    progressRef.current = setInterval(() => {
      handlePagination("right");
    }, 5000);

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute bottom-12 right-16">
      <div className="relative flex h-[400px] items-center">
        <div className="relative h-full">
          {realisationsCarouselData.map((item, index) => {
            const isActive = index === currentSlide;
            const offset =
              ((index - currentSlide + realisationsCarouselData.length) %
                realisationsCarouselData.length) *
              240;

            return (
              <div
                key={index}
                className={`duration-2400 absolute right-96 top-1/2 h-[280px] w-[220px] -translate-y-1/2 transform cursor-pointer rounded-xl bg-cover bg-center shadow-lg transition-all ease-in-out hover:border-2 hover:border-primary-foreground ${
                  isActive ? "z-20" : "z-10"
                }`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  transform: `translate(${offset}px, -50%) scale(${isActive ? 1 : 0.95})`,
                  opacity: offset > 960 ? 0 : 1,
                }}
              >
                <div className="absolute bottom-0 left-0 w-full rounded-b-xl bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <p className="text-sm font-medium text-gray-300">
                    {item.place}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <h3 className="text-2xl font-bold leading-tight">
                    {item.title2}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls Container */}
        <div className="absolute -bottom-8 right-32 flex items-center gap-8">
          {/* Navigation */}
          <div className="z-50 flex items-center gap-5">
            <button
              onClick={() => handlePagination("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 transition-colors hover:border-white/50"
              disabled={isAnimating}
            >
              <ChevronLeftIcon className="h-6 w-6 text-white/60" />
            </button>
            <button
              onClick={() => handlePagination("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 transition-colors hover:border-white/50"
              disabled={isAnimating}
            >
              <ChevronRightIcon className="h-6 w-6 text-white/60" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex h-12 w-[320px] items-center">
            <div className="h-[3px] w-full bg-white/20">
              <div
                className="duration-2400 h-full bg-primary-light transition-all ease-in-out"
                style={{
                  width: `${((currentSlide + 1) / realisationsCarouselData.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
