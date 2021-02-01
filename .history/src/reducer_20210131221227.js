import { INCREASE, DECREASE, CLEAR_CART } from "./actions";


function reducer(state, action) {
    
    switch(action.type){
        case CLEAR_CART:
            return { ...state, cart: [] };
        case DECREASE:
            console.log('')
        
        default:
            return state;
    }
}

export default reducer;