import { GET_CART_LIST, ADD_TO_CART, REMOVE_FROM_CART, CART_ERROR, UPDATE_CART } from '../actions/types';

export const addToCart = (productData) => async dispatch => {
    try {
        dispatch({
            type: ADD_TO_CART,
            payload: productData
        });
    } catch (err) {
        dispatch({
            type: CART_ERROR,
            payload: err
        })
    }
}

export const updateCart = (productID) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_CART,
            payload: productID
        });
    } catch (err) {
        dispatch({
            type: CART_ERROR,
            payload: err
        })
    }
}

export const removeFromCart = (productID) => async dispatch => {
    try {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: productID
        })
    } catch (err) {
        dispatch({
            type: CART_ERROR,
            payload: err
        })
    }
}