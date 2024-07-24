import Wrapper from "../assets/wrappers/Button";
const Button = ({ label }) => {
  return !label ? <Wrapper variant="shop-now">shop now</Wrapper> : <Wrapper variant="find-more">find more</Wrapper>;
};
export default Button;
