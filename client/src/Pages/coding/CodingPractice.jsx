import CodingStats from "../../components/coding/CodingStats";
import DifficultyFilter from "../../components/coding/DifficultyFilter";
import ProblemList from "../../components/coding/ProblemList";
import CodeEditor from "../../components/coding/CodeEditor";
import ProgressCard from "../../components/coding/ProgressCard";

const CodingPractice = () => {

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}

      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Coding Practice
        </h1>

        <p className="text-gray-500 mt-2">
          Practice coding questions and improve your programming skills.
        </p>

      </div>

      {/* Stats */}

      <CodingStats />

      {/* Difficulty */}

      <div className="mt-8">

        <DifficultyFilter />

      </div>

      {/* Main Content */}

      <div className="grid xl:grid-cols-3 gap-6 mt-8">

        <div className="xl:col-span-1">

          <ProblemList />

        </div>

        <div className="xl:col-span-2 space-y-6">

          <CodeEditor />

          <ProgressCard />

        </div>

      </div>

    </div>

  );

};

export default CodingPractice;