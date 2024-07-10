import { FaBootstrap, FaHtml5,  FaReact } from "react-icons/fa";
import "./skill.css";
import { IoLogoCss3, IoLogoFirebase, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skill = () => {
  return (
    <div id="skill1" className="p-2">

      <h5 id="skills" className="text-2xl lg:text-5xl font-semibold text-white text-center my-10 border-b-4 w-[70%] lg:w-[30%] mx-auto py-5 border-yellow-400 ">Technical Skills</h5>
      <div className="my-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 items-center justify-center">
      <div className="my-skills shadow-xl shadow-yellow-400">
        <div className="bg">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl flex flex-col items-center font-bold text-white">HTML5
              <span className="text-sm mt-2 text-gray-200 font-normal">intermediate</span>
            </h1>
            <h2 className="text-5xl text-yellow-400">
              <FaHtml5></FaHtml5>
            </h2>
          </div>
        </div>
        <div className="blob bg-yellow-300"></div>
      </div>
      <div className="my-skills shadow-lg shadow-sky-400">
        <div className="bg">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl flex flex-col items-center font-bold text-white">CSS3
              <span className="text-sm mt-2 text-gray-200 font-normal">intermediate</span>
            </h1>
            <h2 className="text-5xl text-sky-400">
            <IoLogoCss3 />
            </h2>
          </div>
        </div>
        <div className="blob bg-sky-400"></div>
      </div>
      <div className="my-skills shadow-lg shadow-[#7d11f8]">
        <div className="bg">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl flex flex-col items-center font-bold text-white">Bootstrap
              <span className="text-sm mt-2 text-gray-200 font-normal">intermediate</span>
            </h1>
            <h2 className="text-5xl text-[#7d11f8]">
            <FaBootstrap />
            </h2>
          </div>
        </div>
        <div className="blob bg-[#7d11f8]"></div>
      </div>
      <div className="my-skills shadow-lg shadow-yellow-600">
        <div className="bg">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl flex flex-col items-center font-bold text-white">Javascript
              <span className="text-sm mt-2 text-gray-200 font-normal">intermediate</span>
            </h1>
            <h2 className="text-5xl text-yellow-400">
            <IoLogoJavascript />
            </h2>
          </div>
        </div>
        <div className="blob bg-yellow-600"></div>
      </div>
      <div className="my-skills shadow-lg shadow-sky-400">
        <div className="bg">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl flex flex-col items-center font-bold text-white">Tailwind
              <span className="text-sm mt-2 text-gray-200 font-normal ">intermediate</span>
            </h1>
            <h2 className="text-5xl text-sky-400">
            <RiTailwindCssLine />
            </h2>
          </div>
        </div>
        <div className="blob bg-sky-400"></div>
      </div>

      <div className="my-skills shadow-lg shadow-[#58c4dc]">
        <div className="bg">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl flex flex-col items-center font-bold text-white">React js
              <span className="text-sm mt-2 text-gray-200 font-normal">intermediate</span>
            </h1>
            <h2 className="text-6xl text-[#58c4dc]">
            <FaReact />
            </h2>
          </div>
        </div>
        <div className="blob bg-[#58c4dc]"></div>
      </div>

      <div className="my-skills shadow-lg shadow-gray-400">
        <div className="bg">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl flex flex-col items-center font-bold text-white">Next js
              <span className="text-sm mt-2 text-gray-200 font-normal">basic</span>
            </h1>
            <h2 className="text-6xl text-black">
            <RiNextjsFill />
            </h2>
          </div>
        </div>
        <div className="blob bg-gray-400"></div>
      </div>


      <div className="my-skills shadow-lg shadow-[#6aa05c]">
        <div className="bg">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl flex flex-col items-center font-bold text-white">Node js
              <span className="text-sm mt-2 text-gray-200 font-normal">Basic</span>
            </h1>
            <h2 className="text-2xl text-[#6aa05c]">
            <IoLogoNodejs />
            </h2>
          </div>
        </div>
        <div className="blob bg-[#6aa05c]"></div>
      </div>
      <div className="my-skills shadow-lg shadow-white">
        <div className="bg">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl flex flex-col items-center font-bold text-white">Express js
              <span className="text-sm mt-2 text-gray-200 font-normal">intermediate</span>
            </h1>
            <h2 className="text-5xl text-white">
            <SiExpress />

            </h2>
          </div>
        </div>
        <div className="blob bg-white"></div>
      </div>
      <div className="my-skills shadow-lg shadow-[#f58304]">
        <div className="bg">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl flex flex-col items-center font-bold text-white">Firebase
              <span className="text-sm mt-2 text-gray-200 font-normal">intermediate</span>
            </h1>
            <h2 className="text-5xl text-[#f58304]">
            <IoLogoFirebase />

            </h2>
          </div>
        </div>
        <div className="blob bg-[#f58304]"></div>
      </div>
      <div className="my-skills shadow-lg shadow-[#00ed64]">
        <div className="bg">
          <div className="h-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl flex flex-col items-center font-bold text-white">MongoDB
              <span className="text-sm mt-2 text-gray-200 font-normal">intermediate</span>
            </h1>
            <h2 className="text-5xl text-[#00ed64]">
            <SiMongodb />

            </h2>
          </div>
        </div>
        <div className="blob bg-[#00ed64]"></div>
      </div>
     
    </div>
    </div>
  );
};

export default Skill;
