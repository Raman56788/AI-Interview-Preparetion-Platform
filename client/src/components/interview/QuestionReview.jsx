const QuestionReview = ({
  index,
  question,
  answer,
  score,
}) => {
  return (
    <div className="bg-gray-50 border rounded-2xl p-5">

      <div className="flex justify-between items-center flex-wrap gap-3">

        <h3 className="font-bold text-green-700">
          Question {index + 1}
        </h3>

        <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-semibold">
          Score {score}/100
        </span>

      </div>

      <p className="mt-4 text-gray-800 font-medium leading-7">
        {question}
      </p>

      <div className="mt-4 bg-white rounded-xl border p-4">

        <p className="text-sm text-gray-500 mb-2">
          Your Answer
        </p>

        {answer ? (
          <p className="text-gray-700 leading-7">
            {answer}
          </p>
        ) : (
          <p className="italic text-red-500">
            No answer submitted.
          </p>
        )}

      </div>

    </div>
  );
};

export default QuestionReview;