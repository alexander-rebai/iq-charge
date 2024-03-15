"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "~/components/container";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { getImages } from "../_actions/cloudinary";

const Realisations = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const data = await getImages();
      setImages(data);
    };

    void fetchImages();
  }, []);

  return (
    <>
      <Header />
      <Container className="mb-12 mt-36">
        {images.length === 0 && (
          <div
            role="status"
            className="flex h-full w-full items-center justify-center"
          >
            <svg
              aria-hidden="true"
              className="h-16 w-16 animate-spin fill-primary text-gray-200 dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.length >= 1 &&
            images.map((image, idx) => (
              <Dialog key={idx}>
                <DialogTrigger className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in outline-none after:pointer-events-none after:absolute after:inset-0 after:rounded-lg">
                  <Image
                    alt="Realisatie IQ-Charge"
                    className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    src={image}
                    width={720}
                    height={480}
                    sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
                  />
                </DialogTrigger>
                <DialogContent>
                  <Image
                    alt="Realisatie IQ-Charge"
                    className="rounded-lg"
                    src={image}
                    width={720}
                    height={480}
                    sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
                  />
                </DialogContent>
              </Dialog>
            ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Realisations;
