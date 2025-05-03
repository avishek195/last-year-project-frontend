import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyRoomPage = () => {
  const isBooked = useSelector((state) => state?.auth?.auth?.isBooked);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6 text-center">
        {isBooked ? (
          <>
            <h2 className="text-3xl font-semibold mb-2 text-gray-800">
              🎉 Room Already Booked
            </h2>
            <p className="text-gray-600 mb-4">
              You’ve successfully booked your room. Enjoy your stay!
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-2 text-gray-800">
              🚪 No Room Booked
            </h2>
            <p className="text-gray-600 mb-6">
              You need to book a room before accessing the dashboard.
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

export default MyRoomPage;
