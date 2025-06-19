// pages/Explore.jsx
import { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";
import { useAuth } from "../context/AuthContext";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export default function Explore() {
  const { user } = useAuth();
  const [lineData, setLineData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvestmentData = async () => {
      if (!user) return;

      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/auth/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        // You can shape this data based on your actual model
        // For now, we simulate some dynamic values based on user's investment amount
        const base = data.investmentAmount || 5000;

        setLineData([
          { month: "Jan", investment: base * 0.8 },
          { month: "Feb", investment: base * 0.85 },
          { month: "Mar", investment: base * 0.9 },
          { month: "Apr", investment: base },
          { month: "May", investment: base * 1.1 },
          { month: "Jun", investment: base * 1.2 },
        ]);

        setBarData([
          { name: "Stocks", value: base * 0.4 },
          { name: "Bonds", value: base * 0.25 },
          { name: "Crypto", value: base * 0.15 },
          { name: "Real Estate", value: base * 0.15 },
          { name: "Gold", value: base * 0.05 },
        ]);

        setPieData([
          { name: "USA", value: 40 },
          { name: "India", value: 30 },
          { name: "Europe", value: 20 },
          { name: "Others", value: 10 },
        ]);
      } catch (err) {
        console.error("Error fetching investment data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestmentData();
  }, [user]);

  if (loading) return <div className="text-center mt-10">Loading Reports...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Explore Your Investment Reports
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
