// src/components/CountingStat.js
import React from "react";
import CountUp from "react-countup";

const CountingStat = ({ end, duration, separator, label, color }) => {
  return (
    <div className="group">
      <h3
        className={`text-5xl md:text-6xl font-extrabold ${color} group-hover:scale-105 transition transform`}
      >
        <CountUp end={end} duration={duration} separator={separator} />+
      </h3>
      <p className="text-lg md:text-xl font-bold text-gray-800 mt-2">{label}</p>
    </div>
  );
};

export default CountingStat;
