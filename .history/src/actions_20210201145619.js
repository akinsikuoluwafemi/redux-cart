export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALs = "GET_TOTAL";
export const GET_AMOUNT = "GET_AMOUNT";




export const clearCart = () => {
    return {
        type: CLEAR_CART
        
    }
    // dispatch({type: CLEAR_CART})
}

export const removeItem = (item) => {
    return {
        type: REMOVE,
        payload: item
    }
}