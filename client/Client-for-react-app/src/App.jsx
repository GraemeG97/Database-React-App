import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

export default function App() {
  return (
    <div>
      <h1>Post your Favourite Golf Clubs</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="*"
          element={<h3>404 page not found please return to home</h3>}
        />
      </Routes>
    </div>
  );
}
