import React, { useState } from 'react'
import {SiCoffeescript} from 'react-icons/si'
import {Link}from 'react-scroll'
import Button from '../layouts/Button'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineMenuUnfold} from "react-icons/ai"

const Navbar = () => {

        const [Menu,setMenu] =useState(false);

        const handleChange = ()=>{
                setMenu(!Menu);
        }
        const closeMenu =()=>{
                setMenu(false);
        }
  return (
    <div className='fixed w-full z-10'>
        <div>
        </div>
    </div>
  )
}

export default Navbar