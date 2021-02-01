import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./actions";


function reducer(state, action) {
    if(action.type === CLEAR_CART){
        return { ...state, cart: []}
    }
    if(action.type === DECREASE){
        console.log('You decreased the amount');
    }
     if (action.type === INCREASE) {
       console.log("You increased the amount");
     }
     if (action.type === REMOVE) {
         console.log("You removed an item");
         return {...state, cart: state.cart.filter(item => item.id !==) }
     }


    return state;
 
}

export default reducer;