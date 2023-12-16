import { TypeAnimation } from "react-type-animation";
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
import resume from "../../assets/Resumes.txt";
import Lottie from "lottie-react";
import animationImg from "../../assets/Animation.json";

// const resume = "https://drive.google.com/file/d/1idvHOXFvFtPaEc01FYj6TDv3MNDTgQBx/view?usp=sharing"

const Banner = () => {
    
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex items-center justify-between sm:mt-20 flex-col lg:flex-row-reverse">
          <div className="w-1/3 mt-32 md:mt-6">
            <Lottie
              animationData={animationImg}
              loop={true}
              height="99%"
              width="99%"
            />
          </div>
          <div className="w-2/3">
            <h1 className="text-4xl font-sans space-x-2 font-bold text-white ">
              Hi, I'm
              <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ml-2 ">
                Rakib
              </span>
              <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                Hassan
              </span>
            </h1>
            <div className="my-3">
              <TypeAnimation
                className="text-3xl text-transparent bg-gradient-to-br bg-clip-text from-blue-600 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500 font-bold"
                cursor={true}
                sequence={[
                  "Front-end Developer",
                  2000,
                  "Mern-stack Developer",
                  2000,
                  " React Developer",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>

            <p className="py-4 tracking-wide font-sans font-medium text-slate-300 text-justify">
              A MERN stack developer is a professional who specializes in using
              a specific set of technologies for web development. The MERN stack
              is an acronym that stands for React, NodeJs, ExpressJs, Mongodb
              etc.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <div>
              {/* <AwesomeButton type="primary" >
                {" "}
                My Resume
              </AwesomeButton> */}

              <a href={resume} download="Rakib_Hassan_Resume.pdf">
                <AwesomeButtonProgress
                  after={<FaCloudDownloadAlt className="text-xl" />}
                  type="primary"
                  onPress={async (element, next) => {
                    next();
                  }}
                >
                  My Resume
                </AwesomeButtonProgress>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
