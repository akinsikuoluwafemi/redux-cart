import { INCREASE, DECREASE, CLEAR_CART } from "./actions";


function reducer(state, action) {
    if(action.type === CLEAR_CART){
        return { ...state, cart: []}
    }
    if(action.type ===)


    return state;
 
}

export default reducer;