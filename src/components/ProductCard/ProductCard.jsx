import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import Button from "../Button/button"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
 
    const{addItemToCart}= useContext(CartContext)
    return (
        <div className="product-card-container">
            <img src={product.imageUrl} alt={product.name}></img>
            <div className="footer">
                <span className="name">
                    {product.name}
                </span>

                <span className="price">
                    {product.price}

                </span>

            </div>
            <Button buttonText="Add to Cart" buttonClass="inverted" onClick={()=> addItemToCart(product)} />
        </div>

    )
}

export default ProductCard