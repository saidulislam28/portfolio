import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Navbar from "./component/Navigation/Navbar";
import Footer from "./component/footer/Footer";
import { GetData } from "./services/api";
import { HOME_DATA } from "./services/endpoints";
import { IoArrowBackCircleOutline, IoLogoGithub } from "react-icons/io5";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { Fade } from "react-awesome-reveal";

const Project = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-home-data"],
    queryFn: async () => await GetData(HOME_DATA),
    staleTime: 0,
    select: (data) => {
      return data?.data ?? {};
    },
  });

  // Scroll to top on component load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <h1 className="text-white text-2xl font-semibold">Loading.......</h1>
      </div>
    );
  }

  const allProject = data?.projects || [];

  return (
    <div>
      <div className="max-w-6xl mx-auto p-5">
        <Navbar data={data?.base_data} />
        
        {/* Margin top to prevent overlap with the fixed navigation bar */}
        <div className="pt-24">
          <h5
            id="projects"
            className="text-xl lg:text-3xl font-semibold text-white text-center my-10 border-b-4 w-[60%] md:w-[20%] mx-auto py-5 border-yellow-400"
          >
            All Projects
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-3 my-10">
            {allProject.map((project, id) => (
              <Fade key={id} duration={3000}>
                <div className="max-w-2xl overflow-hidden bg-gray-600 rounded-lg shadow-md h-[550px] flex flex-col flex-grow-0">
                  <img
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-110 w-full h-64 cursor-pointer"
                    src={
                      project?.image ||
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png"
                    }
                    alt={project?.title || "Project Image"}
                  />

                  <div className="p-6 flex-grow">
                    <div>
                      <p className="mt-2 text-2xl font-semibold text-gray-300">
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
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          <div className="flex justify-start my-10">
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold text-gray-300 hover:text-white hover:font-bold transition text-2xl border-b-2 border-yellow-400"
            >
              <IoArrowBackCircleOutline /> Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer data={data?.base_data} />
    </div>
  );
};

export default Project;
