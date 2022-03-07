import "./topBar.css";
import MyProfileImage from "../../img/evoumendy.jpg"
import {Park, NotificationsNone, ArrowDropDown} from "@mui/icons-material";

export default function TopBar({title}) {
  return (
    <div className="topBar">
        <h1 className="welcomeUser">{title}</h1>
        <input type="text" className="search" placeholder="Search" />
        <div className="treePlanted">
            <Park className="tree" />
            <span className="numberOfTrees">0 planted</span>
        </div>
        <NotificationsNone className="notify" />
        <div className="userWrapper">
            <img src={MyProfileImage} alt="" className="profilePhoto" />
            <div className="verifiedUserName">
                <h3 className="verified">Verified</h3>
                <h2 className="userName">Mendy</h2>
            </div>
            <ArrowDropDown className="arrow" />    
        </div>
    </div>
  )
}
