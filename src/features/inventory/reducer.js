const initinalState = {
    tilesInv: [
    [0,6,5,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],]
}
// This needs to be changed to be an empty [] however the error in pathing must be found first
// So it will show up correctly. 

const invReducer = (state=initinalState, action) => {
    switch(action.type) {
        case 'ADD_TILESINV':
            return {
                ...action.payload // This allows for tiles. 
            }
        case 'ADD_ITEM':
            return {
                ...action.payload //This allows for items to be updated. 
            }
        default: 
            return state
    }
}
export default invReducer 