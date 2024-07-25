import Wrapper from "../../assets/wrappers/GalleryOverview";
import Button from "../../components/Button";
const GalleryOverview = () => {
  return (
    <Wrapper>
      <div className="one overlay">
        <div className="info">
          <h2>20% off on tank tops</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Button />
        </div>
      </div>
      <div className="two">
        <div className="info">
          <h2>latest eyeware for you</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Button />
        </div>
      </div>
      <div className="three">
        <div className="info">
          <h2>let's lorem suit up!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Button />
        </div>
      </div>
    </Wrapper>
  );
};
export default GalleryOverview;
