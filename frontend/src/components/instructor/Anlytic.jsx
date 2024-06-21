import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Anlytic = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Students Enrolled",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Enrollment Trends",
      },
    },
  };

  return (
    <div className="p-8 font-satoshi">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Analytics</h1>
        <p className="text-lg">
          Here you can see an overview of your courses' performance, including
          the total number of students, total income, and average review
          ratings.
        </p>
      </div>

      <div className="flex">
        <div className="w-2/3 bg-white p-4 rounded-lg shadow-lg">
          <Line data={data} options={options} />
        </div>

        <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg ml-4 flex flex-col justify-around">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold text-center">Total Students</h2>
            <p className="text-xl mt-2 text-center">1234</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold text-center">Total Income</h2>
            <p className="text-xl mt-2 text-center">$45,678</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center">Average Review</h2>
            <p className="text-xl mt-2 text-center">4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anlytic;
