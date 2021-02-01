import { INCREASE, DECREASE, CLEAR_CART } from "./actions";


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


    return state;
 
}

export default reducer;