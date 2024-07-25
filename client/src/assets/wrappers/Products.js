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

  .product .product-img {
    width: 15rem;
    height: 15rem;
    margin-bottom: 1.6rem;
  }
  .product {
    margin-bottom: 5rem;
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
    }
    @media (min-width: 992px) and (max-width: 1424px) {
      padding: 5rem 2rem;
      h1 {
        font-size: 1.6rem;
      }
      .products-container {
        grid-template-columns: 1fr 1fr 1fr 1fr ;
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
    }
`;
export default Wrapper;
