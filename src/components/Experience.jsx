import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'

import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { textVariant } from "../utils/motion"

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>

      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              contentStyle={{
                background: '#1d1836',
                color: '#fff'
              }}
              date={experience.date}
              contentArrowStyle={{
                borderRight: '1px solid #232631',
              }}
              iconStyle={{
                // backgroundImage: experience.icon,
                backgroundColor: experience.iconBg
              }}
              icon={
                <div className="w-full h-full flex justify-center items-center">
                  <img
                    src={experience.icon}
                    className="w-10 h-10"
                    alt={experience.company_name} />
                </div>
              }
              key={index}>
                <div>
                  <h3 className=" text-2xl font-bold">
                    {experience.title}
                  </h3>
                  <p className="text-secondary font-semibold text-base m-0">
                    {experience.company_name}
                  </p>
                </div>
              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className="text-lg ">
                    {point}
                  </li>
                ))}

              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")