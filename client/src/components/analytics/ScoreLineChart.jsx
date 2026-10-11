import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", score: 72 },
  { day: "Tue", score: 80 },
  { day: "Wed", score: 78 },
  { day: "Thu", score: 85 },
  { day: "Fri", score: 88 },
  { day: "Sat", score: 91 },
  { day: "Sun", score: 95 },
];

const ScoreLineChart = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-green-950 rounded-3xl p-6 shadow-2xl border border-green-500/20">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-xl font-bold text-white">
            Weekly Interview Score
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Last 7 Days Performance
          </p>
        </div>

        <span className="bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-semibold">
          +18% Growth
        </span>
      </div>

      {/* Chart */}
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>

            {/* Gradient */}
            <defs>
              <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#374151"
            />

            <XAxis
              dataKey="day"
              stroke="#9CA3AF"
              tick={{ fill: "#D1D5DB", fontSize: 12 }}
            />

            <YAxis
              domain={[60, 100]}
              stroke="#9CA3AF"
              tick={{ fill: "#D1D5DB", fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #22C55E",
                borderRadius: "12px",
                color: "#fff",
              }}
              labelStyle={{ color: "#22C55E" }}
            />

            <Area
              type="monotone"
              dataKey="score"
              stroke="none"
              fill="url(#scoreGradient)"
            />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#22C55E"
              strokeWidth={4}
              dot={{
                fill: "#22C55E",
                stroke: "#ffffff",
                strokeWidth: 2,
                r: 6,
              }}
              activeDot={{
                r: 8,
                fill: "#4ADE80",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">

        <div className="bg-white/5 rounded-xl p-3 text-center border border-green-500/10">
          <p className="text-gray-400 text-xs">Highest</p>
          <h3 className="text-green-400 font-bold text-xl">95%</h3>
        </div>

        <div className="bg-white/5 rounded-xl p-3 text-center border border-green-500/10">
          <p className="text-gray-400 text-xs">Average</p>
          <h3 className="text-blue-400 font-bold text-xl">84%</h3>
        </div>

        <div className="bg-white/5 rounded-xl p-3 text-center border border-green-500/10">
          <p className="text-gray-400 text-xs">Trend</p>
          <h3 className="text-purple-400 font-bold text-xl">↗ +18%</h3>
        </div>

      </div>

    </div>
  );
};

export default ScoreLineChart;