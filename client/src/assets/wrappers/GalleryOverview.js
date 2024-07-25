import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.webp";

import styled from "styled-components";
const Wrapper = styled.div`
  margin: 4rem 0;
  display: grid;
  height: 28rem;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  .one,
  .two,
  .three {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 2rem;
    color: white;
    position: relative;
  }

  .one {
    background-image: url(${one});
  }
  .two {
    background-image: url(${two});
  }
  .three {
    background-image: url(${three});
  }
  .info {
    position: absolute;
    bottom: 10%;
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: capitalize;
      margin-bottom: 0.8rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.6;
    }
  }
  .swiper-backface-hidden .swiper-slide {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 700px) {
    margin-top: 4rem;
    margin-bottom: 0;
    grid-template-columns: 1fr;
    height: 55rem;
    grid-row-gap: 2rem;
  }
  @media (min-width: 700px) and (max-width: 900px) {
    /* Your CSS rules here */
    grid-template-columns: 1fr 1fr;
    height: 55rem;
    grid-row-gap: 2rem;
  }
`;
export default Wrapper;
