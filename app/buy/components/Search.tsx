"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`?q=${encodedSearchQuery}`);
  };

  const handleTag = (tag: string = "") => {
    const encodedSearchQuery = encodeURI(tag);
    router.push(`?q=${encodedSearchQuery}`);
  };

  return (
    <section className="flex flex-col bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-lg">
      <div className="flex flex-col space-y-3">
        <form
          className="flex items-center drop-shadow-lg"
          onSubmit={handleSearch}
        >
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns=""
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                >
                </path>
              </svg>
            </div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="search"
              id="search-form"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-10 p-2.5"
              placeholder="Search"
            />
          </div>
        </form>

        <select className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-rose-500 focus:border-rose-500 drop-shadow-lg" defaultValue='default'>
          <option value="default">Relevance</option>
          <option value="TR">Trending</option>
          <option value="LA">Latest Arrivals</option>
          <option value="LH">Price: Low to High</option>
          <option value="HL">Price: High to Low</option>
        </select>
      </div>

      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap drop-shadow-lg">
        <button
          type="button"
          onClick={() => handleTag()}
          className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 enabled:ring-rose-700"
        >
          All
        </button>
        <button
          type="button"
          onClick={() => handleTag("action")}
          className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 enabled:ring-rose-700"
        >
          Action
        </button>
        <button
          type="button"
          onClick={() => handleTag("adventure")}
          className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 enabled:ring-rose-700"
        >
          Adventure
        </button>
        <button
          type="button"
          onClick={() => handleTag("fighting")}
          className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 enabled:ring-rose-700"
        >
          Fighting
        </button>
        <button
          type="button"
          onClick={() => handleTag("racing")}
          className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 enabled:ring-rose-700"
        >
          Racing
        </button>
      </div>
    </section>
  );
};

export default Search;
