import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        ProjectPulse
      </Link>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-blue-600">Features</Link>
        <Link to="/" className="hover:text-blue-600">Pricing</Link>
        <Link to="/login" className="text-blue-600 font-semibold">Login</Link>
      </nav>
    </header>
  );
}
