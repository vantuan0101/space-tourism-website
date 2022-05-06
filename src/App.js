import logo from './logo.svg';
import './App.css';
import Home from './features/Home';
import { Route, Routes } from 'react-router-dom';
import Destination from './features/pages/Destination';
import Crew from './features/pages/Crew';
import Technology from './features/pages/Technology';
import {HomePage, DestinationPage, CrewPage , TechnologyPage} from './Global/PathNextPage'

function App() {
  return (
    <>
      
      <Routes>
        <Route path={HomePage} element={<Home />} />
        <Route path={DestinationPage} element={<Destination tabName={'Moon'} />} />
        <Route path='mars' element={<Destination tabName={'Mars'} />} />
        <Route path='europa' element={<Destination tabName={'Europa'} />} />
        <Route path='titan' element={<Destination tabName={'Titan'} />} />
        <Route path={CrewPage} element={<Crew />} />
        <Route path={TechnologyPage} element={<Technology />} />
      </Routes>
    
    </>
    
      
  );
}

export default App;
