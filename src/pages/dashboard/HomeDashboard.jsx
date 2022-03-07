import "./homeDashboard.css";
import USFlag from "../../img/us.jpg";
import EUFlag from "../../img/eu.png";
import UKFlag from "../../img/uk.jpg"
import { AccountBalanceWallet, CreditCard, InsertLink, KeyboardDoubleArrowUp, MonetizationOn, ReceiptLong, SendToMobile} from "@mui/icons-material";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";


export default function HomeDashboard() {
  return (
    <div className="homeDashboard">
      <div className="numberOfWallets">
        <span className="walletsLeft">Wallet (5)</span>
        <span className="walletsRight">View all wallets</span>
      </div>
      <div className="currencyWallets">
        <div className="currencyWrapper first">
          <div className="currencyWalletsTopInfo">
            <div className="currencyWalletsTitle">
              <span className="currencyWalletsName">Personal Account</span>
              <span className="currencyWalletsCurrency">USD</span>
            </div>
            <img src={USFlag} alt="" className="flag" />
          </div>
          <div className="currencyWalletsBottomInfo">
            <h1 className="balance">$10,250.00</h1>
          </div>
        </div>
        <div className="currencyWrapper second">
          <div className="currencyWalletsTopInfo">
            <div className="currencyWalletsTitle">
              <span className="currencyWalletsName">EUR Wallet</span>
              <span className="currencyWalletsCurrency">EUR</span>
            </div>
            <img src={EUFlag} alt="" className="flag" />
          </div>
          <div className="currencyWalletsBottomInfo">
            <h1 className="balance">€4,000.53</h1>
          </div>
        </div>
        <div className="currencyWrapper third">
          <div className="currencyWalletsTopInfo">
            <div className="currencyWalletsTitle">
              <span className="currencyWalletsName">School Fees</span>
              <span className="currencyWalletsCurrency">GBP</span>
            </div>
            <img src={UKFlag} alt="" className="flag" />
          </div>
          <div className="currencyWalletsBottomInfo">
            <h1 className="balance">£50.00</h1>
          </div>
        </div>
      </div>
      <div className="quickLinksWrapper">
        <div className="quickLinksHeader">
          <h2 className="quickLinksHeaderTitle">Quick Links</h2>
          <h3 className="quickLinksHeaderSubTitle">Your frequently used actions for easy access.</h3>
        </div>
        <div className="quickLinks">
          <div className="quickLinksItem">
            <div className="quickLinksItemIconWrapper">
              <AccountBalanceWallet className="quickLinksItemIcon" />
            </div>
            <span className="quickLinksItemTitle">Add New<br/> Wallet</span>
          </div>
          <div className="quickLinksItem">
            <div className="quickLinksItemIconWrapper">
              <CreditCard className="quickLinksItemIcon" />
            </div>
            <span className="quickLinksItemTitle">Add New<br/> Card</span>
          </div>
          <div className="quickLinksItem">
            <div className="quickLinksItemIconWrapper">
              <MonetizationOn className="quickLinksItemIcon" />
            </div>
            <span className="quickLinksItemTitle">Balance<br/> Exchange</span>
          </div>
          <div className="quickLinksItem">
            <div className="quickLinksItemIconWrapper">
              <KeyboardDoubleArrowUp className="quickLinksItemIcon" />
            </div>
            <span className="quickLinksItemTitle">Transfer to Account</span>
          </div>
          <div className="quickLinksItem">
            <div className="quickLinksItemIconWrapper">
              <ReceiptLong className="quickLinksItemIcon" />
            </div>
            <span className="quickLinksItemTitle">Generate<br/> Voucher</span>
          </div>
          <div className="quickLinksItem">
            <div className="quickLinksItemIconWrapper">
              <SendToMobile className="quickLinksItemIcon" />
            </div>
            <span className="quickLinksItemTitle">Mobile<br/> Money</span>
          </div>
          <div className="quickLinksItem">
            <div className="quickLinksItemIconWrapper">
              <InsertLink className="quickLinksItemIcon" />
            </div>
            <span className="quickLinksItemTitle">Payment<br/> Link</span>
          </div>
        </div>
      </div>
      <Chart data={userData} title="Activity" grid dataKey="Total Transaction" />
    </div>
  )
}
