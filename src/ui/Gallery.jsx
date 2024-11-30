"use client";

import React, { useState } from "react";
import ProjectsGrid from "./projects";

// const states = [
//   "all",
//   "Abia",
//   "Adamawa",
//   "Akwa Ibom",
//   "Anambra",
//   "Bauchi",
//   "Bayelsa",
//   "Benue",
//   "Borno",
//   "Cross River",
//   "Delta",
//   "Ebonyi",
//   "Edo",
//   "Ekiti",
//   "Enugu",
//   "Gombe",
//   "Imo",
//   "Jigawa",
//   "Kaduna",
//   "Kano",
//   "Katsina",
//   "Kebbi",
//   "Kogi",
//   "Kwara",
//   "Lagos",
//   "Nasarawa",
//   "Niger",
//   "Ogun",
//   "Ondo",
//   "Osun",
//   "Oyo",
//   "Plateau",
//   "Rivers",
//   "Sokoto",
//   "Taraba",
//   "Yobe",
//   "Zamfara",
//   "FCT - Abuja",
// ];

const categories = [
  "all",
  "Inverter System",
  "Street Light",
  "Solar Borehole   ",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="text-center">
      <h2 className="text-3xl lg:text-5xl font-bold">Previous Installations</h2>
      <p className="text-lg w-full lg:w-1/2 mx-auto mt-3">
        Across the 36 states of the federation, we have led the Installation and
        Maintenance of solar inverter systems, panels, streetlights, and other
        solar powered devices for organizations, institutions and homes.
      </p>

      <div className="flex lg:gap-x-1 w-full lg:w-3/5 flex-wrap items-center justify-center mx-auto mt-5">
        {/* {categories.map((category, index) => (
          <div
            key={index}
            className={`capitalize font-medium px-2 lg:px-3 lg:py-1 py-[.6px] rounded cursor-pointer flex items-center justify-center transition ${
              activeCategory == index && "bg-green-600 text-white"
            }`}
            onClick={() => setActiveCategory(index)}
          >
            {category}
          </div>
        ))} */}
      </div>
      <div className="text-left">
        <ProjectsGrid />
      </div>
    </div>
  );
};

export default Gallery;
