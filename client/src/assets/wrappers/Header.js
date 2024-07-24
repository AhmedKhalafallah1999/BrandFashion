import styled from "styled-components";
const Wrapper = styled.header`
  background-color: rgba(20, 97, 143, 0.95);
  display: flex;
  padding: 2rem;
  h1 {
    display: none;
  }
  .logo {
    width: 10rem;
    height: 3rem;
  }
  .links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .links a {
    color: white;
    text-transform: uppercase;
    padding: 1rem;
    cursor: pointer;
  }
  .right-links {
    font-size: 0.9rem;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-links a {
    font-size: 0.8rem;
    font-weight: 400;
  }
  .right-icons {
    color: white;
    display: flex;
    gap: 1rem;
    font-size: 1.2rem;
    margin-left: 3rem;
    align-items: center;
  }
  .bag-price {
    display: flex;
    gap: 1rem;
  }
  .menu {
    display: none;
  }
  @media (max-width: 992px) {
    & {
      background-color: white;
      padding: 0.5rem;
    }
    img {
      display: none;
    }
    h1 {
      display: block;
      font-weight: 900;
    }
    .right-links,
    .left-links {
      display: none;
    }
    .right-icons {
      color: black;
      position: absolute;
      right: 5%;
      align-items: center;
    }
    .bag-price {
      display: flex;
      gap: 0.4rem;
      cursor: pointer;
    }
    .bag-price:hover {
      color: #0084d6;
    }
    .person {
      display: none;
    }
    .menu {
      display: block;
      cursor: pointer;
      background-color: black;
      color: white;
      padding: 0.6rem;
      font-size: 1.6rem;
    }
  }
`;
export default Wrapper;
