import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "Mon", score: 65 },
  { week: "Tue", score: 72 },
  { week: "Wed", score: 68 },
  { week: "Thu", score: 80 },
  { week: "Fri", score: 84 },
  { week: "Sat", score: 90 },
  { week: "Sun", score: 92 },
];

const PerformanceChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        Interview Performance
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Your interview score over the last 7 days
      </p>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="week" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;