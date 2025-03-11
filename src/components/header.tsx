"use client";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import { Logo } from "~/components/logo";
import { useLandbot } from "~/hooks/useLandbot";
import { cn } from "~/lib/utils";
import { NavLink } from "./nav-link";
import { Button } from "./ui/button";
import {
  Popover as PopoverComponent,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";

function MobileNavIcon({
  open,
  isScrolled,
}: {
  open: boolean;
  isScrolled?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0",
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0",
        )}
      />
    </svg>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="block w-full p-2 text-white"
    >
      {children}
    </Popover.Button>
  );
}

function MobileNavigation({ isScrolled }: { isScrolled?: boolean }) {
  const { openChat } = useLandbot();

  return (
    <Popover>
      <Popover.Button
        className="ui-not-focus-visible:outline-none relative z-10 flex h-8 w-8 items-center justify-center"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} isScrolled={isScrolled} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/thuis">Thuis</MobileNavLink>
            <MobileNavLink href="/bedrijf">Zakelijk</MobileNavLink>
            <MobileNavLink href="/products">Producten</MobileNavLink>
            <OverOnsNavMobile />
            <hr className="m-2 border-slate-300/40" />
            <div className="p-2">
              <Button
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={openChat}
              >
                Gratis offerte
              </Button>
            </div>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function OverOnsNav() {
  return (
    <PopoverComponent>
      <PopoverTrigger className="w-fit">
        <div
          className={cn(
            "inline-flex items-center rounded px-2 py-1.5 text-sm font-medium text-white",
            "transition-colors duration-200 ease-in-out",
            "hover:bg-gray-50 hover:text-gray-900",
          )}
        >
          Over ons
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex w-full flex-col items-start md:gap-x-6">
        <NavLink className="text-gray-800" href="/over-ons">
          Over Laadexpert
        </NavLink>
        {/* <NavLink href="/realisaties">Realisaties</NavLink> */}
        <NavLink className="text-gray-800" href="/blog">
          Blog
        </NavLink>
      </PopoverContent>
    </PopoverComponent>
  );
}

function OverOnsNavMobile() {
  return (
    <PopoverComponent>
      <PopoverTrigger className="block w-fit p-2">Over Ons</PopoverTrigger>
      <PopoverContent className="flex w-full flex-col items-start md:gap-x-6">
        <MobileNavLink href="/over-ons">Over Laadexpert</MobileNavLink>
        {/* <MobileNavLink href="/realisaties">Realisaties</MobileNavLink> */}
        <MobileNavLink href="/blog">Blog</MobileNavLink>
      </PopoverContent>
    </PopoverComponent>
  );
}

export function Header({ empty }: { empty?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [_prevScrollPos, setPrevScrollPos] = useState(0);
  const { openChat } = useLandbot();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-[9999] flex h-16 w-full items-center transition-all duration-300",
        isScrolled ? "bg-[#1C3C36]/80" : "bg-[#1C3C36]",
        "shadow-sm backdrop-blur-lg",
      )}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex h-full max-w-5xl flex-1 items-center justify-between px-6 lg:justify-start lg:px-0"
      >
        <div className="flex h-full items-center">
          <div className="mr-10 flex h-full items-center">
            <Link href="/" aria-label="Home" className="h-8">
              <Logo />
            </Link>
          </div>
        </div>
        <div className="hidden space-x-3 lg:flex lg:flex-1 lg:justify-end">
          {!empty && (
            <>
              <div className="flex items-center md:gap-x-6">
                <NavLink href="/thuis">Thuis</NavLink>
                <NavLink href="/bedrijf">Zakelijk</NavLink>
                <NavLink href="/products">Producten</NavLink>
                <OverOnsNav />
              </div>
              <Button variant="secondary" size="sm" onClick={openChat}>
                Gratis offerte
              </Button>
            </>
          )}
        </div>
        {!empty && (
          <div className="flex lg:hidden">
            <MobileNavigation />
          </div>
        )}
      </nav>
    </header>
  );
}
