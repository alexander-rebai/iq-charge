import Link from "next/link";
import { cn } from "~/lib/utils";

export function NavLink({
  href,
  children,
  shouldShow,
}: {
  href: string;
  children: React.ReactNode;
  shouldShow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block rounded-xl px-2 py-1 text-lg text-slate-700 hover:bg-primary-light hover:text-slate-900",
        shouldShow && "text-white",
      )}
    >
      {children}
    </Link>
  );
}
