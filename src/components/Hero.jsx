/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";
import profilepic from "../assets/beauty.JPG";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
// import {
//   DiCss3,
//   DiHtml5,
//   DiJavascript1,
//   DiNodejsSmall,
//   DiReact,
// } from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the icon when scrolled down
      if (window.scrollY > 100) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className=" h-screen grid md:grid-cols-2 place-items-center gap-10 px-1">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          <TypeAnimation
            sequence={[
              "Fullstack Developer",
              1000,
              "Web Designer",
              1000,
              "Data Engineer",
              1000
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-3xl md:text-5xl italic mb-4" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200   tracking-tighter mb-4">
              HEY, I AM 
              <span className="text-purple-500 md:text-7xl text-5xl">YUXIN SHI</span>

          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-lg text-base mb-6">
              I&apos;m a passionate Full-Stack Developer and Data Engineer, skilled in AI-driven platforms, cloud architectures, and data analytics.

          </motion.p>
          <motion.div
            initial={{ opacity: 0 , y:50}}
            whileInView={{ opacity: 1 ,y:0}}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
                }}
                className="z-10 cursor-pointer font-bold text-gray-100 md:w-auto p-4 rounded-xl button-bg"
                href="/personal-website/assets/Yuxin_Shi_Resume.pdf" 
                download="Yuxin_Shi_Resume.pdf" 
              >
                Download CV
              </motion.a>
              <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                <motion.a whileHover={{scale:1.2}} href="https://github.com/YuxinYuna">
                  <AiOutlineGithub/>
                </motion.a>
                <motion.a whileHover={{scale:1.2}} href="https://www.linkedin.com/in/yuxin-shi-82b747291/">
                  <AiOutlineLinkedin/>
                </motion.a>
                <motion.a whileHover={{scale:1.2}} href="https://www.instagram.com/iam_yuna1019/">
                  <AiOutlineInstagram/>
                </motion.a>
              </div>
          </motion.div>
        </motion.div>
        <motion.img
        src={profilepic}
        className="w-[300px] md:w-[400px]"
        initial={{ opacity: 0 , scale:0.8}}
        whileInView={{ opacity: 1 ,scale:1}}
        viewport={{ once: true }}
        transition={{ duration: 1}}
        />

        
      </div>
      {/* <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: true }}
      transition={{ duration: 1,delay:2}}
      className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24">
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2"/>
        <DiCss3 className="text-blue-600 mx-2"/>
        <DiJavascript1 className="text-yellow-500 mx-2"/>
        <DiReact className="text-green-500 mx-2"/>
        <DiNodejsSmall className="text-purple-200 mx-2"/>
        <DiPython className="text-pink-500 mx-2"/>


      </motion.div> */}
      {showScrollIcon &&(
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-32 flex justify-center w-full"
        >
          <a href="#next-section" className="flex flex-col items-center cursor-pointer">
            <MdKeyboardDoubleArrowDown className="text-gray-50 text-6xl animate-bounce" />
          </a>
        </motion.div>

      )
      }
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={-600} size={1200}/>
      </div>
    </div>
  )
}

export default Hero