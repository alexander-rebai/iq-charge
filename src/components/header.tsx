"use client";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import { Logo } from "~/components/logo";
import { cn } from "~/lib/utils";
import { NavLink } from "./nav-link";
import { Button } from "./ui/button";

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
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavigation({ isScrolled }: { isScrolled?: boolean }) {
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
            <MobileNavLink href="/blog">Blog</MobileNavLink>
            <MobileNavLink href="/over-ons">Over ons</MobileNavLink>
            <MobileNavLink href="/products">Producten</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header({ empty }: { empty?: boolean }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 flex h-16 w-full items-center transition-all duration-300",
        "bg-white/80 shadow-sm backdrop-blur-md",
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
                <NavLink href="/bedrijf">Zakelijk</NavLink>
                <NavLink href="/thuis">Thuis</NavLink>
                <NavLink href="/over-ons">Over ons</NavLink>
                <NavLink href="/products">Producten</NavLink>
                <NavLink href="/blog">Blog</NavLink>
              </div>
              <Button variant="secondary" size="sm">
                Contact sales
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
