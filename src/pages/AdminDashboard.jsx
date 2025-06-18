import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch("http://localhost:5000/api/admin/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setUsers(data);
        setFiltered(data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        alert("Failed to load users. Are you an admin?");
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const result = users.filter(
      (u) =>
        u.name.toLowerCase().includes(value) ||
        u.email.toLowerCase().includes(value)
    );
    setFiltered(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Admin Panel</h1>

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={handleSearch}
        className="mb-4 px-4 py-2 border border-gray-300 rounded w-full max-w-md"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Investment</th>
              <th className="py-2 px-4 text-left">Admin</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr key={user._id} className="border-t hover:bg-gray-50">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">₹{user.investmentAmount}</td>
                <td className="py-2 px-4">{user.isAdmin ? "✅" : "❌"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
