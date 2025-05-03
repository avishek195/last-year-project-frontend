import React from "react";
import { PlusCircle, Eye, CheckCircle, AlertTriangle } from "lucide-react";

const DashboardFront = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      {/* Welcome Message */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
        <p className="text-gray-600">
          Here’s an overview of your dashboard activity.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <div className="flex items-center space-x-4 mb-4">
            <Eye className="text-indigo-600" size={32} />
            <div>
              <p className="text-gray-600 text-sm">Total Complaints</p>
              <h3 className="text-2xl font-semibold text-gray-800">120</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <div className="flex items-center space-x-4 mb-4">
            <CheckCircle className="text-green-600" size={32} />
            <div>
              <p className="text-gray-600 text-sm">Resolved Complaints</p>
              <h3 className="text-2xl font-semibold text-gray-800">90</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <div className="flex items-center space-x-4 mb-4">
            <AlertTriangle className="text-red-500" size={32} />
            <div>
              <p className="text-gray-600 text-sm">Pending Complaints</p>
              <h3 className="text-2xl font-semibold text-gray-800">30</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-5 rounded-lg shadow transition">
            <PlusCircle size={20} />
            Add New Complaint
          </button>

          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-lg shadow transition">
            <Eye size={20} />
            View All Complaints
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardFront;
