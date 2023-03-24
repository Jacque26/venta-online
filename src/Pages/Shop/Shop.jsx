import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
// import ProductCard from "../../components/ProductCard/ProductCard";
import productsData from "../../products.json"
// import "./Shop.css"



const Shop = () => {
    // console.log(productsData);
    const categories = Object.keys(productsData)

    return (
        <div className="products-container">
            {
                categories.map((category)=>{
                    return(
                        <CategoryPreview key={category} title={category} productsList={productsData[category]}/>
                    )
                })
            }
        </div>
    )

}

export default Shop;
