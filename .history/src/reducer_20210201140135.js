import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./actions";


function reducer(state, action) {
    if(action.type === CLEAR_CART){
        return { ...state, cart: []}
    }
    if(action.type === DECREASE){
        console.log('You decreased the amount');
    }
     if (action.type === INCREASE) {
        return {...state, amount: state.amount}
     }
     if (action.type === REMOVE) {
         console.log(action);
         return {...state, cart: state.cart.filter(item => item.id !== action.payload.id) }
     }


    return state;
 
}

export default reducer;