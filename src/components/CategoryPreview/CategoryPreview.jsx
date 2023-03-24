import { Link } from "react-router-dom"
import ProductCard from "../ProductCard/ProductCard"
import "./CategoryPreview.css"

const CategoryPreview = ({ title, productsList }) => {
    return (
        <div className="category-preview-container">
            <h2>
                <Link to={`/Shop/${title}`}>
                {title.toUpperCase()}
                </Link>
               
            </h2>
            <div className="preview">
                {productsList.map((product, index) => {
                    if (index < 4) {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default CategoryPreview