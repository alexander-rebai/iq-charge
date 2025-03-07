import { Suspense } from "react";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export default async function LayoutBlog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-base-100 min-h-screen">
      <Suspense>
        <Header />
      </Suspense>

      <main className="mx-auto mt-16 max-w-6xl p-4 sm:p-6 lg:p-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
