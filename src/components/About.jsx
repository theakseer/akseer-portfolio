import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../style'
import { services } from '../constants'

import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = (props) => {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  return (
    <>
      <Tilt 
      options={defaultOptions}
      className="xs:w-[250px] w-full">
        <motion.div
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        variants={fadeIn("right","spring", 0.5* props.index, 0.75)}>
        <div
        className='bg-tertiary py-5 rounded-[20px] min-h-[280px] flex justify-center items-center flex-col'
        options={{
          max:45,
          scale:1,
          speed: 450
          
        }}>
          <img src={props.icon} 
          className='w-16 h-16 object-contain'
          alt="title" />
          <h3 className='text-white text-[20px] font-bold text-center'>{props.title}</h3>
          </div>  
        </motion.div>
      </Tilt>
    </>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-8 max-w-3xl'>
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")