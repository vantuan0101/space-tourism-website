import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../style/components/headerPage.scss';
HeaderPage.propTypes = {
    
};

function HeaderPage(props) {
    const {headerPages} = props;
    // console.log(headerPages);
    const headerPageActive = ({isActive})=> (
        {borderBottom: isActive ? '2px solid white' : ''}
    )
    
        
    return (
        <div style={{ padding : '30px 0' , margin : '0 auto'}}>
            <ul className='header__page'>
                {headerPages.map((headerPage,index)=>(
                    <NavLink to={headerPage.to} key={index} style={headerPageActive}>
                        <li className='header__page-item'>{headerPage.name}</li>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}

export default HeaderPage;