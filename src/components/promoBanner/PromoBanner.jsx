import "./promoBanner.css";
import CampaignIcon from '@mui/icons-material/Campaign';

export default function PromoBanner() {
  return (
    <div className="promoBanner">
        <div className="promoBannerInfo">
            <CampaignIcon className="promoBannerInfoIcon" />
            <div className="promoBannerInfoText">
                <h3 className="promoBannerInfoTitle">Refer and earn</h3>
                <span className="promoBannerInfoDetails">
                   Use the below link to invite friends 
                </span>
            </div>
        </div>
        <div className="promoBannerButtonWrapper">
          <button className="promoBannerButton">Invite Friends</button>
        </div>
    </div>
  )
}
