import React from "react";
import { ArrowRight } from "lucide-react";
import UserLayout from "../../Layouts/UserLayout";
import pics from "../../assets/hero.jpg";

export default function HomePage() {
  return (
    <UserLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Welcome to Our Platform
            </h1>
            <p className="text-lg mb-6">
              Manage complaints efficiently with our easy-to-use dashboard.
            </p>
            <button className="flex items-center gap-2 bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition shadow-md">
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={pics}
              alt="Hero"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 md:px-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Features
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Easy Management</h3>
              <p className="text-gray-600">
                Handle complaints efficiently with intuitive tools and clear
                organization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Real-Time Updates</h3>
              <p className="text-gray-600">
                Keep track of changes and updates live without refreshing the
                page.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Mobile Friendly</h3>
              <p className="text-gray-600">
                Access and manage everything easily from your phone or tablet.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 md:px-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              About Our Platform
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to simplify the complaint management process for
              students and administrators. Built with the latest technology, our
              platform ensures speed, security, and scalability.
            </p>
          </div>
        </section>

        {/* Footer */}
        {/* <footer className="bg-gray-800 text-white text-center py-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
      </footer> */}
      </div>
    </UserLayout>
  );
}
