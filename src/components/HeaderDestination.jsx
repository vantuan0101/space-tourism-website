import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../style/components/headerDestination.scss'
import { Link, Outlet } from 'react-router-dom';
HeaderDestination.propTypes = {
    
};

function HeaderDestination(props) {
    const {tabName} =props;
    // console.log('header : ', tabName);
    const [offsetWidth,setOffsetWidth] =useState(35)
    const [offsetLeft,setOffsetLeft] =useState(74)
    
    useEffect(()=>{
        const items= document.querySelectorAll('.header__destination-item')
        items.forEach((item,index)=>{
            item.onclick = ()=>{
                setOffsetWidth(item.offsetWidth)
                setOffsetLeft(item.offsetLeft)
                // console.log(tab.offsetLeft);
                // console.log(tab.offsetWidth);
            }
        })
    },[])
    
    // console.log('offsetWidth', offsetWidth);
    // console.log('offsetLeft', offsetLeft);
    return (
        <div style={{width: '237.5px' , padding : '30px 0' , margin : '0 auto'}}>
            <ul className='header__destination'>
                <Link to='/destination'>
                    <li className='header__destination-item' >Moon</li>
                </Link>
                <Link to='/mars'>
                    <li className='header__destination-item' >Mars</li>
                </Link>
                <Link to='/europa'>
                    <li className='header__destination-item' >Europa</li>
                </Link>
                <Link to='/titan'>
                    <li className='header__destination-item' >Titan</li>
                </Link>
                <div className="header__destination-line" style={{width:offsetWidth , left:offsetLeft}} ></div>
            </ul>
            {/* <Outlet /> */}
        </div>
    );
}

export default HeaderDestination;