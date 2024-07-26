import Wrapper from "../assets/wrappers/Button";
const Button = ({ label,ForWhich }) => {
  return !ForWhich ? <Wrapper variant="shop-now">{label}</Wrapper> : <Wrapper variant="find-more">{label}</Wrapper>;
};
export default Button;
