import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllComplaine } from "../../../Redux/Slices/complaineSlice";
import ComplaintsTable from "./ComplaineTable";

const ComplainePage = () => {
  //   const isBooked = useSelector((state) => state?.auth?.auth?.isBooked);
  const isBooked = true;

  return (
    <div className="flex items-center justify-center h-full">
      <div className="">
        {isBooked ? (
          <>
            <ComplaintsTable />
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-2 text-gray-800">
              You can not Access the complaine
            </h2>
            <p className="text-gray-600 mb-6">
              You need to book a room before accessing the complaine.
            </p>
            <Link
              to="http://localhost:5000"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-lg transition-shadow shadow-md hover:shadow-lg"
            >
              Book Now with AI
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ComplainePage;
