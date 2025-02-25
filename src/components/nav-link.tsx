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
        "inline-flex items-center rounded px-2 py-1.5 text-sm font-medium text-gray-700",
        "transition-colors duration-200 ease-in-out",
        "hover:bg-gray-50 hover:text-gray-900",
        shouldShow && "text-white",
      )}
    >
      {children}
    </Link>
  );
}
