"use client";

import { useDrag } from "@use-gesture/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  imageOnlyArticles,
  type articleType,
} from "~/app/realisaties/_assets/content";

export function RealisationsCarousel({
  variant,
}: {
  variant: "desktop" | "mobile";
}) {
  // // Filter articles to only show those with "Realisaties" category
  // const filteredArticles = articles.filter((article) =>
  //   article.categories?.some((category) => category.title === "Realisaties"),
  // );

  const images = imageOnlyArticles.map((image) => ({
    image,
    title: "Realisatie",
  }));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const slideRef = useRef(currentSlide);
  const dragStartRef = useRef(0);

  // Update the ref when currentSlide changes
  useEffect(() => {
    slideRef.current = currentSlide;
  }, [currentSlide]);

  const handlePagination = (direction: "left" | "right") => {
    const newSlide =
      direction === "right"
        ? (slideRef.current + 1) % images.length
        : (slideRef.current - 1 + images.length) % images.length;

    setCurrentSlide(newSlide);

    // Reset the auto-advance timer when user manually changes slides
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = setInterval(() => {
        setCurrentSlide((curr) => (curr + 1) % images.length);
      }, 5000);
    }
  };

  const bind = useDrag(
    ({ down, movement: [mx], first, last, velocity: [vx] }) => {
      if (first) {
        setIsDragging(true);
        dragStartRef.current = currentSlide;
        if (progressRef.current) {
          clearInterval(progressRef.current);
        }
      }

      const slideWidth = variant === "desktop" ? 240 : 200;
      const slideMove = -mx / slideWidth;
      const slideMoveClamped = Math.min(
        Math.max(dragStartRef.current + slideMove, 0),
        images.length - 1,
      );

      if (down) {
        setCurrentSlide(Math.round(slideMoveClamped));
      }

      if (last) {
        setIsDragging(false);
        const finalSlide = Math.round(slideMoveClamped);
        setCurrentSlide(finalSlide);

        // Restart auto-advance
        progressRef.current = setInterval(() => {
          setCurrentSlide((curr) => (curr + 1) % images.length);
        }, 5000);
      }
    },
    {
      axis: "x",
      filterTaps: true,
      bounds: { left: -1000, right: 1000 },
    },
  );

  useEffect(() => {
    // Auto advance slides every 5 seconds
    progressRef.current = setInterval(() => {
      setCurrentSlide((curr) => (curr + 1) % images.length);
    }, 5000);

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, []);

  // Function to safely get image URL
  const getImageUrl = (article: articleType) => {
    return article?.image?.urlRelative ?? "";
  };

  // Function to format title for display in carousel
  const formatTitle = (title: string) => {
    const words = title.split(" ");

    // For first line, take first 2 words or fewer if title is shorter
    const firstLine = words.slice(0, Math.min(2, words.length)).join(" ");

    // For second line, take next 2 words and add ellipsis if there are more words
    let secondLine = "";
    if (words.length > 2) {
      secondLine = words.slice(2, 4).join(" ");
      if (words.length > 4) {
        secondLine += "...";
      }
    }

    return { firstLine, secondLine };
  };

  // If no articles with "Realisaties" category, don't render the carousel
  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className={`${
        variant === "desktop"
          ? "absolute bottom-12 right-16"
          : "relative h-[500px] w-full overflow-x-hidden"
      }`}
    >
      <div
        className={`relative flex h-[400px] touch-pan-y items-center ${
          variant === "mobile" ? "" : ""
        }`}
      >
        <div className="relative h-full">
          {images.map((image, index) => {
            const isActive = index === currentSlide;
            const offset =
              variant === "desktop"
                ? ((index - currentSlide + images.length) % images.length) * 320
                : ((index - currentSlide + images.length) % images.length) *
                  295;

            // const { firstLine, secondLine } = formatTitle(image.title);

            return (
              <div
                key={index}
                {...bind()}
                className={`z-[999] duration-300 ${
                  variant === "desktop"
                    ? "absolute right-96"
                    : "absolute left-0"
                } top-1/2 transform rounded-xl bg-cover bg-center shadow-lg transition-all ease-in-out hover:border-2 hover:border-primary-foreground ${
                  isActive ? "z-20" : "z-10"
                } ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                style={{
                  backgroundImage: `url(${image.image})`,
                  transform:
                    variant === "desktop"
                      ? `translate(${((index - currentSlide + images.length) % images.length) * 260}px, -50%) scale(${isActive ? 1 : 0.95})`
                      : `translate(${((index - currentSlide + images.length) % images.length) * 260}px, -50%) scale(${isActive ? 1 : 0.95})`,
                  opacity: offset > 1080 ? 0 : 1,
                  height: variant === "desktop" ? "320px" : "320px",
                  width: variant === "desktop" ? "250px" : "250px",
                  touchAction: "none", // Prevent default touch behaviors
                  userSelect: "none", // Prevent text selection during drag
                }}
              >
                {/* <div className="absolute bottom-0 left-0 w-full rounded-b-xl bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  {article.categories?.length > 0 && (
                    <p className="text-sm font-medium text-gray-300">
                      {article.categories?.[0]?.title}
                    </p>
                  )}
                  <h3 className="truncate text-2xl font-bold leading-tight">
                    {firstLine}
                  </h3>
                  {secondLine && (
                    <h3 className="truncate text-2xl font-bold leading-tight">
                      {secondLine}
                    </h3>
                  )}
                </div> */}
              </div>
            );
          })}
        </div>

        {/* Controls Container */}
        <div
          className={`${
            variant === "desktop"
              ? "absolute -bottom-8 right-32"
              : "absolute -bottom-16 left-0 right-0 mx-auto flex justify-center"
          } flex items-center gap-8`}
        >
          {/* Navigation */}
          <div className="z-50 flex items-center gap-5">
            <button
              onClick={() => handlePagination("left")}
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                variant === "desktop"
                  ? "border-white/30 hover:border-white/50"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            >
              <ChevronLeftIcon
                className={`h-6 w-6 ${
                  variant === "desktop" ? "text-white/60" : "text-gray-700"
                }`}
              />
            </button>
            <button
              onClick={() => handlePagination("right")}
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                variant === "desktop"
                  ? "border-white/30 hover:border-white/50"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            >
              <ChevronRightIcon
                className={`h-6 w-6 ${
                  variant === "desktop" ? "text-white/60" : "text-gray-700"
                }`}
              />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="hidden h-12 w-[320px] items-center md:flex">
            <p
              className={`${
                variant === "desktop" ? "text-muted" : "text-gray-700"
              }`}
            >
              Onze realisaties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
