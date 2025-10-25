/* eslint-disable  */
import React from "react";

// const skills = [
//   "React.js",
//   "Next.js",
//   "React Native",
//   "TypeScript",
//   "JavaScript",
//   "Redux",
//   "Zustand",
//   "TanStack Query",
//   "Node.js",
//   "Express.js",
//   "NestJS",
//   "Prisma",
//   "PostgreSQL",
//   "MongoDB",
//   "Mongoose",
//   "Tailwind CSS",
//   "Bootstrap",
//   "Shadcn",
//   "Axios",
//   "Firebase",
//   "JWT",
//   "SSLCommerz",
//   "Android Studio",
//   "GitHub",
//   "Vercel",
// ];

const TechStack = ({ skills }) => {
  return (
    <div className="my-20 p-5">
      <h5
        id="contact"
        className="text-xl lg:text-3xl font-semibold text-white text-center my-10 border-b-4 w-[70%] md:w-[20%] mx-auto py-5 border-yellow-400"
      >
        Tech Stack
      </h5>
      <div className="flex flex-wrap gap-3">
        {skills?.map((skill, index) => (
          <span
            key={index}
            className="border border-gray-700 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-1000 hover:text-green-400 hover:border-green-400 cursor-default"
          >
            {skill?.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
