import './ProductCard.css';

function ProductCard({ name, price, image, description }) {
  return (
    <div className="product-card">
      <img 
        src={image} 
        alt={name} 
        className="product-image"
      />

      <h2>{name}</h2>

      <p className="price">${price}</p>

      <p>{description}</p>
    </div>
  );
}

export default ProductCard;