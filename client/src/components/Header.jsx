import logo from "../../src/assets/images/logo.png";
import blackLogo from "../../src/assets/images/black-logo.png";
import Werapper from "../assets/wrappers/Header";
import { Link } from "react-router-dom";
const Header = ({ currentPath }) => {
  console.log(currentPath);
  return (
    <Werapper currentPath={currentPath}>
      <div className="logo">
        <img src={currentPath === "/" ? logo : blackLogo} alt="logo" />
        <h1>DNK</h1>
      </div>
      <div className="links">
        <div className="right-links">
          <Link to="/">everything</Link>
          <Link to="/women">women</Link>
          <Link to="/men">men</Link>
          <Link to="/accessories">accessories</Link>
        </div>
        <div className="left">
          <div className="left-links">
            <Link to="/about">about</Link>
            <Link to="/contact-us">contact us</Link>
          </div>

          <div className="right-icons">
            <div className="bag-price">
              <span>$0.00</span>
              <ion-icon name="bag"></ion-icon>
              <span className="circle">4</span>
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
