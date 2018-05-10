import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer'
import invReducer from '../features/inventory/reducer'

// If a React componet has a state needs a Reducer as it will be handled by Redux. 
// The Reducer is a javascript object that has keys. 
// This Store is also the RootReducer. Here it combines all the reducers and allows for them to be held in the store. 
const rootReducer = combineReducers ({
    player: playerReducer,
    map: mapReducer,
    inventory: invReducer,
})

const store = createStore (
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

export default store