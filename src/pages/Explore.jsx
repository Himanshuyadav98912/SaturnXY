// pages/Explore.jsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

const lineData = [
  { month: "Jan", investment: 4000 },
  { month: "Feb", investment: 3000 },
  { month: "Mar", investment: 5000 },
  { month: "Apr", investment: 4000 },
  { month: "May", investment: 6000 },
  { month: "Jun", investment: 7000 },
];

const barData = [
  { name: "Stocks", value: 4000 },
  { name: "Bonds", value: 3000 },
  { name: "Crypto", value: 2000 },
  { name: "Real Estate", value: 2780 },
  { name: "Gold", value: 1890 },
];

const pieData = [
  { name: "USA", value: 40 },
  { name: "India", value: 30 },
  { name: "Europe", value: 20 },
  { name: "Others", value: 10 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export default function Explore() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Explore Investment Reports
      </h1>

      {/* Line Chart */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Monthly Investment Trend
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="investment" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Asset Allocation
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div>
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Investment by Region
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
