"use client";

import { useEffect, useRef } from "react";

const logos = [
  {
    src: "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/brands/smappee.jpeg",
    alt: "Partner 1",
  },
  {
    src: "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/brands/wallbox.jpeg",
    alt: "Partner 4",
  },
  {
    src: "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/brands/peblar.jpeg",
    alt: "Partner 3",
  },
  {
    src: "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/brands/easee.jpeg",
    alt: "Partner 2",
  },
  {
    src: "https://laadexpert.s3.eu-north-1.amazonaws.com/public/fotos/zaptec.png",
    alt: "Partner 5",
  },
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
