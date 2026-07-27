import PerformanceChart from "../../components/dashboard/PerformanceChart";
import WeeklyProgress from "../../components/dashboard/WeeklyProgress";
import InterviewHistory from "../../components/dashboard/InterviewHistory";

const Analytics = () => {

  return (

    <div className="
      min-h-screen
      bg-gray-100
      p-6
    ">

      {/* Heading */}

      <div className="mb-8">

        <h1 className="
          text-3xl
          font-bold
          text-gray-800
        ">
          Analytics Dashboard
        </h1>

        <p className="
          text-gray-500
          mt-2
        ">
          Track your interview performance and progress.
        </p>

      </div>


      {/* Analytics Components */}

      <div className="
        grid
        grid-cols-1
        gap-6
      ">

        <PerformanceChart />

        <WeeklyProgress />

        <InterviewHistory />

      </div>

    </div>

  );

};

export default Analytics;