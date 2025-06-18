import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return (window.location.href = "/signin");

      try {
        const res = await fetch("http://localhost:5000/api/auth/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setUser(data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        window.location.href = "/signin";
      }
    };

    fetchUser();
  }, []);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  const profit = (user.investmentAmount * 0.125).toFixed(2);
  const todayProfit = (user.investmentAmount * 0.0015).toFixed(2);

  const lineData = [
    { name: "Mon", value: 300 },
    { name: "Tue", value: 500 },
    { name: "Wed", value: 700 },
    { name: "Thu", value: 400 },
    { name: "Fri", value: 650 },
    { name: "Sat", value: 750 },
    { name: "Sun", value: 900 },
  ];

  const pieData = [
    { name: "Stocks", value: 60 },
    { name: "BigTech", value: 25 },
    { name: "Funds", value: 15 },
  ];

  const topList = [
    { name: "Reliance", price: "₹2850" },
    { name: "TCS", price: "₹3840" },
    { name: "HDFC Bank", price: "₹1540" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
  <h1 className="text-3xl font-bold text-blue-800">Dashboard</h1>
  <p className="text-gray-600 text-base mt-1">
    Welcome back, <span className="font-semibold">{user.name}</span> (
    <span className="text-blue-600">{user.email}</span>)
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h3 className="text-gray-600">Total Returns</h3>
          <p className="text-2xl font-bold text-green-800">₹{profit}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h3 className="text-gray-600">Today's Return</h3>
          <p className="text-2xl font-bold text-yellow-700">₹{todayProfit}</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h3 className="text-gray-600">Total Investment</h3>
          <p className="text-2xl font-bold text-blue-800">₹{user.investmentAmount}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Portfolio Diversity</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <ul className="mt-4 text-sm text-gray-700">
            {pieData.map((d) => (
              <li key={d.name} className="flex justify-between">
                <span>{d.name}</span> <span>{d.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4">Most Viewed</h2>
          <ul className="space-y-2">
            {topList.map((item, idx) => (
              <li key={idx} className="flex justify-between text-gray-700">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4">Top Gainers</h2>
          <ul className="space-y-2">
            {topList.map((item, idx) => (
              <li key={idx} className="flex justify-between text-green-700">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4">Top Losers</h2>
          <ul className="space-y-2">
            {topList.map((item, idx) => (
              <li key={idx} className="flex justify-between text-red-700">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
