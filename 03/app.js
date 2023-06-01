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
    removeProduct = (product) => {
        this.setState(state => {
            const newCart = state.cart.filter(element => element.id !== product.id);
            return {cart: newCart}
        })
    }

    render() {
        return (
            <section>
                <Category>
                    {data.map(product => {
                        if (this.state.cart.find(e => e.id === product.id)) {
                            return (
                                <Product
                                    key={product.id}
                                    product={product}
                                    bool={true}
                                    handleNameButton={false}
                                    remove={this.removeProduct}
                                />
                            )
                        } else {
                            return (
                                <Product
                                    key={product.id}
                                    product={product}
                                    bool={false}
                                    handleNameButton={true}
                                    add={this.addProduct}
                                />
                            )
                        }
                    }
                    )
                    }
                </Category>
                <Cart>
                    {this.state.cart.map(product => {
                        return (
                            <Product
                                key={product.id}
                                product={product}
                                bool={false}
                                remove={this.removeProduct}
                            />
                        )
                    })}
                </Cart>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
