"use server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function getImages() {
  const objects = (await cloudinary.search
    .expression("folder:Test_Vercel")
    .execute()) as { resources: { url: string }[] };

  const images = objects.resources.map((image) => image.url);

  return images;
}
