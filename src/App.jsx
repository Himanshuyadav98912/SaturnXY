import { BrowserRouter, Routes, Route } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home"
import SignIn from "./pages/Signin"
import SignUP from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProblemSection from "./components/ProblemSection.jsx"
import Delivering from "./components/Delivering.jsx"
import RecentInsight from "./components/RecentInsight.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return <BrowserRouter>
  <Header />
  <HeroSection />
  <ProblemSection />
  <Delivering />
  <RecentInsight />
  <Footer />

 
  <Routes>
    <Route path="/home" element={<Home/>}/> 
    <Route path="/sign-In" element={<SignIn/>}/> 
    <Route path="/sign-up" element={<SignUP/>}/> 
    <Route path="/about" element={<About/>}/> 
    <Route path="/profile" element={<Profile/>}/> 
  </Routes>
  </BrowserRouter>
}
