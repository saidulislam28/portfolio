import About from "./component/About/About";
import Navbar from "./component/Navigation/Navbar";
import Contact from "./component/contact/Contact";
import Education from "./component/education/Education";
import Footer from "./component/footer/Footer";
import Projects from "./component/projects/Projects";
import Skill from "./component/skills/Skill";

const Home = () => {
  return (
    <div>

    <div className="max-w-6xl mx-auto">
     <Navbar></Navbar>
     <About></About>
     <Skill></Skill>
     <Projects></Projects>
     <Education></Education>
     <Contact></Contact>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Home;