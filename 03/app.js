import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addProduct = (product) => {
        this.setState(state => {
            return {
                cart: [...state.cart, product]
            }
        }) 
    }
    
    render() {
        return (
            <section>
                <Category>
                {data.map(product => {
                           return (
                                    <>
                                   <Product product={product} add={this.addProduct}></Product>
                                    </>
                                )
                            })}
                </Category>
                <Cart />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
