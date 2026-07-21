import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <h2 className="text-xl font-bold text-blue-600">
        AI Interview Prep
      </h2>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;