//Types

const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_TO_CART =  'ADD_TO_CART';
const SET_QUANTITY = 'SET_QUANTITY';
const DELETE_IN_CART = 'DELETE_IN_CART';
const VIEW = 'VIEW'

export default function Reducer (state, action){
    const { payload, type } = action;
    switch (type){
        
        case GET_PRODUCTS:
            return{...state, products: payload};
        
        case ADD_TO_CART:
        return {
            ...state,
            cart: [
                ...state.cart,
                state.products
                .filter((e) => e.id === payload)
                .map((item) => {
                    item.quantity = 1;
                    return item;
                }),
            ],
        };

        case SET_QUANTITY:
            return {
                ...state,
                cart: [...state.cart],
            };

        case DELETE_IN_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item[0].id !== payload),
              };

        case VIEW:
            let item = state.products.filter((e) => e.id === payload)
            return{
                ...state,
                detail: item
            }
            
        default:
            return;
        }
};