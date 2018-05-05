
const initinalState = {
    tiles: [],

}

const mapReducer = (state=initinalState, action) => {
    switch(action.type) {
        case 'ADD_TILES':
            return {
                ...action.payload
            }
        default: 
            return state
    }
}

export default mapReducer 