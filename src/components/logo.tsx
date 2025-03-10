import Image from "next/image";

export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <Image
      src="https://laadexpert.s3.eu-north-1.amazonaws.com/public/logo.png"
      alt="iq-charge-logo"
      width={105}
      height={105}
      priority
      className="h-full w-auto cursor-pointer object-contain"
    />
  );
}
