import React,{useState} from 'react'
import { BaSearch, BiSearch } from "react-icons/bi"
import { BsPerson, BSPerson } from "react-icons/bs"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import {FaFacebook,FaInstagram,FaPinterest,FaTwitter,FaYoutube} from "react-icons/fa"
import './NavbarStyle.css'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className='navbar'>
      <div className={!nav ? 'logo' : 'logo dark'}>
            <h2> BEACHES</h2>
            </div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>Book</li>
            <li>Views</li>
          </ul>
          <div className="nav-icons">
              <BiSearch className="icon"/>
              <BsPerson className="icon"/>
          </div>
          <div className="hamburger" onClick={handleNav}>
        {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose className='icon' />)}
          </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className='mobile-nav'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Book</li>
                <li>Views</li>
              </ul>
              <div className='mobile-menu-bottom'>
                  <div className='menu-icons'>
                    <button>Search </button>
                    <button> Account </button>
                  </div>
                  <div className='social-icons'>
                    <FaFacebook className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaYoutube className='icon' />
                  </div>
              </div>
          </div>


    </div>
  )
}

export default Navbar