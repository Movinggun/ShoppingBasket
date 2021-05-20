import { GET_CART_LIST, CART_ERROR, ADD_TO_CART, UPDATE_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
    items: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_LIST:
            return {
                ...state
            }
        case ADD_TO_CART: 
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case UPDATE_CART:
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.amount} : item)
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }           
        case CART_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}
