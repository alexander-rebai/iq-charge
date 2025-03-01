import Link from "next/link";
import type { JSX } from "react";
import { categoryType } from "../content";

// This is the category card that appears in the home page and in the category page
const CardCategory = ({
  category,
  tag = "h2",
}: {
  category: categoryType;
  tag?: keyof JSX.IntrinsicElements;
}) => {
  const TitleTag = tag;

  return (
    <Link
      className="bg-base-200 text-base-content rounded-box hover:bg-neutral hover:text-neutral-content p-4 duration-200"
      href={`/blog/category/${category.title}`}
      title={category.title}
      rel="tag"
    >
      <TitleTag className="font-medium md:text-lg">
        {/* @ts-ignore - titleShort property might not exist on categoryType */}
        {category?.titleShort ?? category.title}
      </TitleTag>
    </Link>
  );
};

export default CardCategory;
