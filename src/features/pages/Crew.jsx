import React from 'react';
import Header from '../../components/Header';
import HeaderPage from '../../components/HeaderPage';
import {
    crewDescription, crewImage, crewName, crewTitle
} from '../../Global/data/DataCrew';
import '../../style/pages/Crew.scss';
import bgDestinationDestop from '../../Global/exportImage'
Crew.propTypes = {
    
};

function Crew(props) {
    const {tabName} = props
    const navHeaderCrews = [
        {
            to : '/crew',
            name : 'Commander'
        },
        {
            to:'/mission',
            name : 'Mission Specialist'
        },
        {
            to:'/pilot',
            name : 'Pilot'
        },
        {
            to:'/flight',
            name : 'Victor Glover'
        },
    ]
    return (
        <>
            <Header />
            <div className='home crew' style={{backgroundImage : bgDestinationDestop}} >
                <div className="crew__intro">
                    <p>01</p>
                    <p>Meet your crew</p>
                </div>
                <div className="crew__item">
                    <div className="crew__image">
                        <img src = {crewImage[`${tabName}`]} alt="" />
                    </div>
                    <div className="crew__container">
                        <div className="crew__title">{crewTitle[`${tabName}`].join('')}</div>
                        <div className="crew__name">{crewName[`${tabName}`].join('')}</div>
                        <div className="crew__dsc">{crewDescription[`${tabName}`].join('')}</div>
                        <HeaderPage headerPages={navHeaderCrews}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Crew;