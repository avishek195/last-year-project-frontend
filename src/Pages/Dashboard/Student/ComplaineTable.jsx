import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit2, Trash2, Plus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  createComplaine,
  deleteComplaine,
  getAllComplaine,
  updateComplaine,
} from "../../../Redux/Slices/complaineSlice";

export default function ComplaintsTable() {
  const dispatch = useDispatch();
  const com = useSelector((state) => state?.complaine?.complaines);
  //   console.log("complain", com);

  //   const [data, setData] = useState(com);
  const [data, setData] = useState([]);
  //   console.log("data", data);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(data.length / pageSize);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [formType, setFormType] = useState("");
  const [formDescription, setFormDescription] = useState("");

  // Fetch complaints on mount
  useEffect(() => {
    dispatch(getAllComplaine());
  }, [dispatch]);
  useEffect(() => {
    setData(com);
  }, [com]);

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const openEdit = (c) => {
    // console.log(c);

    setSelectedComplaint(c);
    setFormType(c.complineType);
    setFormDescription(c.ComplaineDescription);
    setShowEditModal(true);
  };
  const openDelete = (c) => {
    setSelectedComplaint(c);
    setShowDeleteModal(true);
  };
  const openAdd = () => {
    setFormType("");
    setFormDescription("");
    setShowAddModal(true);
  };

  const handleEdit = async () => {
    await dispatch(
      updateComplaine({
        id: selectedComplaint._id,
        complineType: formType,
        ComplaineDescription: formDescription,
      })
    );
    setShowEditModal(false);
    await dispatch(getAllComplaine());
  };

  const handleDelete = async () => {
    await dispatch(
      deleteComplaine({
        id: selectedComplaint._id,
      })
    );
    setShowDeleteModal(false);
    await dispatch(getAllComplaine());
  };

  const handleAdd = async () => {
    await dispatch(
      createComplaine({
        complineType: formType,
        ComplaineDescription: formDescription,
      })
    );
    setShowAddModal(false);
    await dispatch(getAllComplaine());
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Complaines</h2>
        <button
          onClick={openAdd}
          className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-shadow shadow-md hover:shadow-lg"
        >
          <Plus className="mr-2" /> New Complaine
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Student Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((c) => (
              <tr key={c._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {/* {c._id.slice(-5)} */}
                  {c._id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {c.studentId.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {c.complineType}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {c.ComplaineDescription}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(c.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center space-x-2">
                  <button
                    onClick={() => openEdit(c)}
                    className="hover:text-indigo-600"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => openDelete(c)}
                    className="hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Add/Edit Modal */}
      {(showEditModal || showAddModal) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {showAddModal ? "New Complaint" : "Edit Complaint"}
              </h3>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setShowAddModal(false);
                }}
              >
                <X size={20} />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                value={formType}
                onChange={(e) => setFormType(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded p-2"
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
              />
            </div>
            <div className="text-right">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setShowAddModal(false);
                }}
                className="mr-2 px-4 py-2 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={showAddModal ? handleAdd : handleEdit}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                {showAddModal ? "Add" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-sm p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-6">
              Are you sure you want to delete this complaint?
            </p>
            <button
              onClick={() => setShowDeleteModal(false)}
              className="mr-2 px-4 py-2 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
