/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
      company: 'Merit Interactive Co., Ltd.',
      role: 'Software Engineer Intern',
      period: '10/2022 - 06/2023',
      description: 'As a Software Engineer Intern at Merit Interactive Co., Ltd. (Hangzhou, China, 10/2022 – 06/2023), I standardized large-scale population data using OLAP and ETL tools, improving reporting accuracy and accelerating decision-making by 10%. I implemented daily monitoring of user behavior statistics with SparkSQL, enhancing data analysis efficiency by 5%. Additionally, I analyzed and visualized user behavior data, leading to improved retention strategies and increased user engagement.',
    },

    {
      company: 'Datatrixs',
      role: 'Software Engineer Intern',
      period: '04/2024 - 07/2024',
      description: 'As a Software Engineer Intern at Datatrixs (San Francisco, CA, 04/2024 – 07/2024), I developed and maintained a responsive, AI-driven accounting platform using the MERN stack, deployed via Netlify. I implemented a microservices architecture with Node.js and Express, improving API response time by 10%, and leveraged Agile and Scrum methodologies to streamline development processes. Additionally, I resolved 15 user-reported bugs, enhancing site performance and achieving a 20% increase in user satisfaction.',
    },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.role}</p>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience