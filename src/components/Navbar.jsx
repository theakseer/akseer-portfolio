import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {styles} from '../style'
import {logo, menu, close} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to={'/'}
          className='flex items-center gap-2'
          onClick={()=>{
            setActive("")
            window.scrollTo(0, 0)
          }}>
            <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
            <p className='sm:block hidden'>Akseer | Portfolio</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map(link=>(
            <li 
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } 
              hover:text-white text-[18px] font-medium cursor-pointer`}
              key={link.id}
              onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        {/* for mobile devices */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            className='w-[24px] h-[24px] object-contain cursor-pointer'
            onClick={()=>setToggle(!toggle)}
            alt="menu" />
          
          <div className={`${
            toggle ? "flex" : "hidden"
          } p-6 black-gradient absolute top-20 right-0 min-w-[120px] rounded-xl z-10`}>
            <ul className='list-none 
            flex flex-col gap-2 '>
          {navLinks.map(link=>(
            <li 
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } 
              hover:text-white text-sm font-medium cursor-pointer`}
              key={link.id}
              onClick={()=>{
                setActive(link.title)
                setToggle(!toggle)
              }}>
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar