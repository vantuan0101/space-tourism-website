import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './features/Home';
import Crew from './features/pages/Crew';
import Destination from './features/pages/Destination';
import Technology from './features/pages/Technology';
import { CrewPage, DestinationPage, HomePage, TechnologyPage } from './Global/PathNextPage';

function App() {
  return (
    <>
      
      <Routes>
        <Route path={HomePage} element={<Home />} />
        <Route path={DestinationPage} element={<Destination tabName={'Moon'} />} />
        <Route path='mars' element={<Destination tabName={'Mars'} />} />
        <Route path='europa' element={<Destination tabName={'Europa'} />} />
        <Route path='titan' element={<Destination tabName={'Titan'} />} />
        <Route path={CrewPage} element={<Crew tabName={'Commander'} />} />
        <Route path='mission' element={<Crew tabName={'Mission'} />} />
        <Route path='pilot' element={<Crew tabName={'PILOT'} />} />
        <Route path='flight' element={<Crew tabName={'Flight'} />} />
        <Route path={TechnologyPage} element={<Technology tabName={'Vehicle'} />} />
        <Route path='capsule' element={<Technology tabName={'Capsule'}/>} />
        <Route path='spaceport' element={<Technology tabName={'Spaceport'}/>} />
      </Routes>
    
    </>
    
      
  );
}

export default App;
