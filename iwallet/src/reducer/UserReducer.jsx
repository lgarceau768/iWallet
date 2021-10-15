import { combineReducers } from "redux";

const INITIAL_STATE = {
    username: '',
    pin: '####',
    cards: []
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state
    }
}



export default combineReducers({
    users: userReducer
})