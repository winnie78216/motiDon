import { applyMiddleware, combineReducers, createStore } from 'redux'
import meetingNotesReducer from '../views/MeetingNotes/meetingNotesReducer';
import thunkMiddleware from 'redux-thunk'
import {routerReducer} from 'react-router-redux'

const reducer = combineReducers({ // all reducers are combined into one reducer
    meetingNotesReducer,
    routing: routerReducer,
});

const store = createStore(
    reducer, // Once store got dispatched any action, all of reducers are called.
    /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware)
);

export default store;