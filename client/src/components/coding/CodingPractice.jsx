import CodingStats from "../components/coding/CodingStats";
import CodingRoadmap from "../components/coding/CodingRoadmap";
import ProblemsList from "../components/coding/ProblemsList";

const CodingPractice = () => {
  return (
    <div className="space-y-10">
      <CodingStats />

      <CodingRoadmap />

      <ProblemsList />
    </div>
  );
};

export default CodingPractice;