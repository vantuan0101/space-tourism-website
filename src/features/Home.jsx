import React from 'react';
import PropTypes from 'prop-types';
import '../style/pages/Home.scss';
import Header from '../components/Header';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Destination from './pages/Destination';
Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className='home'>
            <Header />
            <div className="home__content">
                    <div className="home__content-intro">So, You want to travel to</div>
                    <div className="home__content-heading">Space</div>
                    <div className="home__content-dsc">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
                <Link to="/destination" className="home__explore">Explore</Link>
                </div>
        </div>
    );
}

export default Home;

