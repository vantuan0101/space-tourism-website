import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../style/components/header.scss";
import logo from "../assets/shared/logo.svg";
import menu  from '../assets/shared/icon-hamburger.svg';
import closemenu from '../assets/shared/icon-close.svg'
import { Link } from "react-router-dom";
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
    useEffect(()=>{
        const tabs = document.querySelectorAll('.header__link');
        const line = document.querySelector('.header__activeTab')
        // console.log(tabs);
        tabs.forEach((tab,index)=>{
            tab.onclick = (e)=>{
                line.style.left = tab.offsetLeft + "px"
                line.style.width = tab.offsetWidth + "px"
                // console.log([tab]);
                // console.log(tab.offsetLeft);
                // console.log(tab.offsetWidth);
            }
        })
    },[])
  return (
    <div className=" header">
        <div className="header__container">
            <Link to='/' className="header__logo">
                <img src={logo} alt="" className="header__logo-img" />
            </Link>
            <div className="header__rectangle"></div>
            <ul className="header__links">
                <li className="header__link">
                    <Link to='/'>
                        <span>00</span>
                        <p>Home</p>
                    </Link>
                </li>
                <li className="header__link">
                    <Link to='/destination'>
                        <span>01</span>
                        <p>DESTINATION</p>
                    </Link>
                </li>
                <li className="header__link">
                    <Link to='/crew'>
                        <span>02</span>
                        <p>Crew</p>
                    </Link>
                </li>
                <li className="header__link">
                    <Link to='/technology'>
                        <span>03</span>
                        <p>Technology</p>
                    </Link>
                </li>
                <div className="header__activeTab" ></div>
            </ul>
            <div className="header__menu" onClick={handleClickMenu}>
                <img src={menu} alt="" className='header__menu-icon active' />
                <img src={closemenu} alt="" className='header__menu-icon' />
            </div>

        </div>
        
    </div>
  );
}

export default Header;
