import React, { useEffect, useState } from "react";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleChange = (id, field, value) => {
    setEditData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const handleUpdate = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:5000/api/admin/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editData[id]),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Update failed");
        return;
      }

      alert("User updated successfully");
    } catch (err) {
      console.error("Update error:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Admin Dashboard</h2>

      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Name</th>
              <th className="px-6 py-4 text-left font-semibold">Email</th>
              <th className="px-6 py-4 text-left font-semibold">Investment</th>
              <th className="px-6 py-4 text-left font-semibold">Total Returns</th>
              <th className="px-6 py-4 text-left font-semibold">Today Returns</th>
              <th className="px-6 py-4 text-left font-semibold">Admin</th>
              <th className="px-6 py-4 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const editable = editData[user._id] || {};
              return (
                <tr key={user._id} className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-3">{user.name}</td>
                  <td className="px-6 py-3">{user.email}</td>

                  <td className="px-6 py-3">
                    <input
                      type="number"
                      value={editable.investmentAmount ?? user.investmentAmount ?? ""}
                      onChange={(e) => handleChange(user._id, "investmentAmount", e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 w-28 focus:ring-2 focus:ring-blue-400"
                    />
                  </td>

                  <td className="px-6 py-3">
                    <input
                      type="number"
                      value={editable.totalReturns ?? user.totalReturns ?? ""}
                      onChange={(e) => handleChange(user._id, "totalReturns", e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 w-28 focus:ring-2 focus:ring-blue-400"
                    />
                  </td>

                  <td className="px-6 py-3">
                    <input
                      type="number"
                      value={editable.todayReturns ?? user.todayReturns ?? ""}
                      onChange={(e) => handleChange(user._id, "todayReturns", e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 w-28 focus:ring-2 focus:ring-blue-400"
                    />
                  </td>

                  <td className="px-6 py-3">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        user.isAdmin ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {user.isAdmin ? "Yes" : "No"}
                    </span>
                  </td>

                  <td className="px-6 py-3">
                    <button
                      onClick={() => handleUpdate(user._id)}
                      className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
