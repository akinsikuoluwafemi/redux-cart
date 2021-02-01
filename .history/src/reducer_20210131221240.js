import { INCREASE, DECREASE, CLEAR_CART } from "./actions";


function reducer(state, action) {
    
    switch(action.type){
        case CLEAR_CART:
            return { ...state, cart: [] };
        case DECREASE:
            console.log('You decreased the amount');
        
        default:
            return state;
    }
}

export default reducer;