import React from "react";
import {
  Users,
  Home,
  CheckCircle,
  AlertTriangle,
  BarChart2,
  Settings,
} from "lucide-react";

export default function AdminDashboardFront() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Overview of system metrics and quick actions.
        </p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            <Users className="text-indigo-600" size={32} />
            <h2 className="ml-4 text-lg font-semibold text-gray-700">
              Total Students
            </h2>
          </div>
          <p className="text-3xl font-bold text-gray-900">350</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            <Home className="text-green-600" size={32} />
            <h2 className="ml-4 text-lg font-semibold text-gray-700">
              Rooms Booked
            </h2>
          </div>
          <p className="text-3xl font-bold text-gray-900">275</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            <CheckCircle className="text-blue-600" size={32} />
            <h2 className="ml-4 text-lg font-semibold text-gray-700">
              Resolved Complaints
            </h2>
          </div>
          <p className="text-3xl font-bold text-gray-900">190</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-red-600" size={32} />
            <h2 className="ml-4 text-lg font-semibold text-gray-700">
              Pending Complaints
            </h2>
          </div>
          <p className="text-3xl font-bold text-gray-900">45</p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition">
            <Settings size={20} /> Manage Users
          </button>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition">
            <BarChart2 size={20} /> View Reports
          </button>
        </div>
      </section>

      {/* Placeholder Chart Section */}
      <section>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Monthly Activity
          </h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            {/* Integrate chart library here */}
            Chart Placeholder
          </div>
        </div>
      </section>
    </div>
  );
}
