import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import UserLayout from "../../Layouts/UserLayout";
import { useSelector } from "react-redux";

const menuItems = [
  { key: "Students", label: "Students", path: "students" },
  { key: "rooms", label: "Rooms", path: "rooms" },
  { key: "complaines", label: "Complaines", path: "complaines" },
];

export default function AdminDashboard() {
  const isBooked = useSelector((state) => state?.auth?.auth?.isBooked);
  // console.log("state", isBooked);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <UserLayout>
      <div className="flex h-screen overflow-hidden">
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-gray-800 text-white transition-transform duration-200 md:relative md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 md:hidden">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <button onClick={() => setSidebarOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="mt-5 px-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 my-1 rounded-lg hover:bg-gray-700 transition-colors duration-150 ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-auto">
          {/* Mobile Header */}
          <header className="flex items-center justify-between bg-white shadow p-4 md:hidden">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold text-black">Dashboard</h1>
          </header>

          {/* Content Area */}
          <main className="p-4">
            {/* Renders nested routes here */}

            <Outlet />
          </main>
        </div>
      </div>
    </UserLayout>
  );
}
