import React from "react";
import CategoryItem from '../category-Item/category-item';

const CategoryList= ({categories})=>{
    return(
        <div className='categories-container'>
        {categories.map((category) => {
          return (
            <CategoryItem 
            title={category.title} 
            key={category.id} 
            img={category.img} />)
        })}
  
      </div>
    );
};
export default CategoryList;