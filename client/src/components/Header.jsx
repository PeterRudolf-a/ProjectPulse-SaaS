import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-sm fixed top-0 left-0 z-10">
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        ProjectPulse
      </Link>
      <nav className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-indigo-600">Features</Link>
        <Link to="/" className="text-gray-700 hover:text-indigo-600">Pricing</Link>
        <Link to="/login" className="text-indigo-600 font-semibold hover:underline">Login</Link>
      </nav>
    </header>
  );
}
