import { useQuery } from "@tanstack/react-query";
import About from "./component/About/About";
import Navbar from "./component/Navigation/Navbar";
import Contact from "./component/contact/Contact";
import Education from "./component/education/Education";
import Footer from "./component/footer/Footer";
import Projects from "./component/projects/Projects";
import Skill from "./component/skills/Skill";
import { GetData } from "./services/api";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-home-data"],
    queryFn: async () => await GetData("web-setting/web-data"),
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
        <Skill skills={data?.skills}></Skill>
        <Projects allProject={data?.projects}></Projects>
        <Education education={data?.education}></Education>
        <Contact data={data?.base_data}></Contact>
      </div>
      <Footer data={data?.base_data}></Footer>
    </div>
  );
};

export default Home;
