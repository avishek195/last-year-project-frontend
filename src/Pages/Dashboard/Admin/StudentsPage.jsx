import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudent } from "../../../Redux/Slices/StudentSlice";

export default function StudentsPage() {
  const dispatch = useDispatch();
  const allStudent = useSelector((state) => state.student.students || []);
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;
  const totalPages = Math.ceil(students.length / pageSize);

  // 1) Fetch on mount
  useEffect(() => {
    dispatch(getAllStudent());
  }, [dispatch]);

  // 2) Update local state when Redux slice changes
  useEffect(() => {
    setStudents(allStudent);
    // Reset to first page if students list changes
    setCurrentPage(1);
  }, [allStudent]);

  // Calculate the slice to display
  const paginated = students.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Students</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Name",
                "Email",
                "Enrollment #",
                "Role",
                "Booked",
                "Joined On",
              ].map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginated.map((s) => (
              <tr key={s._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {s.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {s.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {s.enrollmentNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {s.role.charAt(0).toUpperCase() + s.role.slice(1)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`inline-flex px-2 text-xs font-medium leading-5 rounded-full ${
                      s.isBooked
                        ? "text-green-800 bg-green-100"
                        : "text-red-800 bg-red-100"
                    }`}
                  >
                    {s.isBooked ? "Yes" : "No"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(s.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg font-medium ${
              currentPage === i + 1
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
