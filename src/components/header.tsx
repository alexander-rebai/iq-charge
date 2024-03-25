"use client";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Fragment } from "react";

import { ChevronDown } from "lucide-react";
import { Container } from "~/components/container";
import { Logo } from "~/components/logo";
import { NavLink } from "./nav-link";
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
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/#over">Over ons</MobileNavLink>
            <MobileNavLink href="/realisaties">Realisaties</MobileNavLink>
            <MobileNavLink href="/#contact">Contact</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 rounded-lg px-2 py-1 text-lg text-slate-700 outline-none hover:bg-primary-light hover:text-slate-900">
                Onze laadoplossingen <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80">
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer justify-start rounded-lg px-2 py-3 font-medium text-muted-foreground hover:bg-primary-light hover:text-slate-900"
                >
                  <a href="/products/alfen">Alfen</a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer justify-start rounded-lg px-2 py-3 font-medium text-muted-foreground hover:bg-primary-light hover:text-slate-900"
                >
                  <a href="/products/huawei">Huawei</a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer justify-start rounded-lg px-2 py-3 font-medium text-muted-foreground hover:bg-primary-light hover:text-slate-900"
                >
                  <a href="/products/wallbox">Wallbox</a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer justify-start rounded-lg px-2 py-3 font-medium text-muted-foreground hover:bg-primary-light hover:text-slate-900"
                >
                  <a href="/products/smappee">Smappee</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header({ empty }: { empty?: boolean }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-28 w-screen bg-primary-background/90 bg-opacity-90 shadow-sm backdrop-blur-sm">
      <Container>
        <nav className="relative z-50 flex select-none justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
            {!empty && (
              <div className="hidden items-center md:gap-x-6 lg:flex">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 rounded-lg px-2 py-1 text-lg text-slate-700 outline-none hover:bg-primary-light hover:text-slate-900">
                    Onze laadoplossingen <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer justify-start rounded-lg px-2 py-3 font-medium text-muted-foreground"
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
                      className="cursor-pointer justify-start rounded-lg px-2 py-3 font-medium text-muted-foreground"
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
                      className="cursor-pointer justify-start rounded-lg px-2 py-3 font-medium text-muted-foreground"
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
                      className="cursor-pointer justify-start rounded-lg px-2 py-3 font-medium text-muted-foreground"
                    >
                      <a href="/products/smappee">
                        Smappee
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </a>
                    </DropdownMenuItem>{" "}
                  </DropdownMenuContent>
                </DropdownMenu>
                <NavLink href="/#over">Over ons</NavLink>
                <NavLink href="/realisaties">Realisaties</NavLink>
                <NavLink href="/#contact">Contact</NavLink>
              </div>
            )}
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {!empty && (
              <>
                <a
                  href="/offerte"
                  className="rounded-3xl border-2 border-primary-foreground bg-primary-light  px-3.5 py-2 text-lg font-medium text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Vraag een offerte
                </a>
                <div className="-mr-1 lg:hidden">
                  <MobileNavigation />
                </div>
              </>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}
