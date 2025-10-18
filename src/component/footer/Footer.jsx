import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";

const Footer = ({ data }) => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-2 ">
        <nav className="grid grid-cols-2 lg:grid-flow-col gap-4">
          <a href="#home" className="link link-hover">
            Home
          </a>
          <a href="#about" className="link link-hover">
            About
          </a>

          <a href="#skills" className="link link-hover">
            Skills
          </a>
          <a href="#projects" className="link link-hover">
            Projects
          </a>
          <a href="#education" className="link link-hover">
            Education
          </a>
          <a href="#contact" className="link link-hover">
            Contact
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href={
                data?.facebook ||
                "https://www.facebook.com/profile.php?id=100024676355421"
              }
              target="_blank"
            >
              <FaFacebookSquare className="text-4xl" />
            </a>
            <a
              href={data?.github || "https://github.com/saidulislam28"}
              target="_blank"
            >
              <FaGithub className="text-4xl" />
            </a>
            <a
              href={
                data?.linkedin || "https://www.linkedin.com/in/saidul-houlader"
              }
              target="_blank"
            >
              <CiLinkedin className="text-4xl" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © ${new Date().getFullYear()} - All right reserved by
            Saidul.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
