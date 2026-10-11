import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

import {
  FaCode,
  FaComments,
  FaBolt,
  FaBrain,
} from "react-icons/fa6";

const data = [
  { skill: "Technical", score: 95, color: "#22C55E" },
  { skill: "Communication", score: 88, color: "#3B82F6" },
  { skill: "Confidence", score: 90, color: "#A855F7" },
  { skill: "Problem Solving", score: 84, color: "#F97316" },
];

const icons = [
  <FaCode />,
  <FaComments />,
  <FaBolt />,
  <FaBrain />,
];

const PerformanceBarChart = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-green-950 rounded-3xl p-6 shadow-2xl border border-green-500/20">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-xl font-bold text-white">
            Skill Performance Comparison
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            AI evaluation across interview skills
          </p>
        </div>

        <span className="bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-semibold">
          AI Report
        </span>

      </div>

      {/* Bar Chart */}
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#374151" />

            <XAxis
              dataKey="skill"
              stroke="#9CA3AF"
              tick={{
                fill: "#D1D5DB",
                fontSize: 12,
              }}
            />

            <YAxis
              domain={[0, 100]}
              stroke="#9CA3AF"
              tick={{
                fill: "#D1D5DB",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{ fill: "rgba(34,197,94,0.08)" }}
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #22C55E",
                borderRadius: "12px",
                color: "#fff",
              }}
              labelStyle={{
                color: "#22C55E",
              }}
            />

            <Bar
              dataKey="score"
              radius={[12, 12, 0, 0]}
              animationDuration={1200}
            >
              {data.map((entry) => (
                <Cell
                  key={entry.skill}
                  fill={entry.color}
                />
              ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

        {data.map((item, index) => (
          <div
            key={item.skill}
            className="bg-white/5 border border-green-500/10 rounded-2xl p-4 hover:bg-white/10 transition"
          >

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-3"
              style={{
                backgroundColor: `${item.color}20`,
                color: item.color,
              }}
            >
              {icons[index]}
            </div>

            <p className="text-gray-400 text-xs">
              {item.skill}
            </p>

            <h3
              className="text-2xl font-bold mt-1"
              style={{ color: item.color }}
            >
              {item.score}%
            </h3>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-2 mt-3">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${item.score}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>

          </div>
        ))}

      </div>

      {/* AI Summary */}
      <div className="mt-8 bg-gradient-to-r from-green-500/10 to-black border border-green-500/20 rounded-2xl p-5">

        <h3 className="text-green-400 font-bold text-lg mb-2">
          🤖 AI Summary
        </h3>

        <p className="text-gray-300 leading-7 text-sm">
          Your strongest area is <span className="text-green-400 font-semibold">Technical Skills (95%)</span>.
          Continue improving communication and confidence through more AI mock interviews and project explanations.
        </p>

      </div>

    </div>
  );
};

export default PerformanceBarChart;