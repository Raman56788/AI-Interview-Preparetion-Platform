import {
  FaCheckCircle,
  FaArrowCircleUp,
  FaLightbulb,
} from "react-icons/fa";

const FeedbackCard = ({
  title,
  type = "strength",
  points = [],
}) => {
  const isStrength = type === "strength";
  const isRecommendation = type === "recommendation";

  return (
    <div
      className={`rounded-3xl shadow-md p-6 border hover:shadow-xl transition-all duration-300 ${
        isStrength
          ? "bg-green-50 border-green-200"
          : isRecommendation
          ? "bg-blue-50 border-blue-200"
          : "bg-orange-50 border-orange-200"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
            isStrength
              ? "bg-green-100 text-green-600"
              : isRecommendation
              ? "bg-blue-100 text-blue-600"
              : "bg-orange-100 text-orange-500"
          }`}
        >
          {isStrength ? (
            <FaCheckCircle />
          ) : isRecommendation ? (
            <FaLightbulb />
          ) : (
            <FaArrowCircleUp />
          )}
        </div>

        <div>
          <h2
            className={`text-2xl font-bold ${
              isStrength
                ? "text-green-700"
                : isRecommendation
                ? "text-blue-700"
                : "text-orange-600"
            }`}
          >
            {title}
          </h2>

          <p className="text-sm text-gray-500">
            AI Generated Feedback
          </p>
        </div>
      </div>

      {/* Feedback Points */}
      <div className="space-y-4">
        {points.length > 0 ? (
          points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
            >
              <div
                className={`mt-1 text-lg ${
                  isStrength
                    ? "text-green-600"
                    : isRecommendation
                    ? "text-blue-600"
                    : "text-orange-500"
                }`}
              >
                {isStrength ? (
                  <FaCheckCircle />
                ) : isRecommendation ? (
                  <FaLightbulb />
                ) : (
                  <FaArrowCircleUp />
                )}
              </div>

              <p className="text-gray-700 leading-7">{point}</p>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl p-4 text-center text-gray-500 italic">
            No AI feedback available.
          </div>
        )}
      </div>

      {/* Bottom Badge */}
      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            isStrength
              ? "bg-green-100 text-green-700"
              : isRecommendation
              ? "bg-blue-100 text-blue-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {isStrength
            ? "Strong Area"
            : isRecommendation
            ? "AI Suggestion"
            : "Improve Here"}
        </span>

        <span className="text-xs text-gray-400">
          Gemini AI Analysis
        </span>
      </div>
    </div>
  );
};

export default FeedbackCard;