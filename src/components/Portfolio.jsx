/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.jpeg"
import project4 from "../assets/project4.jpeg"
import project5 from "../assets/project5.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project3,
      title: "Women's clothing e-commerce platform",
      description: "A Laravel-based e-commerce platform specializing in selling women’s clothing, featuring product management, secure checkout, and responsive design.",
      links: {
        site: "#",
        github: "https://github.com/YuxinYuna/E-commerce-platform",
      },
    },
    {
      img: project4,
      title: "Prepared Dishes Shop Website",
      description: "An innovative prepared dishes marketplace built with Ruby on Rails, offering seamless browsing, efficient order management, and an engaging user experience.",
      links: {
        site: "#",
        github: "https://github.com/YuxinYuna/Web_Programming_Ruby_ShoppingWebsite",
      },
    },
    {
      img: project1,
      title: "Book Summarizer Tool",
      description: "A React and Node.js-based application that uses Google Natural Language AI to provide automated book summaries with an intuitive UI.",
      links: {
        site: "#",
        github: "https://github.com/YuxinYuna/Book-summarizer",
      },
    },
    {
      img: project2,
      title: "Automated File Processing System",
      description: "A file processing system leveraging AWS services like S3, Lambda, EC2, and DynamoDB, with a secure React-based UI for file uploads and automated processing.",
      links: {
        site: "#",
        github: "https://github.com/YuxinYuna/File_Process_System",
      },
    },
    {
      img: project5,
      title: "Time Series Classification of Belgian Freight Data",
      description: "This project leverages the Belgium OBU dataset to develop, analyze, and compare advanced time-series models, such as LSTM and LSTM-FCN, for predicting vehicle-based observational data.",
      links: {
        site: "#",
        github: "https://github.com/YuxinYuna/time-series-classification",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio
