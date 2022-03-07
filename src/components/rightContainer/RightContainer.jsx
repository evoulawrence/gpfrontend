
import HomeDashboard from '../../pages/dashboard/HomeDashboard';
// import Wallet from '../../pages/wallet/Wallet';
import TopBar from '../TopBar/TopBar';

import './rightContainer.css';

export default function RightContainer() {
  return (
      <div className="rightContainer">
          <TopBar />
          <div className="pagesContainer">
            <HomeDashboard />
            {/* <Wallet /> */}
          </div>
      </div>
  )
}
