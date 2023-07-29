
import BottomPage from './components/BottomPage';

import Home from './components/Home';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';

import { Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import InvestmentInstruments from './components/InvestmentInstrument';
import StocksPage from './components/StocksPage';
import BondsPage from './components/BondsPage';
import MutualFundsPage from './components/MutualFundsPage';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        
        <Route path = "/" element = {<Home />} />
        <Route path = "/loginpage" element = {<LoginPage />} />
        <Route path ="/dashboard" element = {<Dashboard />} />
        <Route path ="/investment" element = {<InvestmentInstruments />} />
        <Route path ="/stocks" element = {<StocksPage />} />
        <Route path ="/bonds" element = {<BondsPage />} />
        <Route path ="/mutual-funds" element = {<MutualFundsPage />} />
      </Routes>
      {/* <TopPage />
      <NavBar /> 
      <LoginPage />
      <Home />
      <BusinessLaw />
      <CivilDispute />
      <ConstitutionalLaw />
      <CriminalLaw />
      <BottomPage /> */}
      <BottomPage></BottomPage>
    </div>
  );
}

export default App;
