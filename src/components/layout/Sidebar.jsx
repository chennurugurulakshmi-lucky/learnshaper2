import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-10">LearnSphere</h2>

      <nav className="space-y-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `block p-2 rounded ${
              isActive ? "bg-blue-600" : "hover:bg-slate-700"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `block p-2 rounded ${
              isActive ? "bg-blue-600" : "hover:bg-slate-700"
            }`
          }
        >
          Courses
        </NavLink>

        <NavLink
          to="/reporting"
          className={({ isActive }) =>
            `block p-2 rounded ${
              isActive ? "bg-blue-600" : "hover:bg-slate-700"
            }`
          }
        >
          Reporting
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;