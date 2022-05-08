import React from 'react';
import Header from '../../components/Header';
import HeaderPage from '../../components/HeaderPage';
import {
    technologyDescription, technologyImage, technologyName, technologyTitle
} from '../../Global/data/DataTeachnology';
import '../../style/pages/Technology.scss';

Technology.propTypes = {
    
};

function Technology(props) {
    const {tabName} = props
    // console.log(tabName);
    const navHeaderTechnology = [
        {
            to: '/technology',
            name : 'Vehicle'
        },
        {
            to: '/capsule',
            name : 'Capsule Specialist'
        },
        {
            to: '/spaceport',
            name : 'Victor Glover'
        },
    ]
    return (
        <>
            <Header />
            <div className='home technology'>
                <div className="technology__intro">
                    <p>03</p>
                    <p>SPACE LAUNCH 101</p>
                </div>
                <div className="technology__item">
                    <div className="technology__image">
                        <img src = {technologyImage[`${tabName}`].Landscape} alt="" />
                    </div>
                    <div className="technology__container">
                        <HeaderPage headerPages={navHeaderTechnology} />
                        <div className="technology__title">{technologyTitle[`${tabName}`].join('')}</div>
                        <div className="technology__name">{technologyName[`${tabName}`].join('')}</div>
                        <div className="technology__dsc">{technologyDescription[`${tabName}`].join('')}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Technology;