import "./leftContainer.css";
import LogoWhite from "../../img/logo-white.png";
import WalletBalance from "../walletBalance/WalletBalance";
import SideBarMenu from "../sideBarMenu/SideBarMenu";
import PromoBanner from "../promoBanner/PromoBanner";

export default function LeftContainer() {
  return (
    <div className="leftContainer">
        <div className="logoWrapper">
            <img src={LogoWhite} alt="white-logo" className="logo" />
        </div>
        <WalletBalance />
        <SideBarMenu />
        <PromoBanner />
    </div>
  )
}
