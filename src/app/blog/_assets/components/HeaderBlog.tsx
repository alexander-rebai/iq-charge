"use client";

import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
// @ts-expect-error - Module '"../content"' has no exported member 'categories'
import { categories } from "../content";

// Define proper type for categories
type Category = {
  slug: string;
  title: string;
  description: string;
};

const HeaderBlog = () => {
  // Cast categories to the proper type
  const categoriesData = categories as Category[];

  return (
    <header className="bg-base-100 border-base-300 sticky top-0 z-30 w-full border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://dx8uea1j8p9gd.cloudfront.net/public/logo.png"
            alt="Laadexpert Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">Laadexpert</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/blog"
            className="link-hover link text-base-content/80 hover:text-base-content"
          >
            Alle Artikelen
          </Link>

          {/* CATEGORIES DROPDOWN */}
          <Popover className="relative z-30">
            {({ open }) => (
              <>
                <Popover.Button
                  className="link-hover link text-base-content/80 hover:text-base-content flex items-center gap-1"
                  title="Open Blog categorieën"
                >
                  Categorieën
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-5 w-5 duration-200 ${
                      open ? "rotate-180 transform" : ""
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 mt-3 w-screen max-w-xs transform px-2 sm:px-0">
                    <div className="ring-base-content overflow-hidden rounded-lg shadow-lg ring-1 ring-opacity-5">
                      <div className="bg-base-100 relative grid gap-6 p-6">
                        {categoriesData.map((category) => (
                          <Link
                            key={category.slug}
                            href={`/blog/category/${category.slug}`}
                            className="hover:bg-base-200 -m-3 flex items-center rounded-lg p-3 transition duration-150 ease-in-out"
                          >
                            <div className="ml-3">
                              <p className="text-base-content text-base font-medium">
                                {category.title}
                              </p>
                              <p className="text-base-content/70 mt-1 text-sm">
                                {category.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            Offerte Aanvragen
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderBlog;
