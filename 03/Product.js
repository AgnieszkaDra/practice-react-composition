import React from 'react';

function Product(props) {
    const {product, add, children} = props
    return (
    <>
       <h2>{product.name}</h2>
       <p>{product.price}</p>
       <button
        onClick={()=> add(product)}
            >
        {'Add'}
       </button>
    </>
    )
 
}

export default Product;