import {
  FaCircleCheck,
  FaArrowTrendUp,
  FaTriangleExclamation,
  FaFileShield,
} from "react-icons/fa6";

const ATSScoreCard = ({ resumeData }) => {
  // ---------------- AI Data ----------------
  const score = resumeData?.atsScore ?? 0;

  const skillsCount = resumeData?.skills?.length || 0;
  const missingKeywords = resumeData?.missingKeywords?.length || 0;
  const suggestionsCount = resumeData?.suggestions?.length || 0;

  // Dynamic Metrics
  const metrics = [
    {
      title: "Formatting",
      value: Math.min(score + 5, 100),
      color: "bg-green-500",
    },
    {
      title: "Keywords Match",
      value: Math.max(100 - missingKeywords * 8, 40),
      color: "bg-blue-500",
    },
    {
      title: "Projects & Skills",
      value: Math.min(skillsCount * 10 + 20, 100),
      color: "bg-purple-500",
    },
    {
      title: "AI Suggestions Applied",
      value: Math.max(100 - suggestionsCount * 8, 30),
      color: "bg-orange-500",
    },
  ];

  // ---------------- Resume Status ----------------
  const getStatus = () => {
    if (score >= 85) {
      return {
        title: "Excellent Resume",
        quality: "Excellent",
        ready: "Yes",
        color: "text-green-700",
        bg: "bg-green-50 border-green-200",
        icon: <FaCircleCheck className="text-green-600 text-2xl" />,
        message:
          "Your resume is ATS-friendly and ready for software developer placements.",
      };
    }

    if (score >= 70) {
      return {
        title: "Good Resume",
        quality: "Good",
        ready: "Almost",
        color: "text-blue-700",
        bg: "bg-blue-50 border-blue-200",
        icon: <FaArrowTrendUp className="text-blue-600 text-2xl" />,
        message:
          "Your resume is good, but adding more technical keywords and measurable achievements can improve it.",
      };
    }

    return {
      title: "Needs Improvement",
      quality: "Average",
      ready: "No",
      color: "text-orange-700",
      bg: "bg-orange-50 border-orange-200",
      icon: <FaTriangleExclamation className="text-orange-600 text-2xl" />,
      message:
        "Your resume needs improvement. Add projects, cloud skills, REST APIs, and quantified achievements.",
    };
  };

  const status = getStatus();

  // ---------------- Circle Progress ----------------
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (score / 100) * circumference;

  return (
    <div className="bg-white rounded-[30px] border border-green-100 shadow-xl p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-xs uppercase tracking-[3px] text-green-600 font-semibold">
            ATS REPORT
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-1">
            Resume ATS Score
          </h2>
        </div>

        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
          <FaFileShield className="text-xl" />
        </div>
      </div>

      {/* Circle */}
      <div className="flex justify-center mb-8">
        <div className="relative w-44 h-44">

          <svg className="w-full h-full -rotate-90">
            <circle
              cx="88"
              cy="88"
              r={radius}
              stroke="#E5E7EB"
              strokeWidth="10"
              fill="none"
            />

            <circle
              cx="88"
              cy="88"
              r={radius}
              stroke="#16A34A"
              strokeWidth="10"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-700"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-green-600">
              {score}
            </h2>

            <p className="text-sm text-gray-500">ATS Score</p>
          </div>

        </div>
      </div>

      {/* Resume Status */}
      <div className={`rounded-2xl border p-4 ${status.bg}`}>
        <div className="flex items-start gap-3">

          {status.icon}

          <div>
            <h3 className={`font-bold ${status.color}`}>
              {status.title}
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              {status.message}
            </p>
          </div>

        </div>
      </div>

      {/* Metrics */}
      <div className="mt-8 space-y-5">
        {metrics.map((item) => (
          <div key={item.title}>

            <div className="flex justify-between mb-2 text-sm">
              <span className="font-medium text-gray-700">
                {item.title}
              </span>

              <span className="font-bold text-gray-800">
                {item.value}%
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className={`${item.color} h-full rounded-full transition-all duration-700`}
                style={{ width: `${item.value}%` }}
              />
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Summary */}
      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-green-50 rounded-2xl border border-green-100 p-4 text-center">
          <p className="text-xs text-gray-500">Resume Quality</p>

          <h3 className="text-2xl font-bold text-green-700 mt-2">
            {status.quality}
          </h3>
        </div>

        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-4 text-center">
          <p className="text-xs text-gray-500">Placement Ready</p>

          <h3 className="text-2xl font-bold text-blue-700 mt-2">
            {status.ready}
          </h3>
        </div>

      </div>

      {/* AI Stats */}
      <div className="grid grid-cols-3 gap-3 mt-8">

        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-xs text-gray-500">Skills</p>

          <h3 className="text-xl font-bold text-green-600">
            {skillsCount}
          </h3>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-xs text-gray-500">Missing</p>

          <h3 className="text-xl font-bold text-orange-600">
            {missingKeywords}
          </h3>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-xs text-gray-500">Suggestions</p>

          <h3 className="text-xl font-bold text-purple-600">
            {suggestionsCount}
          </h3>
        </div>

      </div>

    </div>
  );
};

export default ATSScoreCard;