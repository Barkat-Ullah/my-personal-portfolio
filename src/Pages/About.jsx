import { AwesomeButton } from "react-awesome-button";
// import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-awesome-button/dist/styles.css";
import { CgWebsite } from "react-icons/cg";
import Swal from "sweetalert2";

const About = () => {
  const progress = [
    { title: "Html", percentage: "98%" },
    { title: "Css", percentage: "90%" },
    { title: "Tailwind", percentage: "80%" },
    { title: "Javascript", percentage: "70%" },
    { title: "React", percentage: "60%" },
    { title: "MongoDB", percentage: "10%" },
  ];
  const handleButtonClick = async () => {
    await Swal.fire({
      icon: "info",
      title: "This project is not completed!",
      text: "Unfortunately, this project is still in progress.",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Okay",
    });
  };
  return (
    <div>
      <h2 className="text-center my-5 text-xl md:text-4xl font-sans font-bold">
        <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ml-2">
          About
        </span>{" "}
        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
          Me
        </span>
      </h2>

      <div>
        <div className="hero">
          <div className="hero-content flex flex-col items-center justify-between lg:flex-row">
            <div className="md:w-1/2">
              <img
                className="max-w-sm rounded-full h-[200px] md:h-[400px] w-full ml-2 md:ml-5"
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co/B3sw8MR/20221202-161238-2.jpg"
              />
            </div>
            <div className=" md:w-1/2">
              <h1 className="text-2xl md:text-4xl font-sans space-x-2 font-bold text-white ">
                Hi, I'm
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ml-2 ">
                  Rakib
                </span>
                <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                  Hassan.
                </span>
              </h1>

              <div className="content my-2 text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-pink-500 to-sky-500 dark:from-red-200 dark:via-indigo-300 dark:to-red-500 text-xl md:text-3xl font-bold ">
                <h1>As A </h1>
              </div>
              <p className="py-4  font-sans font-medium text-slate-300 text-justify">
                “ Hi there “, I am{" "}
                <span className="font-sans font-medium text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500  ">
                  Rakib
                </span>{" "}
                <span className="font-sans font-bold text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                  Hassan
                </span>
                , currently a student at Feni Polytechnic Institute. I am a
                passionate MERN Stack developer, dedicated to crafting immersive
                and responsive web experiences. With expertise in MongoDB,
                Express, React, and Node.js, I specialize in building dynamic
                and scalable web applications. My journey as a developer is
                fueled by a strong desire to create seamless user experiences
                and solve real-world problems through innovative technology
                solutions. Explore my portfolio to witness my commitment to
                creating impactful and efficient digital solutions.
              </p>
              <Link to="">
                <AwesomeButton
                  onPress={handleButtonClick}
                  after={<CgWebsite className="text-xl" />}
                  type="secondary"
                >
                  My Personal Website
                </AwesomeButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="text-white flex-1 ml-3 space-y-2 md:ml-8">
          <h1 className="text-4xl font-sans space-x-2 font-bold text-white ">
           
            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              Skills
            </span>
          </h1>
          <p className="">
            Throughout my journey, I've dedicated myself to honing various
            skills that contribute to my proficiency as a developer. These
            skills aren't just acquired. Still i am Exploring to the new features.
          </p>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3">
            {progress.map((progressItem) => (
              <div
                key={progressItem.title}
                className="mt-5 lg:mt-10 radial-progress"
              >
                <div className="rounded-lg text-white h-24 md:h-32 w-24 md:w-32 flex flex-col items-center justify-center  text-transparent  bg-sky-400 ">
                  <div
                    className="radial-progress"
                    style={{ "--value": progressItem.percentage }}
                    role="progressbar"
                  >
                    {progressItem.percentage}
                  </div>
                  <h3 className="text-sm md:text-base">{progressItem.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
