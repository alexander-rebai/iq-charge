"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { articles, type articleType } from "~/app/realisaties/_assets/content";

export function RealisationsCarousel() {
  // Filter articles to only show those with "Realisaties" category
  const filteredArticles = articles.filter((article) =>
    article.categories?.some((category) => category.title === "Realisaties"),
  );

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
        ? (slideRef.current + 1) % filteredArticles.length
        : (slideRef.current - 1 + filteredArticles.length) %
          filteredArticles.length;

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
  }, [handlePagination]);

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
  if (filteredArticles.length === 0) {
    return null;
  }

  return (
    <div className="absolute bottom-12 right-16">
      <div className="relative flex h-[400px] items-center">
        <div className="relative h-full">
          {filteredArticles.map((article, index) => {
            const isActive = index === currentSlide;
            const offset =
              ((index - currentSlide + filteredArticles.length) %
                filteredArticles.length) *
              240;

            const { firstLine, secondLine } = formatTitle(article.title);

            return (
              <Link
                key={index}
                href={`/realisaties/${article.slug}`}
                className={`duration-2400 absolute right-96 top-1/2 h-[280px] w-[220px] -translate-y-1/2 transform cursor-pointer rounded-xl bg-cover bg-center shadow-lg transition-all ease-in-out hover:border-2 hover:border-primary-foreground ${
                  isActive ? "z-20" : "z-10"
                }`}
                style={{
                  backgroundImage: `url(${getImageUrl(article)})`,
                  transform: `translate(${offset}px, -50%) scale(${isActive ? 1 : 0.95})`,
                  opacity: offset > 960 ? 0 : 1,
                }}
              >
                <div className="absolute bottom-0 left-0 w-full rounded-b-xl bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
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
                </div>
              </Link>
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
                  width: `${((currentSlide + 1) / filteredArticles.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
