import { createStore, combineReducers } from 'redux';
import eventCardsReducer from '../reducers/eventCardsReducer';
const rootReducer = combineReducers(
    { eventCardsReducer : eventCardsReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;