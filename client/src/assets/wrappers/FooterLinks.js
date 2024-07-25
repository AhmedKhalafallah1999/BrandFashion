import styled from "styled-components";
const Wrapper = styled.section`
  padding: 5rem 10rem;
  .header {
    /* height: 5rem; */
    h1 {
      text-transform: uppercase;
      text-align: center;
      font-size: 1.9rem;
      cursor: pointer;
    }
  }

  .header:hover {
    color: #0084d6;
  }
  img {
    height: 3rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .footer-links {
    margin-top: 5rem;
    padding-top: 5rem;
    border-top: 1px solid #cccc;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-between;
  }
  h5 {
    text-transform: capitalize;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1.6rem;
    cursor: pointer;
  }
  div a {
    display: block;
    font-weight: 300;
    text-transform: capitalize;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  div a:hover {
    color: #0084d6;
  }
  div:nth-of-type(4) {
    input {
      padding: 0.8rem 0 0.8rem 2rem;
    }
    display: flex;
    flex-direction: column;
  }
  border-bottom: 1px solid #cccc;

  @media (max-width: 600px) {
    padding: 5rem 5rem;

    .header {
      h1 {
        font-size: 1rem;
      }
    }
    .footer-links {
      grid-template-columns: 1fr;

      justify-content: center;
      text-align: center;
    }
    div:nth-of-type(1),
    div:nth-of-type(2),
    div:nth-of-type(3) {
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 2rem;
    }
    h5 {
      font-size: 1.4rem;
      opacity: 0.9;
    }
    input {
      width: 100%;
    }
  }
  @media (min-width: 600px) and (max-width: 992px) {
    padding: 5rem 1rem;

    .header {
      h1 {
        font-size: 1, 1rem;
        text-align: left;
      }
    }
    .footer-links {
      /* flex-direction: column; */
      /* justify-content: center; */
      text-align: left;
    }
    img {
    height: 2rem;
  }

    p {
      width: 60%;
    }
    .footer-links a {
      font-size: 0.7rem;
    }
    h5 {
      font-size: 1.3rem;
      opacity: 0.9;
    }
  }
`;

export default Wrapper;
