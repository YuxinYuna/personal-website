/* eslint-disable no-unused-vars */
import React from "react"
import Reveal from "./Reveal"
// Import required icons
import { DiHtml5, DiCss3, DiSass, DiBootstrap, DiJavascript1, DiReact, DiRuby,DiNodejsSmall, DiMongodb, DiMysql, DiGithubBadge, DiPython, DiJava, DiGit, DiVisualstudio } from 'react-icons/di';
import {SiCplusplusbuilder,SiIntellijidea , SiPycharm,SiFlask, SiAmazondynamodb,SiTensorflow,SiPytorch,SiNumpy,SiPandas,SiApachespark,SiPlotly} from 'react-icons/si';
import { FaAws } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr"

// JSON with categories and technologies
const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
      { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
      { name: 'React', icon: <DiReact className='text-green-500' /> },
      { name: 'Ruby on Rails', icon: <DiRuby className='text-red-600' /> },
      { name: 'Flask', icon: <SiFlask className='text-gray-600' /> },
    ],
  },
  {
    category: 'Fullstack',
    technologies: [
      { name: 'Node.js', icon: <DiNodejsSmall className='text-purple-200' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
      { name: 'MySQL', icon: <DiMysql className='text-blue-500' /> },
      { name: 'DynamoDB', icon: <SiAmazondynamodb className='text-yellow-600' /> },
      { name: 'AWS Cloud', icon: <FaAws className='text-blue-500' /> }, // Updated AWS Cloud Icon
      { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
    ],
  },
  {
    category: 'Data and ML',
    technologies: [
      { name: 'Python', icon: <DiPython className='text-blue-600' /> },
      { name: 'TensorFlow', icon: <SiTensorflow className='text-orange-500' /> },
      { name: 'PyTorch', icon: <SiPytorch className='text-red-500' /> },
      { name: 'NumPy', icon: <SiNumpy className='text-blue-400' /> },
      { name: 'Pandas', icon: <SiPandas className='text-purple-600' /> },
      { name: 'Apache Spark', icon: <SiApachespark className='text-orange-600' /> },
      { name: 'Matplotlib', icon: <SiPlotly className='text-green-500' /> },
    ],
  },
  // {
  //   category: 'Tools',
  //   technologies: [
  //     { name: 'Git', icon: <DiGit className='text-red-500' /> },
  //     { name: 'IntelliJ', icon: <SiIntellijidea  className='text-pink-500' /> },
  //     { name: 'VS Code', icon: <DiVisualstudio className='text-blue-500' /> },
  //     { name: 'PyCharm', icon: <SiPycharm className='text-green-600' /> },
  //   ],
  // },
  {
    category: 'Languages',
    technologies: [
      { name: 'C/C++', icon: <SiCplusplusbuilder className='text-yellow-400' /> },
      { name: 'Java', icon: <DiJava className='text-red-500' /> },
      { name: 'Python', icon: <DiPython className='text-blue-600' /> },
      { name: 'Ruby', icon: <DiRuby className='text-red-600' /> },
      { name: 'SQL', icon: <GrMysql className='text-blue-500' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h1 className="text-3xl font-bold mb-4 text-center">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills