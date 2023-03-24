import "./CheckOut.css"
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context/CartContext"

const CheckOut = () => {
    const { currentCart } = useContext(CartContext)

    const [totalCompra, setTotalCompra] = useState(0);

    useEffect(() => {
        let temporal = 0
        currentCart.forEach(element => {
            temporal= (element.quantity * element.price) + temporal
        });
        setTotalCompra(temporal)
    }, [currentCart])

    return (
        <div className="checkout-container">
            <div className="checkout-header">

                <div className="header-block">
                    <span>product</span>
                </div>

                <div className="header-block">
                    <span>description</span>
                </div>

                <div className="header-block">
                    <span>quantity</span>
                </div>

                <div className="header-block">
                    <span> remove</span>
                </div>

            </div>
            {currentCart.map((product) => {
                return (
                    <CheckOutItem key={product.id} product={product} />

                )

            })}
            <div className="total">
                <span> {`TOTAL: ${totalCompra}€`}</span>
            </div>

        </div>
    )
}

export default CheckOut;