import Image from "next/image";

export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <Image
      src="/logo.png"
      width="105"
      height="105"
      alt="iq-charge-logo"
      priority
      className=" cursor-pointer"
    />
  );
}
