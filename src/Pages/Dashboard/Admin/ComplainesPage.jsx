import React, { useState, useEffect } from "react";

const dummyComplaints = [
  {
    _id: "680f30c75a632e0f09c349cc",
    studentId: {
      _id: "680f2ee75a632e0f09c349bf",
      name: "AVISHEK MISTRY",
      email: "avishekmistry@gmail.com",
    },
    complineType: "internet",
    ComplaineDescription: "Internet is so slow",
    createdAt: "2025-04-28T07:39:51.167Z",
  },
  {
    _id: "680f30b85a632e0f09c349c6",
    studentId: {
      _id: "680f2ee75a632e0f09c349bf",
      name: "AVISHEK MISTRY",
      email: "avishekmistry@gmail.com",
    },
    complineType: "light",
    ComplaineDescription: "Light is not working",
    createdAt: "2025-04-28T07:39:36.075Z",
  },
];

const ComplainesPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(complaints.length / pageSize);

  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [modalType, setModalType] = useState(""); // "solve" or "delete"

  useEffect(() => {
    setComplaints(dummyComplaints);
  }, []);

  const paginatedComplaints = complaints.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const openModal = (complaint, type) => {
    setSelectedComplaint(complaint);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedComplaint(null);
    setModalType("");
  };

  const confirmAction = () => {
    if (modalType === "solve") {
      setComplaints((prev) =>
        prev.map((c) =>
          c._id === selectedComplaint._id ? { ...c, isSolved: true } : c
        )
      );
    } else if (modalType === "delete") {
      setComplaints((prev) =>
        prev.filter((c) => c._id !== selectedComplaint._id)
      );
    }
    closeModal();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-lg relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Complaints</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Student Name",
                "Email",
                "Type",
                "Description",
                "Date",
                "Actions",
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
            {paginatedComplaints.map((complaint) => (
              <tr
                key={complaint._id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {complaint.studentId.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {complaint.studentId.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 capitalize">
                  {complaint.complineType}
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-800 max-w-xs">
                  {complaint.ComplaineDescription}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(complaint.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {complaint.isSolved ? (
                    <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                      Solved
                    </span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openModal(complaint, "solve")}
                        className="px-3 py-1 text-xs bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        Solve
                      </button>
                      <button
                        onClick={() => openModal(complaint, "delete")}
                        className="px-3 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  )}
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

      {/* Modal */}
      {selectedComplaint && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-4">
              {modalType === "solve"
                ? "Mark this complaint as solved?"
                : "Are you sure you want to delete this complaint?"}
            </h2>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={confirmAction}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplainesPage;
