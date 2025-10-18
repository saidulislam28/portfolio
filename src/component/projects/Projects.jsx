import { IoLogoGithub } from "react-icons/io5";
import { LuArrowUpRightSquare } from "react-icons/lu";

import { Fade } from "react-awesome-reveal";

const Projects = ({ allProject }) => {
  // const allProject = [
  //   {
  //     title: "BrightSpace",
  //     image: brightSpace,
  //     description:
  //       "BrightSpace is an innovative virtual classroom platform designed to enhance the online learning experience for both students and teachers. This full-featured platform supports a range of functionalities, including live video calls, AI-driven chat for mental health support and general queries, and a structured course management system. Students can access classes, materials, and grades shared by teachers, fostering a collaborative learning environment.",

  //     liveDemo: "https://bright-space.netlify.app/",
  //     github: "https://github.com/aticmahbub/bright-space",
  //     viewMore: "",
  //   },
  //   {
  //     title: "TourOp",
  //     image: assignment10,
  //     description:
  //       "TourOp is a dynamic web application designed for travel enthusiasts looking to explore the best tourist destinations across South Asia. With TourOp, users can effortlessly browse through a comprehensive list of stunning locations, add new places, and keep the information up-to-date by editing details about the creators of each tour place card.",

  //     liveDemo: "https://tourop-client.netlify.app/",
  //     github: "https://github.com/saidulislam28/TourOP-client",
  //     viewMore: "",
  //   },
  //   {
  //     title: "StudyMate",
  //     image: assignment11,
  //     description:
  //       "Study Mate is an innovative web platform designed to enhance collaborative learning among students. It serves as a hub where students can manage their academic tasks efficiently by taking on assignments, creating tasks for peers, and providing constructive feedback.",

  //     liveDemo: "https://elegant-torrone-7cb8a9.netlify.app/",
  //     github: "https://github.com/saidulislam28/studymate-client",
  //     viewMore: "",
  //   },
  //   {
  //     title: "MicroEarn",
  //     image: assignment12,
  //     description:
  //       "Micro Earn is an innovative platform designed to facilitate micro-earning opportunities for users. It provides a streamlined environment where individuals can perform small tasks, complete various assignments, and earn rewards.",

  //     liveDemo: "https://micro-earn-authentication.web.app/",
  //     github: "https://github.com/saidulislam28/micro-earn-client",
  //     viewMore: "",
  //   },
  // ];

  return (
    <div id="projects1">
      <h5
        id="projects"
        className=" text-xl lg:text-3xl font-semibold text-white   text-center my-10 border-b-4 w-[60%] lg:w-[20%] mx-auto py-5 border-yellow-400 "
      >
        My Projects
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-3 my-10">
        {allProject?.map((project, id) => (
          <Fade key={id} duration={3000}>
            <div className="max-w-2xl overflow-hidden bg-gray-600 rounded-lg shadow-md h-[550px] flex flex-col flex-grow-0">
              <img
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110 w-full h-64 cursor-pointer"
                src={
                  project?.image ||
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png"
                }
                alt="Article"
              />

              <div className="p-6 flex-grow">
                <div>
                  <p className=" mt-2 text-2xl font-semibold text-gray-300 ">
                    {project?.title}
                  </p>
                  <p className="mt-2 text-sm text-white">{project?.desc}</p>
                </div>
              </div>

              {/* links */}
              <div className="flex flex-wrap justify-between gap-3 md:gap-5 p-5 text-gray-700">
                <a
                  href={project?.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-gray-300 hover:text-white hover:underline hover:font-bold transition"
                >
                  Live Demo <LuArrowUpRightSquare />
                </a>

                <a
                  href={project?.git_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-gray-300 hover:text-white hover:underline hover:font-bold transition"
                >
                  Github <IoLogoGithub />
                </a>

                {/* <a
                  href="#"
                  className="flex items-center gap-2 font-semibold text-gray-300 hover:text-white hover:underline hover:font-bold transition"
                >
                  View More <IoArrowForwardCircleOutline />
                </a> */}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Projects;
