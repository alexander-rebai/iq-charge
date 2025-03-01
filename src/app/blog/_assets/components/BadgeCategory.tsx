import { categoryType } from "../content";

// This is the category badge that appears in the article cards
const BadgeCategory = ({ category }: { category: categoryType }) => {
  return (
    <div
      className="my-2 me-2 w-fit rounded-full bg-primary-foreground px-2.5 py-0.5 text-sm font-medium text-primary"
      title={`Bekijk alle artikelen in ${category.title}`}
    >
      {category.title}
    </div>
  );
};

export default BadgeCategory;
