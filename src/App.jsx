import React from "react";
import USMap from "./components/USMap";

const App = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 sticky top-0 z-10">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Hospital Readmission Trends
          </h1>
          <ul className="flex space-x-4 text-gray-600 font-medium">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">By Age Group</a></li>
            <li><a href="#" className="hover:text-blue-500">By Condition</a></li>
            <li><a href="#" className="hover:text-blue-500">By Length of Stay</a></li>
            <li><a href="#" className="hover:text-blue-500">By Diagnoses</a></li>
            <li><a href="#" className="hover:text-blue-500">By Medication</a></li>
            <li><a href="#" className="hover:text-blue-500">Process Book</a></li>
            <li><a href="#" className="hover:text-blue-500">Demo</a></li>
          </ul>
        </nav>
      </header>

      {/* Overview */}
      <section className="px-6 py-6 bg-gray-50 border-b">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700 max-w-3xl">
          This interactive dashboard visualizes hospital readmission rates across the United States using CMS data. Hover over a state to view detailed statistics including discharge count and readmission percentage.
        </p>
      </section>

      {/* US Map Section */}
      <main className="p-6">
        <USMap />
      </main>
    </div>
  );
};

export default App;

