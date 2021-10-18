// Actions for the user
const newUser = (pin, name) => (
    {
        type: 'NEW_USER',
        payload: {pin, name, cards: []}
    }
)

const getPin = () => ({type: 'GET_PIN'})

const getAccount = () => ({type: 'GET_ACCOUNT'})

const getName = () => ({type: 'GET_NAME'})

const getCards = () => ({type: 'GET_CARDS'})

const addCard = (card) => ({type: 'ADD_CARD', payload: {card}})

const removeCard = (card) => ({type: 'REMOVE_CARD', payload: {card}})

export default {
    newUser,
    getPin,
    getCards,
    getName,
    addCard,
    removeCard
}