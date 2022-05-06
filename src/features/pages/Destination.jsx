import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

import HeaderDestination from '../../components/HeaderDestination';
import NextPage from '../../components/NextPage';
import {CrewPage} from '../../Global/PathNextPage'

import {destinationImage,
    destinationHeading,
    destinationDescription,
    destinationDistances,
    destinationTime} from '../../Global/data/DataDestination';
import '../../style/pages/Destination.scss';


Destination.propTypes = {
    
};

function Destination(props) {
    const {tabName} = props;
    console.log(tabName);
    // const tabJoin = `${tabName}.join('')`
    // console.log(destinationHeading[`${tabName}`]);
    

    return (
        <>
            <Header />
            <div className='home destination'>
                <div className="destination__title">
                    <p>01</p>
                    <p>Pick your destination</p>
                </div>
                <div className="destination__image">
                    <img src = {destinationImage[`${tabName}`]} alt="" />
                </div>
                <HeaderDestination tabName={tabName}/>
                <div className="destination__heading">{destinationHeading[`${tabName}`].join('')}</div>
                <div className="destination__dsc">{destinationDescription[`${tabName}`].join('')}</div>
                <div className="destination__line"></div>
                <div className="destination__distance">
                    <p>AVG. DISTANCE</p>
                    <p>{destinationDistances[`${tabName}`].join('')}</p>
                </div>
                <div className="destination__time">
                    <p>Est. travel time</p>
                    <p>{destinationTime[`${tabName}`].join('')}</p>
                </div>
                <NextPage pathNextPage={CrewPage}/>
            </div>
        
        </>
    );
}

export default Destination;