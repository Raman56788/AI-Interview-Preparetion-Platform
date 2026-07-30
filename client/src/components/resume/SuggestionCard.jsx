import { FaCheckCircle } from "react-icons/fa";

const suggestions = [
  "Add more quantified achievements.",
  "Include GitHub and Portfolio links.",
  "Mention internship or project experience.",
  "Improve ATS keywords for your target role.",
  "Add technical certifications if available.",
];

const SuggestionCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        AI Suggestions
      </h2>

      <div className="space-y-4">

        {suggestions.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-3
              p-4
              bg-gray-50
              rounded-xl
            "
          >
            <FaCheckCircle className="text-green-600 mt-1" />

            <p className="text-gray-700">
              {item}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default SuggestionCard;