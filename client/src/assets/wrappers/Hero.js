import styled from "styled-components";
import heroBack from "../../assets/images/hero-test.webp";

const Wrapper = styled.section`
  background-color: #146291;
  height: calc(100vh - 112px);
  background-image: url(${heroBack});
  background-repeat: no-repeat;
  background-position: 90%;
  padding: 0 10rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1,
  p {
    text-transform: capitalize;
    color: white;
    margin-bottom: 1.6rem;
  }
  h1 {
    font-size: 4rem;
    line-height: 1.6;
    width: 50%;
    font-weight: 700;
  }
  p {
    font-size: 2rem;
  }
  div {
    display: flex;
    gap: 1.6rem;
  }
  @media (max-width: 600px) {
    & {
      background-image: none;
      height: fit-content;
      padding: 4rem 1rem;
    }
    h1 {
      font-size: 1.9rem;
      width: max-content;
      text-align: center;
      font-weight: 600;
    }
    p {
      font-size: 1.4rem;
      text-align: center;
    }
    div {
      flex-direction: column;
      gap: 0;
    }
  }
  @media (min-width: 600px) and (max-width: 992px) {
    & {
      background-image: none;
      height: fit-content;
      padding: 4rem 1rem;
    }
    h1 {
      font-size: 3rem;
      width: 100%;
      text-align: center;
      font-weight: 600;
    }
    p {
      font-size: 2%.4;
      text-align: center;
    }
    div {
      flex-direction: row;
      gap: 2rem;
    }
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
export default Wrapper;
