import {createStore} from "redux"

const defaultState = {
    cart: 0
}

function cartReducer(state = defaultState, actions) {
    switch (actions.type) {
        case "DEC":
            return{...state, cart: actions.payload}
        
        case "ADD":
            return{...state, cart: state.cart + Number(actions.payload)}
        
        case "REMOVE":
            return{...state, cart: state.cart - Number(actions.payload)}
    
        default:
            return state
    }
}

export const store = createStore(cartReducer)