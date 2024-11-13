import React, { useRef, useState } from 'react'
import { SectionWrapper } from '../hoc'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { motion } from 'framer-motion'
import { slideIn, textVariant } from '../utils/motion'
import Earth from './canvas/Earth'


const Contact = () => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",   
    message: "", 
  })
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  function handleChange (e){
    setForm({...form, [e.target.name]: e.target.value})
    // console.log([e.target.name])
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    emailjs
    .sendForm('service_uyw0r0w', 'template_1oxyknd', formRef.current, {
      publicKey: 'orJUSQaAJ17crbKKN',
    })
    .then(
      () => {
        setLoading(false)
        alert('Thank you! I will get back to you as soon as possible.');
        setForm({
          user_name: "",
          user_email: "", 
          message: "",
        })
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }

  return (
    <div
      className='flex flex-col-reverse lg:flex-row gap-10 overflow-hidden xl:mt-12'>
      <motion.div className={`p-8 bg-black-100 flex-1 rounded-2xl min-h-72`}
        variants={slideIn("left", "tween", .3, 1)}
      >
        <p className={styles.sectionSubText}>Connect with me</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8 mt-10'
        >
          <label className='flex flex-col gap-3 font-light'>
            <span>Your name</span>
            <input 
              type="text"
              name="user_name"
              onChange={handleChange}
              value={form.name}
              className='bg-tertiary p-4 py-3 rounded-xl'
              placeholder='Enter name here' />
          </label>
          <label className='flex flex-col gap-3 font-light'>
            <span>Email</span>
            <input type="email"
              name='user_email'
              onChange={handleChange}
              value={form.email}
              className='bg-tertiary p-4 py-3 rounded-xl'
              placeholder='Enter email' />
          </label>
          <label className='flex flex-col gap-3 font-light'>
            <span>Send me a message</span>
            <textarea
              rows={5}
              onChange={handleChange}
              type="text"
              name='message'
              value={form.message}
              className='bg-tertiary p-4 py-3 rounded-xl'
              placeholder='Enter your message...' />
          </label>
          <button type='submit'
          className='p-4 px-6 bg-tertiary outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {
              loading ? "Sending..." : "Submit"
            }
          </button>
        </form>
      </motion.div>
      <motion.div 
        variants={slideIn("right", "tween", .3, 1)}
        className="flex-1 md:h-[550px] h-[350px]"
      >
        <Earth/>
      </motion.div>
    </div>
  )
}
export default SectionWrapper(Contact, "contact")