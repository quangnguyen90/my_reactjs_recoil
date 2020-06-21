import { atom, selector } from "recoil";

export const cartState = atom({
    key: 'cart',
    // each item in list has 3 keys: id, product and quantity
    default: [],
});

export const cartTotal = selector({
    key: 'cartTotal',
    get: ({ get }) => {
        // get current cart
        const cart = get(cartState);

        // calcualte total
        return cart.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }
});


export const addToCart = (cart, product) => {
    const newCart = [...cart];
    const foundIndex = cart.findIndex(x => x.id === product.id);

    // Increase quantity if existing cart
    if (foundIndex >= 0) {
        newCart[foundIndex] = {
            ...cart[foundIndex],
            quantity: cart[foundIndex].quantity + 1,
        };
        return newCart;
    }

    // Found no cart -> Add new item
    newCart.push({
        id: product.id,
        product: product,
        quantity: 1,
    });
    return newCart;
};