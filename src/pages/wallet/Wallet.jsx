import { ArrowDropDown, PaidSharp, ArrowDownwardSharp, CurrencyExchangeSharp } from "@mui/icons-material";
import "./wallet.css";
import WalletTabs from "../../Features/walletTabs/WalletTabs";
import WalletActivitiesTabs from "../../Features/walletActivitiesTabs/WalletActivitiesTabs";

export default function Wallet() {
  return (
    <div className="walletPage">
      <div className="walletPageHeader">
        <span className="walletPageHeaderLeft">Your Wallet(s)</span>
        <button className="walletPageHeaderRight">+  Create New Wallet</button>
      </div>
      <div className="walletPageContainer">
        <div className="walletPageContainerLeft">
          <div className="walletPageContainerLeftTop">
            <input type="text" className="walletSearchField" placeholder="Search" />
            <div className="walletAllOptions">
              <h3 className="walletAllText">All</h3>
              <ArrowDropDown className="walletAllMore" />
            </div>
          </div>
          <div className="walletPageContainerLeftBottom">
            <WalletTabs />
          </div>
        </div>
        <div className="walletPageContainerRight">
          <div className="walletPageContainerRightTop">
            <div className="walletPageContainerRightTopActive">
              <span className="walletPageContainerRightTopStatus">Active</span>
              <span className="walletPageContainerRightTopAccName">EUR Wallet</span>
              <span className="walletPageContainerRightTopCurrency">EUR</span>
            </div>
            <h1 className="walletPageContainerRightTopAmount">€2,000,000.05</h1>
          </div>
          <div className="walletPageContainerRightAccountDetails">
            <div className="walletPageContainerRightAccountDetailsTop">
              <div className="walletPageContainerRightAccountDetailsTopRowOne">
                <span className="walletText">Ledger Balance</span>
                <span className="walletAmount">€2,000,000.05</span>
                <span className="walletText walletAmountRight">Total Incoming</span>
                <span className="walletAmount walletAmountRight">€2,000,000.05</span>
              </div> 
              <div className="walletPageContainerRightAccountDetailsTopRowTwo">
                <span className="walletText">Blocked Balance</span>
                <span className="walletAmount">€0.00</span>
                <span className="walletText walletAmountRight">Total Outgoing</span>
                <span className="walletAmount walletAmountRight">€5,000,000.05</span>
              </div> 
            </div>
            <div className="walletPageContainerRightAccountDetailsBottom">
              <button className="walletBalanceButton"><PaidSharp className="walletBalanceButtonIcon" /> Payment</button>
              <button className="walletBalanceButton"><ArrowDownwardSharp className="walletBalanceButtonIcon" />Pay-In</button>
              <button className="walletBalanceButton"><CurrencyExchangeSharp className="walletBalanceButtonIcon" />Exchange</button>
            </div>
            <div className="walletMoreOptions">
              <span className="walletMoreOptionsText">More Options</span>
              <ArrowDropDown  className="walletMoreOptionsIcon" />
            </div>
          </div>
          <WalletActivitiesTabs />
        </div>
      </div>
    </div>
  )
}
