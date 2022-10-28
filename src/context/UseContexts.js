import axios from 'axios';
import Contexts from './Contexts';
import { useReducer } from 'react';
import Reducer from './Reducer';

export default function UseContexts(props) {
    const API = 'https://devrockstore-default-rtdb.firebaseio.com/productos.json';

    const { children } = props;
    
    const stateInit = {
        products: [],
        cart: [],
        total:0,
        detail:[],
    };
    
    const [state, dispatch] = useReducer(Reducer, stateInit);
    const getProducts = async () => {
        const res = await axios.get(API);
        dispatch({type: 'GET_PRODUCTS', payload: res.data})
    }

    const viewDetail = (id) => {
        dispatch({type: 'VIEW', payload: id})
    }

    const addToCart = (id, price) => {
        if (state.cart.find((item) => item[0].id === id)) {
            state.cart
              .find((item) => item[0].id === id)
              .map((e) => {
                parseInt(e.quantity++);
                return e;
              });
            dispatch({ type: "SET_QUANTITY", payload: state.cart });
            } else {
            dispatch({ type: "ADD_TO_CART", payload: id });
          }
          state.total += price;
    };
    const deleteInCart = (id, price) => {
        let item = state.cart.filter((item) => item[0].id == id)
        if (item[0][0].quantity > 1){
            item[0][0].quantity--
            dispatch({ type: "SET_QUANTITY", payload: state.cart });
        }else{
            dispatch({type: 'DELETE_IN_CART', payload: id})
        }
        state.total -= price;
    }
    return (
    <Contexts.Provider 
        value={{
            products: state.products,
            cart: state.cart,
            total: state.total,
            detail: state.detail,
            getProducts,
            addToCart,
            deleteInCart,
            viewDetail,
        }}
    >
        {children}
    </Contexts.Provider>
  );
}
