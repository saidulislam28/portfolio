import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const Discuss = ({ data }) => {
  return (
    <div className="p-5">
      <div className="flex flex-col items-center justify-center w-full text-center bg-gray-800 text-white rounded-2xl p-8 md:p-12  mt-10 shadow-lg my-20 border max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl">
          I'm currently available for freelance work and open to new
          opportunities. Let's discuss how I can help bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`https://wa.me/${data?.phone || "+8801639279028"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md"
          >
            <IoLogoWhatsapp size={20} />
            Let's Discuss
          </a>

          <a
            href={
              data?.cv ||
              "https://drive.google.com/file/d/120GFBARyw-gck7HdQ65nNo8so61C4nal/view?usp=sharing"
            }
            target="_blank"
            download
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discuss;
