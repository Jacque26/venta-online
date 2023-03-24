import Button from "../Button/button"
import CartItem from "../CartItem/CartItem"
import "./CartDropDown.css"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


const CartDown = () => {
    const Navigate = useNavigate()
    const {currentCart} = useContext(CartContext)
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {
               currentCart.map((product)=>{
                   return (
                   <CartItem key={product.id} product={product}/>
                   )
                })
            }
            </div>
            <Button onClick={()=> Navigate("/CheckOut")} buttonText="Go to Checkout"/>
        </div>
    )
}

export default CartDown 