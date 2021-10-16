import { combineReducers } from "redux";

const INITIAL_STATE = {
    account: {}
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'NEW_USER':
            const newAccount = action.payload
            // TODO save user info locally here
            state.account = newAccount
            return newAccount
        case 'GET_PIN':
            if(state.account !== {}) {
                return state.account.pin
            } else {
                return -1
            }
        case 'GET_ACCOUNT':
            if(state.account !== {}) {
                return state.account
            } else {
                return -1
            }
        case 'GET_NAME':
            if(state.account !== {}) {
                return state.account.name
            } else {
                return -1
            }
        case 'GET_CARDS':
            if(state.account !== {}) {
                return state.account.cards
            } else {
                return -1
            }
        case 'ADD_CARD':
            // TODO implement
            return state.account === {} ? -1: state.account.cards
        case 'REMOVE_CARD':
            // TODO implement
            return state.account === {} ? -1: state.account.cards
        default: 
            return state
    }
}



export default combineReducers({
    users: userReducer
})