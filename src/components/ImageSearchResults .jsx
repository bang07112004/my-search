import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

export default function ImageSearchResults({ results }) {
  return (
    <div className="mt-4 pb-40  sm:pb-24">
      <div className="grid grid-cols-1 space-x-4 px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.items.map((result) => (
          <div key={result.link} className="mb-8">
            <div className="group">
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className="h-60 w-full object-contain transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-black"
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="truncate text-xl group-hover:underline">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="text-gray-600 group-hover:underline">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
