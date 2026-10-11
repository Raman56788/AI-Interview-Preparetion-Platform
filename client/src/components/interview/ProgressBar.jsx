const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-green-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-right text-sm text-green-700 font-semibold mt-2">
        {Math.round(progress)}% Completed
      </p>
    </div>
  );
};

export default ProgressBar;