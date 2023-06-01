import React from 'react';

function Cart(props) {
    const {children} = props;
    return (
        <>
            <h2>Cart</h2>
            <div>{children}</div>
        </>
    )
}

export default Cart;