import { motion } from 'framer-motion'
import React from 'react'
import { staggerContainer } from '../utils/motion'
import { styles } from '../style'


const SectionWrapper = (Component, IdName) => function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={IdName}>&nbsp;</span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper