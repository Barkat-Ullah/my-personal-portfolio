import Lottie from "lottie-react";
import { BsBrowserFirefox } from "react-icons/bs";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaFigma,
  FaChrome,
  FaEdgeLegacy,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import man from "../../assets/Man.json";

const Skill = () => {
  const languages = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 rounded" />,
    },
    // { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
  ];
  const frameworks = [
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    // { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-slate-400" /> },
  ];
  const tools = [
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Figma", icon: <FaFigma className="text-pink-500" /> },
    // {
    //   title: "Photoshop",
    //   icon: <SiAdobephotoshop className="text-cyan-700" />,
    // },
  ];
  const brewser = [
    { title: "Google Chrome", icon: <FaChrome className="text-green-400" /> },
    {
      title: "Mozilla Firefox",
      icon: <BsBrowserFirefox className="text-blue-500" />,
    },
    // { title: "Opera", icon: <FaOpera className="text-red-500" /> },
    {
      title: "Microsoft Edge",
      icon: <FaEdgeLegacy className="text-sky-600" />,
    },
  ];

  return (
    <div className=" py-5 md:py-10 px-5 md:px-10">
      <h2 className="text-center text-xl md:text-4xl space-x-2 font-sans font-bold">
        <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ">
          My
        </span>
        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
          Skills
        </span>
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center justify-around my-4">
        <div className="w-1/2">
          <h2 className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500 text-2xl">
            Languages:
          </h2>
          <div className="flex flex-wrap mb-4">
            {languages?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500 text-2xl">
            Library & Frameworks:
          </h2>
          <div className="flex flex-wrap mb-4">
            {frameworks?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500 text-2xl">
            Tools & Technologies:
          </h2>
          <div className="flex flex-wrap mb-4">
            {tools?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500 text-2xl">
            Web Browsers:
          </h2>
          <div className="flex flex-wrap mb-4">
            {brewser?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <Lottie animationData={man} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
