import Wrapper from "../assets/wrappers/FooterLinks";
import logo from "../assets/images/black-logo.png";
import Button from "../components/Button";
const FooterLinks = () => {
  return (
    <Wrapper>
      <div className="header">
        <h1>
          sale up to 70% off for all clothes & fashion items on all brands
        </h1>
      </div>
      <div className="footer-links">
        <div>
          <img src={logo} alt="main logo" />
          <p>The best look anytime, anywhere</p>
        </div>
        <div>
          <h5>for her</h5>
          <a>women jeans</a>
          <a>tops and shirts</a>
          <a>women jakets</a>
          <a>heels ad flats</a>
          <a>women accessories</a>
        </div>
        <div>
          <h5>for him</h5>
          <a>men jeans</a>
          <a>men shirts</a>
          <a>men shoes</a>
          <a>men accessories</a>
          <a>men jakets</a>
        </div>
        <div>
          <h5>subscribe</h5>
          <input type="email" placeholder="Your Email Address..." />
          <Button variant="subscribe" label="Subscripe"/>
        </div>
      </div>
    </Wrapper>
  );
};
export default FooterLinks;
