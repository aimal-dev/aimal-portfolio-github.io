import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Aimal from "../assets/aimal-1.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants={textVariant(0.1)} className="flex gap-5 flex-col xl:flex-row lg: flex-row md:flex-row sm:flex-col">
      <div className="w-[100%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[100%]">
          <motion.div variants={textVariant()}>
        <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>
          </motion.div>
           <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I specialize in building responsive websites using HTML, CSS, JavaScript, jQuery, SCSS, and frontend
      frameworks. Skilled in React, Redux, Next, WordPress (Block Themes), Node.js, and basic PHP, I’ve worked on
      social platforms and e-commerce sites for companies in Malaysia and Singapore. I enjoy enhancing my web
      development expertise by learning new technologies
        and frameworks. I’m also a quick learner, adaptable, and open to new challenges. My goal is to create
        visually appealing and user-friendly websites that meet the needs of my clients.
          </motion.p>
      </div>
      <div className="w-[100%] xl:w-[35%] lg:w-[35%] md:w-[35%] sm:w-[100%] overflow-hidden">
        <img src={Aimal} alt="Background" className="w-full overflow-hidden green-pink-gradient p-[1px] rounded-[20px] shadow-card" />
      </div>
        
    </motion.div>
    

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
