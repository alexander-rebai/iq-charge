"use client";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import { ChevronDown } from "lucide-react";
import { Logo } from "~/components/logo";
import { cn } from "~/lib/utils";
import { NavLink } from "./nav-link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function MobileNavIcon({ open }: { open: boolean }) {
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

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="ui-not-focus-visible:outline-none relative z-10 flex h-8 w-8 items-center justify-center"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
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
            <MobileNavLink href="/#over">Over ons</MobileNavLink>
            <MobileNavLink href="/realisaties">Realisaties</MobileNavLink>
            <MobileNavLink href="/#contact">Contact</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 rounded-xl px-2 py-1 text-lg text-slate-700 outline-none hover:bg-primary-light hover:text-slate-900">
                Onze laadoplossingen <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-screen">
                <div className="grid grid-cols-2">
                  <div>
                    <h2 className="m-2 text-center font-medium">
                      Locatie van Installatie
                    </h2>
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                    >
                      <a href="/particulier">
                        Residentieel{" "}
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                    >
                      <a href="/bedrijf">
                        Kantoor{" "}
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </a>
                    </DropdownMenuItem>
                  </div>
                  <div>
                    <h2 className="m-2 text-center font-medium">Producten</h2>
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                    >
                      <a href="/products/alfen">
                        Alfen{" "}
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                    >
                      <a href="/products/huawei">
                        Huawei{" "}
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                    >
                      <a href="/products/wallbox">
                        Wallbox
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </a>
                    </DropdownMenuItem>{" "}
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                    >
                      <a href="/products/smappee">
                        Smappee
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </a>
                    </DropdownMenuItem>{" "}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
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
  }, [prevScrollPos]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-12 w-full items-center",
        "border-b border-gray-200 bg-white/90 backdrop-blur-sm",
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
                {/* <DropdownMenu>
                  <DropdownMenuTrigger
                    className={cn(
                      "flex items-center gap-1 rounded text-sm font-medium text-gray-700 hover:text-gray-900",
                    )}
                  >
                    Onze laadoplossingen <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[28rem]">
                    <div className="grid w-full grid-cols-2">
                      <div>
                        <h2 className="m-2 text-center font-medium">
                          Locatie van Installatie
                        </h2>
                        <DropdownMenuItem
                          asChild
                          className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                        >
                          <a href="/particulier">
                            Residentieel{" "}
                            <span aria-hidden="true" className="ml-2">
                              →
                            </span>
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          asChild
                          className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                        >
                          <a href="/bedrijf">
                            Kantoor{" "}
                            <span aria-hidden="true" className="ml-2">
                              →
                            </span>
                          </a>
                        </DropdownMenuItem>
                      </div>
                      <div>
                        <h2 className="m-2 text-center font-medium">
                          Producten
                        </h2>
                        <DropdownMenuItem
                          asChild
                          className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                        >
                          <a href="/products/alfen">
                            Alfen{" "}
                            <span aria-hidden="true" className="ml-2">
                              →
                            </span>
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          asChild
                          className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                        >
                          <a href="/products/huawei">
                            Huawei{" "}
                            <span aria-hidden="true" className="ml-2">
                              →
                            </span>
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          asChild
                          className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                        >
                          <a href="/products/wallbox">
                            Wallbox
                            <span aria-hidden="true" className="ml-2">
                              →
                            </span>
                          </a>
                        </DropdownMenuItem>{" "}
                        <DropdownMenuItem
                          asChild
                          className="cursor-pointer justify-start rounded-xl px-2 py-3 font-medium text-muted-foreground"
                        >
                          <a href="/products/smappee">
                            Smappee
                            <span aria-hidden="true" className="ml-2">
                              →
                            </span>
                          </a>
                        </DropdownMenuItem>{" "}
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu> */}
                <NavLink href="/bedrijf">Zakelijk</NavLink>
                <NavLink href="/thuis">Thuis</NavLink>
                <NavLink href="/products">Producten</NavLink>
                {/* <NavLink href="/realisaties">Realisaties</NavLink> */}
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
