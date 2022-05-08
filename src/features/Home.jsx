import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../style/pages/Home.scss';
Home.propTypes = {
    
};
const homeContent = {
    intro : 'So, You want to travel to',
    heading : 'Space',
    dsc : 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!',
    explore : 'Explore'
}

function Home(props) {
    return (
        <div className='home'>
            <Header />
            <div className="home__content">
                <div className="home__content-container">
                    <div className="home__content-intro">{homeContent.intro}</div>
                    <div className="home__content-heading">{homeContent.heading}</div>
                    <div className="home__content-dsc">{homeContent.dsc}</div>
                </div>
                <div className="home__content-explore">
                    <Link to="/destination" className="home__explore">{homeContent.explore}</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;

