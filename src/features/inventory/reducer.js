const initinalState = {
    tilesInv: [
    [0,6,5,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],]
}

const invReducer = (state=initinalState, action) => {
    switch(action.type) {
        case 'ADD_TILESINV':
            return {
                ...action.payload
            }
        case 'ADD_ITEM':
            return {
                ...action.payload
            }
        default: 
            return state
    }
}
export default invReducer 