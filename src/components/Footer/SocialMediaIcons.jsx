import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import apple from "../../assets/apple.png";
import "./SocialMediaIcons.css";

function SocialMediaIcons() {
  return (
    <div className="social-media-icons">
      <img src={facebook} />
      <img src={instagram} />
      <img src={twitter} />
      <div>
        <div>Discover our app</div>
      </div>
      <div className="playstore">
        <div className="google-play">
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
            style={{ width: "30px", height: "30px" }}
          />
          <div>
            <strong>GET IT ON</strong> <br />
            <span>GOOGLE PLAY</span>
          </div>
        </div>
        <div className="apple-store">
          <img src={apple} style={{ width: "30px", height: "30px" }} />
          <div>
            <span>
              Available on the <br />
              <strong className="title">Apple Store</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaIcons;
