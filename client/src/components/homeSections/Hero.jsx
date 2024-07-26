import Button from "../Button";
import Wrapper from "../../assets/wrappers/Hero";

const Hero = () => {
  return (
    <Wrapper>
      <h1>raining offers for hot summer!</h1>
      <p>25% off on all products</p>
      <div>
        <Button label="shop now" />
        <Button ForWhich label="find more" />
      </div>
    </Wrapper>
  );
};
export default Hero;
