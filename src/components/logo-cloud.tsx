"use client";

import { useEffect, useRef } from "react";

const logos = [
  { src: "/fotos/smappee-certified.png", alt: "Partner 1" },
  { src: "/fotos/smappee-certified.png", alt: "Partner 2" },
  { src: "/fotos/smappee-certified.png", alt: "Partner 3" },
  { src: "/fotos/smappee-certified.png", alt: "Partner 4" },
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
            className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
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
