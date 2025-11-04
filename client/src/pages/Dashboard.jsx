import Sidebar from "../components/Sidebar.jsx";
import ChartCard from "../components/ChartCard.jsx";

export default function Dashboard() {
  const projects = [
    { title: "Website Redesign", status: "In Progress" },
    { title: "Mobile App", status: "Completed" },
    { title: "Marketing Campaign", status: "Pending" },
  ];

  return (
    <div className="flex min-h-[80vh]">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <ChartCard />
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-4">User Info</h2>
            <p>Email: user@example.com</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Projects</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Title</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.title} className="border-b">
                  <td className="p-2">{p.title}</td>
                  <td className="p-2">{p.status}</td>
                  <td className="p-2 text-blue-600 cursor-pointer hover:underline">
                    View
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
