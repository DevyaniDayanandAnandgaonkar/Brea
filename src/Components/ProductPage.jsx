import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../ProductsData.json";
import "./ProductPage.css"
const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = ProductData.find((p) => p.id === parseInt(id)); // Find the product

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-page">
    <div className="ImgShowing"> 
    <img src={product.ProductImg} alt={product.ProductName} />
    </div>

    <div className="descShowing"> 
    {product.tagNew && (<h5 className="Product-Tag">{product.tagNew}</h5>
                )}
    <h3>Price: Rs.{product.Price}</h3>
    <h1>{product.ProductName}</h1><br />
    <h4>Product Description</h4>
    <p>The night sky devoid of any stars is unimaginable and incomplete. Likewise, your accessory collection, without this necklace, would be incomplete.</p>
    <br />
    <h4>The Design:</h4>
    <p>This golden necklace features interspaced star motifs set with zircons throughout the chain.</p><br />
    <ul><li>925 Silver with Gold Plating</li>
    <li>Perfect for sensitive skin</li>
    <li>Length of Chain: 43.5 cm + 6 cm Adjustable</li></ul>
    <div className="ProductButtons">
    <button >Buy Now</button>
    <button>Add to Cart</button></div>
    </div>

      
    {/* {product.tag && <p className="product-tag">{product.tag}</p>} */}
    
    </div>
  );
};

export default ProductPage;
