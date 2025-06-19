import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchResults = async () => {
      if (!query) return;

      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/search?query=${query}`);
        const text = await res.text();

        if (isCancelled) return; // Stop if component is unmounted

        const data = JSON.parse(text);
        setResults(data.results || []);
        setError(null);
      } catch (err) {
        if (!isCancelled) {
          setError("Search failed or server returned invalid JSON");
          console.error("Fetch error:", err);
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    // ✅ Only run fetch once per query
    fetchResults();

    return () => {
      isCancelled = true;
    };
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">
        Search Results for: "<span className="text-black">{query}</span>"
      </h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && results.length === 0 && (
        <p className="text-gray-500">No results found.</p>
      )}

      <ul className="space-y-4 mt-4">
        {results.map((item, index) => (
          <li key={index} className="border border-gray-300 rounded p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800">{item.name || item.email}</h3>
            {item.investmentAmount && (
              <p className="text-sm text-gray-600">
                Investment: ₹{item.investmentAmount} | Total Returns: ₹{item.totalReturns}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
