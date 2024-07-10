import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import "./about.css";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center mx-auto mt-20 gap-5 lg:gap-10">
      <div className="flex flex-col-reverse md:flex-row items-center gap-5 lg:gap-20 w-full lg:w-[80%] h-full">
        {/* Social Links */}
        <div className="flex lg:flex-col justify-center gap-4">
          <a href="https://github.com/saidulislam28/" target="_blank">
            <IoLogoGithub className="text-3xl text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/saidul-houlader/"
            target="_blank"
          >
            <IoLogoLinkedin className="text-3xl text-white bg-sky-400" />
          </a>
          <a href="https://www.instagram.com/saidul8883/" target="_blank">
            <IoLogoInstagram className="text-3xl text-red-400" />
          </a>
        </div>

        {/* Information */}
        <div className="flex-1 items-start p-4">
          <section className="  py-10">
            <div className="container mx-auto flex flex-col items-center space-y-8 text-left">
              <h1
                id="about"
                className="text-2xl lg:text-5xl font-bold leading-none w-full text-white"
              >
                MD Saidul Houlader
              </h1>
              <h5 className="mt-5 text-xl lg:text-2xl w-full text-gray-100">
                Web Developer
              </h5>
              <p className="mt-8 mb-12 text-lg">
                Hi there! I'm Saidul, a passionate developer with a keen focus
                on front-end technologies and React.
              </p>
              <div className="w-full">
                <a
                  className="btn button--flex text-white text-lg bg-gray-600"
                  href="https://drive.google.com/file/d/1njagE_7Mm4VSn-i45tOSaBZ5zt85mChc/view?usp=sharing"
                  target="_blank"
                >
                  Resume <FiDownload className="ml-2" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="p-4 w-full lg:w-[30%]">
        <img
          className="h-[360px] rounded-full my-image"
          src="https://i.postimg.cc/pX2X1Jkd/IMG-6712-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
