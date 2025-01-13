/* eslint-disable no-unused-vars */
import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    I&apos;m a Computer Science professional pursuing a Master’s in Computer Science Engineering at Santa Clara University (GPA 3.7) and holding a Bachelor’s from The University of Nottingham, with a Hybribio Scholarship. Through internships at Datatrixs and Merit Interactive, I gained hands-on experience in developing AI-driven platforms, optimizing microservices, and leveraging data analysis tools like SparkSQL to enhance user engagement and decision-making.
                    </p>
                </div>

                <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">4
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Projects</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">2
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Internships</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">80k
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Lines of Code Written</span></p>
                    </div>

                </div>

            </div>

            <form
                action="https://getform.io/f/bxooxyxa"
                method="POST"
                className=" max-w-6xl p-5 md:p-12"
                id="form"
            >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <input type="hidden" name="_gotcha" style={{display:"none !important"}}/>
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <button
              type="submit"
              className="button-bg w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
            
          </form>

        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact