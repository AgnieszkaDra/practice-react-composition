import React from 'react';

function Product(props) {
    const {product, add, bool, handleNameButton, remove} = props
    return (
    <>
       <h2>{product.name}</h2>
       <p>{product.price}</p>
       <button
        disabled={bool} 
        onClick={()=> add ? add(product) : remove(product)}
            >
        {handleNameButton ? "Add" : "Remove"}
       </button>
    </>
    )
 
}

export default Product;