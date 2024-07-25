import styled from "styled-components";
const Wrapper = styled.section`
  background-color: #4782ab;
  margin: 0 5rem;
  display: flex;
  flex-direction: row-reverse;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;

  .offer-image img {
    width: 30rem;
  }

  .offer-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    line-height: 1.6;
    height: 70vh;
  }
  p,
  h4 {
    text-transform: capitalize;
  }
  h4 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .text-head,
  .text-offer {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .text-info {
    font-weight: 300;
  }
  span {
    text-transform: uppercase;
  }
  @media (max-width: 700px) {
    margin: 0 1rem;
    padding: 2rem;
    gap: 0rem;

    .offer-info {
      text-align: center;
      /* line-height: 1.2; */
    }
    h4 {
      font-size: 1.9rem;
    }
    img {
      display: none;
    }


  }
  @media (min-width: 700px) and (max-width: 1024px) {
    /* Your CSS rules here */
    margin: 0 1rem;
    padding: 2rem;
    gap: 0rem;

    .offer-info {
      text-align: center;
      /* line-height: 1.2; */
    }
    h4 {
      font-size: 1.9rem;
    }
    img {
      display: none;
    }

  }
`;
export default Wrapper;
