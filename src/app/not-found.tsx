import Link from "next/link";

import { Logo } from "~/components/logo";

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-medium text-gray-900">Page not found</h1>
      <p className="mt-3 text-sm text-gray-700">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href="/" className="mt-10 text-lg font-medium text-primary">
        Go back home
      </Link>
    </div>
  );
}
