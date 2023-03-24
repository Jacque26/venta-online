import "./CheckOutItem.css"
import {AiOutlineLeft, AiOutlineRight,AiOutlineClose} from "react-icons/ai"

const  checkOutItem = ({product}) => {
    return (
<div className='checkout-item-container'>
            <div className='image-container'>
                <img src= {product.imageUrl} alt={product.name} />
            </div>
            <span className='name'> {product.name} </span>
            <span className='quantity'>
                <div className='arrow'>
                    <AiOutlineLeft />
                </div>
                <span className='value'>{product.quantity}</span>
                <div className='arrow' >
                    <AiOutlineRight />
                </div>
            </span>
            <span className='price'> {product.price}</span>
            <div className='remove-button' >
                <AiOutlineClose />
            </div>
        </div>
    )
}

export default checkOutItem