import { ADD_TO_LIST, REMOVE_FROM_LIST } from './itemTypes'

export const addToList = (state) => {
    return {
        type: ADD_TO_LIST,
        payload: state
    }
}

export const removeFromList = (state) => {
    return {
        type: REMOVE_FROM_LIST,
        payload: state
    }
}