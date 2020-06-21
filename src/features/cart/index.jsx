import React from 'react';
import PropTypes from 'prop-types';
import ProductList from './components/ProductList';
import CartInfo from './components/CartInfo';

Cart.propTypes = {

};

function Cart(props) {
    return (
        <div>
            <ProductList />
            <CartInfo />
        </div>
    );
}

export default Cart;