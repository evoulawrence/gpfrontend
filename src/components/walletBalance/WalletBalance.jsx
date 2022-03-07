import "./walletBalance.css";
import {AccountBalanceWallet, Star, Visibility} from '@mui/icons-material';

export default function WalletBalance() {
  return (
    <div className="walletBalance">
        <div className="walletBalanceTopInfo">
          <div className="walletBalanceIconWrapper">
            <AccountBalanceWallet className="walletIcon" />
          </div>
          <div className="walletBalanceAmount">
            <h4 className="walletBalanceTitle">Wallet Balance</h4>
            <h3 className="walletBalanceNumeric">$15,001.00</h3>
          </div>
          <Visibility className="walletBalanceViewIcon" />
        </div>
        <hr className="walletBalanceDivider" />
        <div className="walletBalanceBottomInfo">
          <div className="awardPointsStarWrapper">
            <Star className="awardPointsStar" />
          </div>
          <div className="awardPointsWrapper">
            <h4 className="awardPointsTitle">Award Points</h4>
            <h3 className="awardPointsNumeric">35</h3>
          </div>
        </div>
        <hr className="walletBalanceDivider" />
        <div className="walletBalanceButtons">
          <button className="payIn">Pay-In</button>
          <button className="payOut">Pay-Out</button>
        </div>
    </div>
  )
}
