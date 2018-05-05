import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer'

// React componet that has a state needs a Reducer. The reducer is a javascript object that has keys. Reducer is how its accesses. 
// Allows for movement?
const rootReducer = combineReducers ({
    player: playerReducer,
    map: mapReducer,
})

const store = createStore (
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store