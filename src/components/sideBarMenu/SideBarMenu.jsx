import "./sideBarMenu.css";
import {Dashboard, AccountBalanceWallet, CreditCard, CurrencyExchange, PeopleOutline, Redeem} from '@mui/icons-material';
import { NavLink } from "react-router-dom";

export default function SideBarMenu() {

  
  return (
    <div className="sideBarMenu">
      <ul className="sidebarList">
        <li className="sidebarListItem active">
          <NavLink to="/" className="sidebarLink" activeClassName="active" >
            <Dashboard className="sidebarIcon" />
            Dashboard
          </NavLink>
        </li>
        <li className="sidebarListItem">
          <NavLink to="/wallet" className="sidebarLink" activeClassName="active" >
            <AccountBalanceWallet className="sidebarIcon" />
            Wallets
          </NavLink>
        </li>
        <li className="sidebarListItem">
            <CreditCard className="sidebarIcon" />
            Cards
        </li>
        <li className="sidebarListItem">
            <CurrencyExchange className="sidebarIcon" />
            FX Centre
        </li>
        <li className="sidebarListItem">
            <PeopleOutline className="sidebarIcon" />
            Beneficiaries
        </li>
        <li className="sidebarListItem">
            <Redeem className="sidebarIcon" />
            Perks
        </li>
    </ul>

    </div>
  )
}
