import React from 'react';
import ProductDescription from './ProductDescription';

//function Product(props) {
function Product({name, description,price}) {
    return(
    <div>
        <p>{name} </p>
        <p>{description} </p>

        <ProductDescription name={name} description={description}/>
        
        <p>cost Rs.{price} </p>
    </div>
    );   
}

export default Product;