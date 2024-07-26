import styled from "styled-components";
const Wrapper = styled.header`
  background-color: ${({ currentPath }) =>
    currentPath === "/" ? "rgba(20, 97, 143, 0.95)" : "#ffff"};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 2rem;
  h1 {
    display: none;
  }
  .logo {
    width: 10rem;
    height: 3rem;
    img {
      width: ${({ currentPath }) =>
        currentPath === "/" ? "inherit" : "10rem"};
    }
  }
  .links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .links a {
    /* color: white; */
    color: ${({ currentPath }) => (currentPath === "/" ? "white" : "black")};
    text-transform: uppercase;
    padding: 1rem;
    cursor: pointer;
    text-decoration: none;
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
    cursor: pointer;

    color: ${({ currentPath }) => (currentPath === "/" ? "white" : "black")};
  }
  .bag-price {
    display: flex;
    gap: 1rem;
    position: relative;
  }
  span:nth-of-type(2) {
    color: ${({ currentPath }) => (currentPath === "/" ? "black" : "white")};
  }
  .circle {
    position: absolute;
    height: 2rem;
    width: 2rem;
    background-color: ${({ currentPath }) =>
      currentPath === "/" ? "white" : "black"};

    top: -120%;
    right: -10%;
    border-radius: 50%;
    color: black;
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
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
      gap: 3rem;
      align-items: center;
      cursor: pointer;
    }
    .bag-price {
      display: flex;
      gap: 0.4rem;
    }
    .bag-price:hover {
      color: #0084d6;
    }
    .bag-price:hover .circle {
      background-color: #0084d6;
    }
    .circle {
      background-color: black;
      color: white;
      height: 1.6rem;
      width: 1.6rem;
      top: -80%;
      right: -20%;
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
