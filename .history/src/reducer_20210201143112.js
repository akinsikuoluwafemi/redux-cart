import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./actions";


function reducer(state, action) {
    if(action.type === CLEAR_CART){
        return { ...state, cart: []}
    }
    if(action.type === DECREASE){
        console.log('You decreased the amount');
        let tempCart = [];
        if(action.payload.am)
        return {...state, cart: tempCart }
    }
     if (action.type === INCREASE) {
         let tempCart = state.cart.map((cartItem) => {
                if(cartItem.id === action.payload.id){
                    cartItem = {...cartItem, amount: cartItem.amount + 1}
                }

             return cartItem;
         })

        return {...state, cart: tempCart }
     }
     if (action.type === REMOVE) {
         console.log(action);
         return {...state, cart: state.cart.filter(item => item.id !== action.payload.id) }
     }


    return state;
 
}

export default reducer;