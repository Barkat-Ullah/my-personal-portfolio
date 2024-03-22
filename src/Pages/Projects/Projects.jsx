import img1 from "../../assets/studio.png";
import img2 from "../../assets/study.png";
import img3 from "../../assets/numerade.png";
import { FaGithub, FaLink } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Projects = () => {
  
  return (
    <div className="px-5 lg:px-28 text-white py-5 md:py-10">
      <div className="my-10">
        <h2 className="text-center my-5 text-xl md:text-4xl font-sans font-bold">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ml-2">
            My
          </span>{" "}
          <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-2">
          <div className="card card-compact w-full pb-4 rounded-md bg-gray-700 shadow-xl">
            <figure>
              <div className="h-72 w-full overflow-scroll overflow-x-hidden">
                <LazyLoadImage
                  src={img1}
                  alt="Bangladeshi Chef"
                  effect="blur"
                  className=""
                />
              </div>
            </figure>
            <div className="card-body px-3 py-2">
              <h2 className="card-title text-xl font-bold my-3">
                Fitness Tracking
              </h2>
              <p className=" font-bold">Team Project</p>
              <div className="flex space-x-3 items-center">
                <FaGithub className="w-8 h-7" />
                <a
                  className="link underline-offset-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Jubayer-Ahmed-Sajid/Fitness-Studio-client-side"
                >
                  client
                </a>
                <FaGithub className="w-8 h-7" />
                <a
                  className="link underline-offset-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Jubayer-Ahmed-Sajid/Fitness-Studio-server-site"
                >
                  Server
                </a>
                <FaLink className="w-7 h-6" />
                <a
                  className="link underline-offset-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fitness-studio.surge.sh"
                >
                  live
                </a>
              </div>
            </div>
          </div>
          <div className="card card-compact w-full pb-4 rounded-md bg-gray-700 shadow-xl">
            <figure>
              <div className="h-72 w-full overflow-scroll overflow-x-hidden">
                <LazyLoadImage
                  src={img2}
                  alt="Educational and Learning"
                  effect="blur"
                  className=""
                />
              </div>
            </figure>
            <div className="card-body px-3 py-2">
              <h2 className="card-title text-xl font-bold my-3">
                Online Study
              </h2>
              <p className=" font-bold">Individual Project</p>
              <div className="flex space-x-3 items-center">
                <FaGithub className="w-8 h-7" />
                <a
                  className="link underline-offset-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Barkat-Ullah/online-group-study-client-site"
                >
                  Client
                </a>
                <FaGithub className="w-8 h-7" />
                <a
                  className="link underline-offset-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Barkat-Ullah/online-group-study-server-site"
                >
                  Server
                </a>
                <FaLink className="w-7 h-6" />
                <a
                  className="link underline-offset-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://obnoxious-chickens.surge.sh/"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
          <div className="card card-compact w-full pb-4 rounded-md bg-gray-700 shadow-xl">
            <figure>
              <div className="h-72 w-full overflow-scroll overflow-x-hidden">
                <LazyLoadImage
                  src={img3}
                  alt="Vite React"
                  effect="blur"
                  className=""
                />
              </div>
            </figure>
            <div className="card-body px-3 py-2">
              <h2 className="card-title text-xl font-bold my-3">
                Social Platform
              </h2>
              <p className=" font-bold">Individual Project</p>
              <div className="flex space-x-3 items-center">
                <FaGithub className="w-8 h-7" />
                <a
                  className="link underline-offset-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href=" https://github.com/Barkat-Ullah/social-platform-client"
                >
                  Client
                </a>
                <FaGithub className="w-8 h-7" />
                <a
                  className="link underline-offset-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Barkat-Ullah/social-platform-server-site"
                >
                  Server
                </a>
                <FaLink className="w-7 h-6" />
                <a
                  className="link underline-offset-1"
                  href="https://online-meet-platform.web.app/"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
