import React from 'react';

function Product() {
  return (
    <div className="product-section">
      <div className="product-details">
        <h1>Pachyteria equestris</h1>
        <p>Price: $5.99</p>
        <button className="button">Add to Cart</button>
      </div>
      <div className="product-image">
        <img src="path/to/insect-image.jpg" alt="Pachyteria equestris" />
      </div>
    </div>
  );
}

export default Product;
