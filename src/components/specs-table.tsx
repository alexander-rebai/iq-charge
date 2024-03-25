import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function Specs({
  specs,
  image1,
  image2,
  image3,
  image4,
}: {
  specs: {
    category: string;
    value: string | ReactNode;
    value2?: string | ReactNode;
    value3?: string | ReactNode;
    value4?: string | ReactNode;
  }[];
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
}) {
  return (
    <div
      className={cn(
        "w-full overflow-x-scroll pt-32 lg:w-3/4 lg:px-8",
        image4 && "lg:w-full",
      )}
    >
      <div className="mx-0 mt-8 flow-root">
        <table className="min-w-max md:min-w-full">
          <colgroup>
            <col
              className={cn("w-1/6 bg-primary md:w-1/5", image4 && "w-1/5")}
            />
            <col
              className={cn(
                "w-1/3",
                image4 && "w-1/5",
                image3 && !image4 && "w-1/4",
              )}
            />
            {specs.some((spec) => spec.value2) && (
              <col
                className={cn(
                  "w-1/3",
                  image4 && "w-1/5",
                  image3 && !image4 && "w-1/4",
                )}
              />
            )}
            {specs.some((spec) => spec.value3) && (
              <col className={cn("w-1/5", image3 && !image4 && "w-1/4")} />
            )}
            {specs.some((spec) => spec.value4) && <col className="w-1/5" />}
          </colgroup>
          <tbody>
            {specs.map((spec, idx) => (
              <tr key={idx}>
                <td
                  className={cn(
                    "max-w-0 break-words border-b border-gray-400 py-5 pl-4 pr-3 md:max-w-none md:text-lg",
                    idx === 0
                      ? "rounded-t-xl"
                      : idx === specs.length - 1
                        ? "rounded-b-xl border-none"
                        : undefined,
                  )}
                >
                  <div className="font-bold text-gray-100">{spec.category}</div>
                </td>

                <td
                  className={cn(
                    "relative table-cell border-b border-gray-400 px-3 py-5 text-center text-gray-700 md:text-lg",
                    idx === specs.length - 1 && "rounded-b-xl border-none",
                  )}
                >
                  {spec.value}
                  {idx === 0 && (
                    <img
                      src={image1}
                      alt="Product"
                      className={cn(
                        "absolute -top-40 left-1/2 h-32 w-24 -translate-x-1/2",
                        image1 === "/wallbox/w1.webp" && "w-32",
                      )}
                    />
                  )}
                </td>
                {spec.value2 && (
                  <td
                    className={cn(
                      "relative table-cell border-b border-gray-400 px-3 py-5 text-center text-gray-700 md:text-lg",
                      idx === specs.length - 1 && "rounded-b-xl border-none",
                    )}
                  >
                    {spec.value2}
                    {idx === 0 && (
                      <img
                        src={image2}
                        alt="Product"
                        className="absolute -top-40 left-1/2 h-32 w-24 -translate-x-1/2"
                      />
                    )}
                  </td>
                )}
                {spec.value3 && (
                  <td
                    className={cn(
                      "relative table-cell border-b border-gray-400 px-3 py-5 text-center text-gray-700 md:text-lg",
                      idx === specs.length - 1 && "rounded-b-xl border-none",
                    )}
                  >
                    {spec.value3}
                    {idx === 0 && (
                      <img
                        src={image3}
                        alt="Product"
                        className="absolute -top-40 left-1/2 h-32 w-36 -translate-x-1/2"
                      />
                    )}
                  </td>
                )}
                {spec.value4 && (
                  <td
                    className={cn(
                      "relative table-cell border-b border-gray-400 px-3 py-5 text-center text-gray-700 md:text-lg",
                      idx === specs.length - 1 && "rounded-b-xl border-none",
                    )}
                  >
                    {spec.value4}
                    {idx === 0 && (
                      <img
                        src={image4}
                        alt="Product"
                        className="absolute -top-28 left-1/2 h-32 w-36 -translate-x-1/2"
                      />
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
