import { motion } from 'framer-motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import ProjectCard from './ProjectCard'


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[17px] text-secondary max-w-3xl leading-[30px]'
        >
          Transforming big ideas into user-friendly web solutions, my portfolio is proof that I can make pixels play nicely together. Whether it’s taming JavaScript into elegant code or convincing databases to yield data on command, I’ve got the full stack covered. On the front end,
          I’m all about smooth interfaces and snappy designs, with frameworks like React in my toolkit. So, if you’re ready to turn that next big idea into a digital reality, take a look around!
        </motion.p>
      </div>
      <div className='mt-14 flex flex-wrap gap-7 '>
        {
          projects.map((project, index)=>(
            <ProjectCard key={index} {...project}></ProjectCard>
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")