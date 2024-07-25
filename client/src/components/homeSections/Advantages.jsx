import Wrapper from "../../assets/wrappers/Advantages";
import world from "../../assets/images/world.png";
import bestQuality from "../../assets/images/bestquality.png";
import bestOffer from "../../assets/images/bestoffer.png";
import secure from "../../assets/images/secure.png";
const Advantages = () => {
  return (
    <Wrapper>
      <div>
        <img src={world} alt="world" />
        <p>worldwide shipping</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div>
        <img src={bestQuality} alt="best quality" />
        <p>best quality</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div>
        <img src={bestOffer} alt="best offer" />
        <p>best offer</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div>
        <img src={secure} alt="secure payment" />
        <p>secure payment</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </Wrapper>
  );
};
export default Advantages;
