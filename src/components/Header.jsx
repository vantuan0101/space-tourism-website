import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import closemenu from '../assets/shared/icon-close.svg';
import menu from '../assets/shared/icon-hamburger.svg';
import logo from "../assets/shared/logo.svg";
import "../style/components/header.scss";
Header.propTypes = {};

function Header(props) {
    const [showMenu,setShowMenu] = useState(false)

    
    const handleClickMenu =(e)=>{
        // console.log(e);
        const menu = document.querySelectorAll('.header__menu-icon')
        const navLink = document.querySelector('.header__links')
            if (!showMenu) {
                menu[0].classList.remove('active');
                menu[1].classList.add('active');
                setShowMenu(true)
                navLink.style.display = 'block';
            }else{
                menu[1].classList.remove('active');
                menu[0].classList.add('active');
                setShowMenu(false)
                navLink.style.display = 'none';


            }
    }
    

    const headerItems = [
        {
        to : '/',
        number : '00',
        content : 'Home'
        },
        {
        to : '/destination',
        number : '01',
        content : 'Destination'
        },
        {
        to : '/crew',
        number : '02',
        content : 'Crew'
        },
        {
        to : '/technology',
        number : '03',
        content : 'Technology'
        },
    ]

    
    const tabLine = ({isActive})=> {
        return {
            borderBottom: isActive ? '2px solid white' : ''
        }
    }

    return (

    <div className=" header">
        <div className="header__container">
            <Link to='/'  className="header__logo">
                <img src={logo} alt="" className="header__logo-img" />
            </Link>
            <div className="header__rectangle"></div>
            <ul className="header__links">
                {headerItems.map((headerItem,index)=>{
                    return (
                        <li key = {index} className="header__link">
                        <NavLink to={headerItem.to} style={tabLine} >
                            <span>{headerItem.number}</span>
                            <p>{headerItem.content}</p>
                        </NavLink>
                        </li>

                    )
                })}
                
            </ul>
            <div className="header__menu" onClick={handleClickMenu}>
                <img src={menu} alt="" className='header__menu-icon active' />
                <img src={closemenu} alt="" className='header__menu-icon' />
            </div>

        </div>
        
    </div>
  );
}

export default (Header);
