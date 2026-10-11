import { useState } from "react";
import { FaMagnifyingGlass, FaFilter } from "react-icons/fa6";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white rounded-[24px] shadow-lg border border-green-100 p-5">
      <div className="flex flex-col md:flex-row gap-4">

        <div className="flex-1 flex items-center bg-green-50 rounded-xl px-4 py-3 border border-green-200">
          <FaMagnifyingGlass className="text-green-600 mr-3" />

          <input
            type="text"
            placeholder="Search LeetCode problem, topic, company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>

        <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition">
          <FaFilter />
          Filter
        </button>

      </div>

      <div className="flex flex-wrap gap-3 mt-5">
        {[
          "Arrays",
          "Strings",
          "Sliding Window",
          "HashMap",
          "DP",
          "Graph",
          "Tree",
          "HCLTech",
          "Java",
        ].map((topic) => (
          <button
            key={topic}
            className="px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-200 hover:bg-green-100 transition text-sm font-medium"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;