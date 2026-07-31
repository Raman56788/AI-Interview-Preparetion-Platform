import ProblemCard from "./ProblemCard";

const problems = [

  {
    title: "Two Sum",
    difficulty: "Easy",
    status: "Solved",
  },

  {
    title: "Reverse String",
    difficulty: "Easy",
    status: "Pending",
  },

  {
    title: "Merge Sorted Arrays",
    difficulty: "Medium",
    status: "Pending",
  },

  {
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    status: "Pending",
  },

  {
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    status: "Pending",
  },

];

const ProblemList = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Problem List
      </h2>

      <div className="space-y-4">

        {problems.map((problem, index) => (

          <ProblemCard
            key={index}
            title={problem.title}
            difficulty={problem.difficulty}
            status={problem.status}
          />

        ))}

      </div>

    </div>

  );

};

export default ProblemList;