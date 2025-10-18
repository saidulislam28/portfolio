import React from "react";

const Experience = ({ experience }) => {
  return (
    <div className="my-20 p-5">
      <h5
        id="contact"
        className="text-xl lg:text-3xl font-semibold text-white text-center my-10 border-b-4 w-[70%] md:w-[20%] mx-auto py-5 border-yellow-400"
      >
        Experience
      </h5>
      <div className="flex flex-col gap-5">
        {experience?.map((exp) => (
          <div className="flex flex-col border p-8 rounded-xl transition-all duration-1000 hover:border-green-400">
            <h3 className="text-white font-bold text-2xl">
              {exp?.title || "Full Stack Developer"}
            </h3>
            <h3 className="text-green-400 font-semibold text-xl">
              @{exp?.company || "Bitpixel"}
            </h3>
            <p className="mt-3 text-gray-500">{exp?.session || ""}</p>
            <p className="mt-3">{exp?.desc || ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
