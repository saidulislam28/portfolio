import { useQuery } from "@tanstack/react-query";
import About from "./component/About/About";
import Competencies from "./component/About/Competencies";
import TechStack from "./component/About/TechStack";
import Experience from "./component/Experience";
import Navbar from "./component/Navigation/Navbar";
import Contact from "./component/contact/Contact";
import Discuss from "./component/discuss/Discuss";
import Education from "./component/education/Education";
import Footer from "./component/footer/Footer";
import Projects from "./component/projects/Projects";
import { GetData } from "./services/api";
import { HOME_DATA } from "./services/endpoints";

const Home = () => {

  const { data, isLoading } = useQuery({
    queryKey: ["get-home-data"],
    queryFn: async () => await GetData(HOME_DATA),
    staleTime: 0,
    select: (data) => {
      return data?.data ?? {};
    },
  });

  console.log("data", data);

  if (isLoading) {
    <div>
      <h1>loading.......</h1>
    </div>;
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar data={data?.base_data}></Navbar>
        <About data={data?.base_data}></About>
        <Competencies data={data?.competencies}></Competencies>
        <TechStack skills={data?.skills}></TechStack>
        <Experience experience={data?.experience}></Experience>
        <Education education={data?.education}></Education>
        {/* <Skill skills={data?.skills}></Skill> */}
        <Projects allProject={data?.projects}></Projects>
        <Contact data={data?.base_data}></Contact>
        <Discuss data={data?.base_data}></Discuss>
      </div>
      <Footer data={data?.base_data}></Footer>
    </div>
  );
};

export default Home;
