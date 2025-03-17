"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const TeamCards = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const mountedRef = useRef(false);

  // Safe state update that checks if component is mounted
  const safeSetActive = useCallback(
    (newIndexOrFn: number | ((prev: number) => number)) => {
      if (mountedRef.current) {
        setActive(newIndexOrFn);
      }
    },
    [],
  );

  const handleNext = useCallback(() => {
    if (isTransitioning || !mountedRef.current) return;

    setIsTransitioning(true);
    safeSetActive((prev: number) => (prev + 1) % testimonials.length);

    // Reset transition state after animation would complete
    setTimeout(() => {
      if (mountedRef.current) {
        setIsTransitioning(false);
      }
    }, 400);
  }, [testimonials.length, isTransitioning, safeSetActive]);

  const handlePrev = useCallback(() => {
    if (isTransitioning || !mountedRef.current) return;

    setIsTransitioning(true);
    safeSetActive(
      (prev: number) => (prev - 1 + testimonials.length) % testimonials.length,
    );

    // Reset transition state after animation would complete
    setTimeout(() => {
      if (mountedRef.current) {
        setIsTransitioning(false);
      }
    }, 400);
  }, [testimonials.length, isTransitioning, safeSetActive]);

  // Setup and cleanup autoplay
  useEffect(() => {
    mountedRef.current = true;

    if (autoplay && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        if (mountedRef.current && !isTransitioning) {
          handleNext();
        }
      }, 10000);
    }

    return () => {
      mountedRef.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoplay, handleNext, isTransitioning]);

  // Get current testimonial safely
  const currentTestimonial = testimonials[active] ?? testimonials[0];

  if (!currentTestimonial) return null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 font-sans antialiased md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Image section */}
        <div>
          <div className="relative h-80 w-full overflow-hidden rounded-3xl">
            {testimonials.map((testimonial, index) => {
              const isActiveSlide = index === active;

              return (
                <div
                  key={testimonial.src}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    isActiveSlide
                      ? "z-10 translate-x-0 scale-100 opacity-100"
                      : "-z-10 translate-x-full scale-95 opacity-0"
                  }`}
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    priority={isActiveSlide}
                    fetchPriority={isActiveSlide ? "high" : "low"}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-contain object-center"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-col justify-between py-4">
          <div className="transition-opacity duration-300">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {currentTestimonial.name}
            </h3>
            <p className="w-fit bg-primary-light/60 text-sm font-semibold">
              {currentTestimonial.designation}
            </p>
            <p className="mt-2 text-lg text-gray-500 dark:text-neutral-300">
              {currentTestimonial.quote}
            </p>
          </div>

          {/* Navigation controls */}
          <div className="mt-4 flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 transition-colors disabled:opacity-50 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 transition-colors disabled:opacity-50 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>

            {/* Indicator dots */}
            <div className="ml-2 flex items-center gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning && index !== active) {
                      setIsTransitioning(true);
                      safeSetActive(index);
                      setTimeout(() => {
                        if (mountedRef.current) {
                          setIsTransitioning(false);
                        }
                      }, 400);
                    }
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === active
                      ? "w-4 bg-primary-light"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
