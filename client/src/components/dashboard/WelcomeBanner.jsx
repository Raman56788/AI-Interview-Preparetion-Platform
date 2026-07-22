import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const WelcomeBanner = ({ name = "Raman" }) => {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 text-white shadow-xl">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>
          <h1 className="text-3xl lg:text-4xl font-bold">
            {greeting}, {name} 👋
          </h1>

          <p className="mt-3 text-green-100 text-lg">
            Ready to crack your next interview?
          </p>

          <p className="mt-2 text-green-100">
            Practice AI interviews, improve coding skills and
            boost your ATS resume score.
          </p>
        </div>

        <Link
          to="/interview"
          className="inline-flex items-center gap-3 bg-white text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition"
        >
          Start Interview
          <FaArrowRight />
        </Link>

      </div>
    </div>
  );
};

export default WelcomeBanner;