'use client';
import React from 'react';
import CountUp from 'react-countup';

const stats = [
    {
        num: 3,
        text: "Years of Experience",
    },
    {
        num: 40,
        text: "Projects Completed",
    },
];

const Stats = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl text-white font-bold mb-8">My Achievements</h2>
        <div className="flex flex-wrap gap-8 max-w-[80vw] mx-auto xl:max-w-none justify-center rounded-lg">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-1/2 sm:w-1/4 xl:w-1/5 bg-gray-800 p-20 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold text-yellow-500 mb-2"
              />
              <p className="text-lg text-gray-200">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
