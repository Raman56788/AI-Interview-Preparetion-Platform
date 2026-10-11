import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Technical Skills", value: 40 },
  { name: "Communication", value: 25 },
  { name: "Confidence", value: 20 },
  { name: "Problem Solving", value: 15 },
];

const COLORS = [
  "#22C55E", // Green
  "#3B82F6", // Blue
  "#A855F7", // Purple
  "#F97316", // Orange
];

const SkillPieChart = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-green-950 rounded-3xl p-6 shadow-2xl border border-green-500/20">

      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">
          Skill Distribution
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          AI Evaluation of your interview skills
        </p>
      </div>

      {/* Donut Chart */}
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              cx="50%"
              cy="45%"
              outerRadius={90}
              innerRadius={55}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#111827"
                  strokeWidth={2}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #22C55E",
                borderRadius: "12px",
                color: "#fff",
              }}
              labelStyle={{ color: "#22C55E" }}
            />

            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{
                paddingTop: 20,
                color: "#D1D5DB",
                fontSize: "13px",
              }}
            />

          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Skill Progress Cards */}
      <div className="grid grid-cols-2 gap-3 mt-6">

        {data.map((item, index) => (
          <div
            key={item.name}
            className="bg-white/5 border border-green-500/10 rounded-xl p-3"
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />

              <p className="text-gray-300 text-xs">
                {item.name}
              </p>
            </div>

            <h3
              className="text-xl font-bold"
              style={{ color: COLORS[index] }}
            >
              {item.value}%
            </h3>

            <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${item.value}%`,
                  backgroundColor: COLORS[index],
                }}
              />
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default SkillPieChart;