/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

// import Link from "next/link";
import { useState } from "react";
import Lottie from "lottie-react";
// import AnimatedLink from "./AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { RiMenuSearchLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import animationData from "../../assets/Animation5.json";

const Navbar = () => {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "about", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "My Skills", href: "/skill" },
    { title: "contact me", href: "/contact" },
    
  ];

  //   const defaultOptions = {

  //     autoplay: true,
  //     animationData: animationData,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      x: "-100%",
      width: 0,
    },
    animate: {
      x: 0,
      width: "30%",
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      x: "-100%",
      width: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="z-10 relative">
      <nav className="flex justify-between items-center bg-opacity-30 bg-black fixed top-0 right-0 left-0 max-w-6xl mx-auto py-8 lg:py-4 px-2">
        <div className="flex items-center gap-[1ch]">
          <div className="cursor-grab rounded-full " onClick={toggleMenu}>
            {/* <RiMenuSearchLine /> */}

            <div className="h-16 w-16 rounded-full border-4 border-pink-500">
              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>
        </div>
        <div className=" ">
          <h1 className="text-xl md:text-3xl space-x-2 font-sans font-extrabold text-center  ">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              Rakib
            </span>

            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              Hassan
            </span>
          </h1>
        </div>
        <div className="">
          <img
            className="rounded-full w-14"
            alt="img"
            src="https://lh3.googleusercontent.com/ogw/ANLem4Y-GKYHNpFat-xfQEyxGkVNkO4yLC_I-aEsWvTM=s32-c-mo"
          />
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-slate-900 text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <div className="w-5 h-5 bg-slate-900 rounded-full" />
                <p
                  className="cursor-grab  text-black border border-black p-3 text-2xl rounded-full bg-slate-300"
                  onClick={toggleMenu}
                >
                  <ImCross />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks?.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-[10px] md:text-xl font-bold text-start space-y-3 uppercase text-pink-500 border-2 border-teal-500 p-3 rounded-xl"
    >
      <Link to={href} >{title}</Link>
    </motion.div>
  );
};
