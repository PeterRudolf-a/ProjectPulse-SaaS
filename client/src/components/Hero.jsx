import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
        Track Your Projects with <span className="text-indigo-600">Clarity</span>
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        ProjectPulse helps you monitor progress, visualize stats, and stay on top of deadlines.
      </p>
      <Link
        to="/register"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition"
      >
        Get Started for Free
      </Link>
    </div>
  );
}
