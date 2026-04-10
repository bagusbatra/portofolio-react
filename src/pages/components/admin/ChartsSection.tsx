import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const chartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
];

const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Bar Chart */}
      <div className="glass p-8 rounded-3xl space-y-6">
        <h3 className="text-xl font-bold">Project Views</h3>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#ffffff10"
              />

              <XAxis
                dataKey="name"
                stroke="#ffffff50"
              />

              <YAxis
                stroke="#ffffff50"
              />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#6366f1"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart */}
      <div className="glass p-8 rounded-3xl space-y-6">
        <h3 className="text-xl font-bold">
          Messages Received
        </h3>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#ffffff10"
              />

              <XAxis
                dataKey="name"
                stroke="#ffffff50"
              />

              <YAxis
                stroke="#ffffff50"
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ fill: "#22c55e" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default ChartsSection;