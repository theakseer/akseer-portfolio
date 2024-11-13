import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import { Tilt } from "react-tilt"
import { github } from "../assets"

const ProjectCard = ({ index, name, description, image, source_code_link, tags }) => {
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
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt
        options={defaultOptions}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] h-full flex flex-col"
      >
        <div className="w-full relative h-[230px]">
          <img src={image} alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 card-img_hover flex justify-end m-3">
            <div className="black-gradient w-10 h-10 flex justify-center rounded-full items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} alt="github" className="h-1/2 w-1/2" />
            </div>
          </div>
        </div>
        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-2xl">{name}</h3>
          <p className="mt-1 text-secondary">{description}</p>
        </div>
        <div className="flex mt-3 flex-wrap gap-2 ">
          {
            tags.map((tag, index) => (
          <span key={index} className={`${tag.color} text-sm`}>#{tag.name}</span>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

export default ProjectCard