import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftContainer from './components/leftContainer/LeftContainer';
// import RightContainer from './components/rightContainer/RightContainer';
import HomeDashboard from './pages/dashboard/HomeDashboard';
import Wallet from './pages/wallet/Wallet';
import TopBar from './components/TopBar/TopBar';



function App() {
    return (
        <Router>
            <div>
                <div className="container">
                    <LeftContainer />
                    <div className="rightContainer">
                        <TopBar title="Welcome, Mendy" />
                        <div className="pagesContainer">
                            {/* <RightContainer /> */}
                            <Routes>
                                <Route exact path="/" element = {<HomeDashboard />} />
                                <Route exact path="/wallet" element = {<Wallet />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}


export default App;
