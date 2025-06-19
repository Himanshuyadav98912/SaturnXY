import { Routes, Route } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import Delivering from "./components/Delivering";
import RecentInsight from "./components/RecentInSight";

// Pages
import Home from "./pages/Home";
import SignUP from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Insight from "./pages/Insight";
import Serve from "./pages/Serve";
import Solutions from "./pages/Solutions";
import Explore from "./pages/Explore";
import ProblemBlog from "./pages/DeliveringBlog";
import DeliveringBlog from "./pages/DeliveringBlog";
import InsightBlog from "./pages/InsightBlog";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";
import ProblemDetail from "./pages/ProblemDetail";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content area with flex-grow */}
      <main className="flex-grow">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ProblemSection />
                <Delivering />
                <RecentInsight />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /> </PrivateRoute>} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/serve" element={<Serve />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/services/:slug" element={<ProblemBlog/>} />
          <Route path="/deliver/:slug" element={<DeliveringBlog/>} />
          <Route path="/insights/:slug" element={<InsightBlog />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/problem/:slug" element={<ProblemDetail />} />

          {/* Fallback */}
          <Route
            path="*"
            element={
              <div className="p-10 text-center text-2xl text-red-600">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};
