import { ADD_TO_LIST, REMOVE_FROM_LIST } from './itemTypes'

const initialState = {
    items: []
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIST: return {
            ...state,
            items: [...state.items, action.payload]
        }
        case REMOVE_FROM_LIST: return {
            ...state,
            items: state.items.filter(element => element.name !== action.payload)
        }
        default: return state
    }

}

export default itemReducer