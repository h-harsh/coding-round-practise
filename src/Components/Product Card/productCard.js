import "./productCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="except-btn">
        <span className="prod-badge">{product.idealFor}</span>
        <div className="prod-img-dib">
          <img className="prod-img" src={product.imageURL} alt="" />
        </div>
        <p className="brand-name">{product.brand}</p>
        <h3 className="product-name">{product.productName}</h3>
        <div className="price">
          <p>₹{product.price}</p>
        </div>
      </div>
    </div>
  );
};
