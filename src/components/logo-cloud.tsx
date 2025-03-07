"use client";

import { useEffect, useRef } from "react";

const logos = [
  { src: "/fotos/brands/smappee.jpeg", alt: "Partner 1" },
  { src: "/fotos/brands/wallbox.jpeg", alt: "Partner 4" },
  { src: "/fotos/brands/peblar.jpeg", alt: "Partner 3" },
  { src: "/fotos/brands/easee.jpeg", alt: "Partner 2" },
];

export default function LogoCloud() {
  const logoRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      const ul = logoRef.current;
      const clone = ul.cloneNode(true) as HTMLUListElement;
      clone.setAttribute("aria-hidden", "true");
      ul.parentElement?.appendChild(clone);
    }
  }, []);

  return (
    <div className="bg-white pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="inline-flex w-full flex-nowrap overflow-hidden">
          <ul
            ref={logoRef}
            className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          >
            {logos.map((logo, idx) => (
              <li key={`logo-${idx}`}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-64 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
