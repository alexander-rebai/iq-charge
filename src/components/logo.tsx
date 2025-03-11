import Image from "next/image";

export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <Image
      src="/logo.png"
      alt="laadexpert-logo"
      width={105}
      height={105}
      priority
      className="h-full w-auto cursor-pointer object-contain"
    />
  );
}
