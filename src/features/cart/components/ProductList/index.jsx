import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue, useRecoilState } from 'recoil';
import { productListState } from '../../productState';
import { cartState, addToCart } from '../../cartState';

ProductList.propTypes = {

};

function ProductList(props) {
    const productList = useRecoilValue(productListState);
    const [cart, setCart] = useRecoilState(cartState);

    const handleAddToCart = (product) => {
        const newCart = addToCart(cart, product);
        setCart(newCart);
    }

    return (
        <div>
            <h2>Product List</h2>
            <ul className="product-list">
                {productList.map(product => (
                    <li key={product.id}>
                        {product.title} - {product.price}

                        <button
                            style={{ marginLeft: '1rem' }}
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;