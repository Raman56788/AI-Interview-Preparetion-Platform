import { FaSearch } from "react-icons/fa";

const SearchFilter = ({
  search,
  setSearch,
  difficulty,
  setDifficulty,
  topic,
  setTopic,
  topics,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-green-100 p-5 mb-8">
      <div className="grid md:grid-cols-3 gap-4">

        <div className="relative">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search problem..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500"
        >
          <option value="All">All Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500"
        >
          <option value="All">All Topics</option>

          {topics.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;