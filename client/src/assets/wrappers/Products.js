import styled from "styled-components";
const Wrapper = styled.section`
  background-color: #f5f7f9;
  padding: 5rem 10rem;
  h1 {
    margin-bottom: 5rem;
    text-transform: capitalize;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
  }

  .products-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
  }
  .product {
    position: relative;
  }

  .product .product-img {
    width: 15rem;
    height: 15rem;
    margin-bottom: 1.6rem;
  }
  .product {
    margin-bottom: 5rem;
  }
  .product:hover .bag-add-to-cart {
    visibility: visible;
  }
  .product h3 {
    margin-bottom: 0.6rem;
  }
  .product p {
    margin-bottom: 0.6rem;
    color: #9a9b9c;
    font-weight: 400;
    font-size: 1rem;
  }
  span {
    display: block;
  }
  .rating {
    height: 3.6rem;
  }
  .bag-add-to-cart {
    position: absolute;
    cursor: pointer;
    background-color: white;
    padding: 0.5rem;
    border-radius: 50%;
    top: 5%;
    right: 5%;
    visibility: hidden;
  }
  .add-to-cart-label {
    position: absolute;
    top: 5%;
    right: 100%;
    background-color: black;
    color: white;
    padding: 0.8rem;
    font-size: 0.7rem;
    width: 4rem;
    visibility: hidden;
  }
  .add-to-cart-label::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
}
  .bag-add-to-cart:hover .add-to-cart-label {
    visibility: visible;
  }
  @media (max-width: 700px) {
    padding: 5rem 2rem;
    h1 {
      font-size: 1.6rem;
    }

    .products-container {
      grid-template-columns: 1fr 1fr;
    }
    .product {
      margin-bottom: 2rem;
    }

    .product .product-img {
      width: 13rem;
      height: 13rem;
    }
    .product h3 {
      font-size: 0.9rem;
    }
    .product p {
      font-size: 0.7rem;
    }
    .bag-add-to-cart{
      right: 10%;
    }

  }
  @media (min-width: 700px) and (max-width: 992px) {
    padding: 5rem 2rem;
    h1 {
      font-size: 1.6rem;
    }
    .products-container {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .product .product-img {
      width: 13rem;
      height: 13rem;
    }
    .product h3 {
      font-size: 0.9rem;
    }
    .product p {
      font-size: 0.7rem;
    }
    .bag-add-to-cart{
      right: 20%;
    }
  }
  @media (min-width: 992px) and (max-width: 1424px) {
    padding: 5rem 2rem;
    h1 {
      font-size: 1.6rem;
    }
    .products-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .product .product-img {
      width: 13rem;
      height: 13rem;
    }
    .product h3 {
      font-size: 0.9rem;
    }
    .product p {
      font-size: 0.7rem;
    }
    .bag-add-to-cart{
      right: 30%;
    }

  }
`;
export default Wrapper;
