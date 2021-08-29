import './FooterUserComponent.css';
import FontAwesome from 'react-fontawesome';
function FooterUser() {
  return (
    <div className="user-footer">
      <div className="footer-user">
          <div className="footer-user-details">
          <div className="footer-user-content">
            <div className = "span-vivu">
              <span className="vivu">Vivu</span>
            </div>
            <div className="footer-user-content-item">
              <button className="style-button-user-group footer-user-title">
              <span className="icon-social"><FontAwesome className="fab fa-facebook"/></span>
              Facebook
              </button>
              <button className="style-button-user-group footer-user-title">
              <span className="icon-social"><FontAwesome className="fab fa-google-plus" /></span>
              vivu@gmai.com
              </button>
            </div>
          </div>
          <div className="label-footer">Hứa hẹn mang đến những trải nghiệm tuyệt vời nhất! </div>
          </div>
      </div>
    </div>
    );
  }
export default FooterUser;