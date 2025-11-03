import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Track Your Projects with Clarity</h1>
      <p className="text-lg mb-6">
        ProjectPulse helps you monitor progress, visualize stats, and stay on top of deadlines.
      </p>
      <Link
        to="/register"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100"
      >
        Get Started for Free
      </Link>
    </section>
  );
}
