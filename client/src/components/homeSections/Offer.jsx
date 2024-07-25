import Wrapper from "../../assets/wrappers/Offer";
import Button from "../Button";
import offerTishirt from "../../assets/images/offer-tishirt.jpg";

const Offer = () => {
  return (
    <Wrapper>
      <div className="offer-image">
        <img src={offerTishirt} alt="offer on T-Shirt" />
      </div>
      <div className="offer-info">
        <p className="text-head">limited time offer</p>
        <h4>special edition</h4>
        <p className="text-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ipsum
          officiis saepe laudantium ipsam.
        </p>
        <p className="text-offer">
          buy this t-shirt at 20% discount, use code <span>off20</span>
        </p>
        <Button />
      </div>
    </Wrapper>
  );
};
export default Offer;
