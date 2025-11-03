import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/projects", label: "Projects" },
    { path: "/settings", label: "Settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-6 fixed">
      <h2 className="text-2xl font-bold mb-8 text-center">ProjectPulse</h2>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block px-4 py-2 rounded ${
              location.pathname === link.path ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
