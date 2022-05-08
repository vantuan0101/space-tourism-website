import React from 'react';
import Header from '../../components/Header';
import HeaderPage from '../../components/HeaderPage';
import NextPage from '../../components/NextPage';
import {
    destinationDescription,
    destinationDistances, destinationHeading, destinationImage, destinationTime
} from '../../Global/data/DataDestination';
import { CrewPage } from '../../Global/PathNextPage';
import '../../style/pages/Destination.scss';




Destination.propTypes = {
    
};

function Destination(props) {
    const {tabName} = props;
    
    const navHeaderCrews = [
        {
            to : '/destination',
            name : 'Moon'
        },
        {
            to:'/mars',
            name : 'Mars'
        },
        {
            to:'/europa',
            name : 'Europa'
        },
        {
            to:'/titan',
            name : 'Titan'
        },
    ]

    return (
        <>
            <Header />
            <div className='home destination'>
                <div className="destination__title">
                    <p>01</p>
                    <p>Pick your destination</p>
                </div>
                <div className="destination__item">
                    <div className="destination__image">
                        <img src = {destinationImage[`${tabName}`]} alt="" />
                    </div>
                    <div className="destination__content">
                        <HeaderPage headerPages={navHeaderCrews}/>
                        <div className="destination__heading">{destinationHeading[`${tabName}`].join('')}</div>
                        <div className="destination__dsc">{destinationDescription[`${tabName}`].join('')}</div>
                        <div className="destination__line"></div>
                        <div className="destination__infor">
                            <div className="destination__distance">
                                <p>AVG. DISTANCE</p>
                                <p>{destinationDistances[`${tabName}`].join('')}</p>
                            </div>
                            <div className="destination__time">
                                <p>Est. travel time</p>
                                <p>{destinationTime[`${tabName}`].join('')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <NextPage pathNextPage={CrewPage}/>
            </div>
        
        </>
    );
}

export default (Destination);