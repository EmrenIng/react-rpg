
const initinalState = {
    tiles: [],

}

const invReducer = (state=initinalState, action) => {
    switch(action.type) {
        case 'ADD_TILES':
            return {
                ...action.payload
            }
        default: 
            return state
    }
}

export default invReducer 