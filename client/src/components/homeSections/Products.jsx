import { products } from "../../utils/products";
import Wrapper from "../../assets/wrappers/Products";
const Products = () => {
  return (
  
      <Wrapper>
        <h1>featured products</h1>
        <div className="products-container">
          {products.map((product, index) => {
            return (
              <div key={index} className="product">
                <img
                  className="product-img"
                  src={product.url}
                  alt={`product ${index + 1}`}
                />
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <span>{product.price}</span>
                <img
                  className="rating"
                  src={product.rating}
                  alt={`rating product ${index}`}
                />
              </div>
            );
          })}
        </div>
      </Wrapper>
   
  );
};
export default Products;
