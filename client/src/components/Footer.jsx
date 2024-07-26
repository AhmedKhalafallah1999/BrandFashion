import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <div className="copy-right">
        <p>Copyright &copy; 2024 Brandstore. Powered by BrandStore.</p>
      </div>
      <div className="social-apps">
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-google"></ion-icon>
        <ion-icon name="logo-youtube"></ion-icon>
      </div>
    </Wrapper>
  );
};
export default Footer;
