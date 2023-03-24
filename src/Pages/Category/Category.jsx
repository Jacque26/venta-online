import { useParams } from 'react-router-dom';
import "./Category.css"
import productList from "../../products.json"
import ProductCard from '../../components/ProductCard/ProductCard';

const Category = () => {

    const { category } = useParams()
    // console.log(category);
    //este category viene del router 
    return (
        <>
            <h2 className="category-title">
                {category.toUpperCase()}
            </h2>
            <div className='category-containers'>
                {productList[category].map((product) => {
                    return (
                        <ProductCard key={product.id} product={ product} />
                    )
                })}

            </div>
        </>
    )
}

export default Category