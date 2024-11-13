import { motion } from "framer-motion"
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"

const Feedbacks = () => {
  return (
    <div className="mt-10 bg-black-100 rounded-xl">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-72`}>
        <motion.div className="mt-12 mb-12" variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-6`}>
        {
          testimonials.map((testimonial, index) =>
            <Testimonial key={index} {...testimonial} />
          )
        }
      </div>
    </div>
  )
}
function Testimonial({ testimonial, name, designation, company, image, index }) {
  return (
    <motion.div
      variants={fadeIn("", 'spring', index * .5, .75)}
      className="bg-black-200 flex flex-col p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <div className="flex-1">
      <p className="text-white text-[38px] font-black">
        "
      </p>
      <p className="text-white text-[18px] tracking-wide">
        {testimonial}
      </p>

      </div>
      <div className="mt-6 flex justify-between  gap-2 items-center">
        <div className="flex flex-col flex-1">
          <p className="text-white font-medium text-base">
            <span className="blue-text-gradient ">@</span> {name}
          </p>
          <p className="text-secondary text-sm">
            {designation} of {company}
          </p>
        </div>
        <div>
          <img src={image} alt={`Image of ${name}`} className="w-10 h-10 rounded-full object-contain"/>
        </div>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Feedbacks,"")