import { GET_ACT_I_ITEMS,GET_ACT_II_ITEMS,GET_ACT_III_ITEMS, GET_CURRENT_EVENTCARD, IS_SELECTED_ALL, SET_CARD, SET_SELECTED_EVENT_CARDS } from '../constants';
export function getCurrentEventCard(count) {
    return {
        type: GET_CURRENT_EVENTCARD,
        payload: count
    }
}
export function setCard(payload) {
    return {
        type: SET_CARD,
        payload
    }
}
export function isSelectedAll() {
    return {
        type: IS_SELECTED_ALL,
    }
}
export function setSelectedEventsCard() {
    return {
        type: SET_SELECTED_EVENT_CARDS,
    }
}
export function getActIitems() {
    return {
        type: GET_ACT_I_ITEMS,
    }
}

export function getActIIitems() {
    return {
        type: GET_ACT_II_ITEMS,
    }
}

export function getActIIIitems() {
    return {
        type: GET_ACT_III_ITEMS,
    }
}