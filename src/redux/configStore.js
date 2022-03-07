import {combineReducers, createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {FilmReducer} from './reducers/FilmReducer';
import {UserReducer} from './reducers/UserReducer'

const rootReducer = combineReducers({
    FilmReducer,
    UserReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;