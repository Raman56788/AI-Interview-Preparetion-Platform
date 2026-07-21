import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        AI Interview Prep
      </h1>

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