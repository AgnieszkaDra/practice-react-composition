import React from 'react';

function Product(props) {
    const {product, children} = props
    return (
    <>
       <h2>{product.name}</h2>
       <p>{product.price}</p>
       <button>
        {'Add'}
       </button>
    </>
    )
 
}

export default Product;