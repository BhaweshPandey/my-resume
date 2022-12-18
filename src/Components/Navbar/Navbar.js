import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import About from '../../Pages/About/About';
// import Button from './Components/Button/Button';
// import Text from './Components/Texts/Text';
import Home from '../../Pages/Home/Home';
import Skill from '../../Pages/Skills/Skill';
import Contact from '../../Pages/Contact/Contact';

const Navbar = () => {
    const [active,setActive] = useState('Home')
    const data = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Skill",
            path: "/Skill"
        },
        {
            name: "About",
            path: "/About"
        },
        {
            name: "Contact",
            path: "/Contact"
        }
    ]
    return (
        <div>
        <div className='Navbar'>
            <div className='Navbar-container'>
                <ul>
                    {data.map((item) => (
                        <li>
                            <NavLink to={item.path}
                            onClick={ () => setActive(item.name)}
                            className={`${active==item.name ? "activeclass" : ""}`}
                             >{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar