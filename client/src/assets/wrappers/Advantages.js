import styled from "styled-components";
const Wrapper = styled.section`
  background-color: #f5f7f9;
  display: flex;
  flex-direction: row;
  padding: 7rem 10rem;
  border-bottom: 1px solid #cccc;

  div {
    text-align: center;
    img,
    p {
      margin-bottom: 1rem;
    }
    img {
      height: 4rem;
    }
    p:first-of-type {
      font-size: 1.2rem;
      text-transform: capitalize;
    }
    p:nth-of-type(2) {
      font-weight: 300;
      line-height: 2;
      font-size: 0.9rem;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 7rem 0;
  }
  div {
    margin-bottom: 3rem;
  }
`;
export default Wrapper;
