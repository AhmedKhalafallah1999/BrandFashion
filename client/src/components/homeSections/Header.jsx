import logo from "../../assets/images/logo.png";
import Werapper from "../../assets/wrappers/Header";
const Header = () => {
  return (
    <Werapper>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>DNK</h1>
      </div>
      <div className="links">
        <div className="right-links">
          <a>everything</a>
          <a>women</a>
          <a>men</a>
          <a>accessories</a>
        </div>
        <div className="left">
          <div className="left-links">
            <a>about</a>
            <a>contact us</a>
          </div>

          <div className="right-icons">
            <div className="bag-price">
              <span>$0.00</span>
              <ion-icon name="bag"></ion-icon>
            </div>
            <div className="person">
              <ion-icon name="person"></ion-icon>
            </div>
            <div className="menu">
              <ion-icon name="menu"></ion-icon>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </Werapper>
  );
};
export default Header;
