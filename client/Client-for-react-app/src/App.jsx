import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import GolfCard from "./Pages/GolfCard";
import { golfCourses } from "./stores/golfcourses";

export default function App() {
  return (
    <div>
      <h1>Post your Favourite Golf Clubs</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/GolfCard">Golf Courses</Link>
      </nav>
      <div>
        {golfCourses.map((target) => (
          <GolfCard
            key={target.id}
            name={target.name}
            location={target.location}
            par={target.par}
            image={target.image}
          />
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/GolfCard" element={<GolfCard />} />

        <Route
          path="*"
          element={<h3>404 page not found please return to home</h3>}
        />
      </Routes>
    </div>
  );
}
