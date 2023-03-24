import { useContext, useEffect, useState } from "react"
import { ReactComponent as LogoCard } from "../../assets/shopping-bag.svg"
import { CartContext } from "../../Context/CartContext"
import"./CartIcon.css"

const CardIcon = ({onclickIcon}) => {
    const[articleTotal, setArticleTotal]= useState(0);
    const {currentCart} = useContext(CartContext);
   
  
    useEffect(()=>{
        let temporal = 0
        currentCart.forEach(element => {
            temporal= temporal + element.quantity
        });
        setArticleTotal( temporal)
    },[currentCart])


    return (
        <div onClick={onclickIcon} className="cart-icon-container"> 
            <LogoCard className="shopping-icon"/>
            <span className="item-count "> {articleTotal} </span>
        </div>
    )
}

export default CardIcon