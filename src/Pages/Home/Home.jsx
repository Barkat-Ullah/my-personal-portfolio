import Education from "../../Layout/Education/Education";
import About from "../About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Projects />
      <Skill/>
      <Education />
      <Contact />
    </div>
    

  );
};

export default Home;
