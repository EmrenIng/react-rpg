import store from '../../config/store'
import { tilesInv } from '../../data/map/2'
import { item } from '../inventory/inventory'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'

export default function handleMovement(player) {
// This creates movement based on the string, which is refrenced lower down as a keystroke.
    function getNewPosition(oldPos, direction) {
        switch(direction) {
            case 'WEST': // x,y 
                return [ oldPos[0]-SPRITE_SIZE, oldPos[1] ]
            case 'NORTH':
                return [ oldPos[0], oldPos[1]-SPRITE_SIZE ]
            case 'EAST':
                return [ oldPos[0]+SPRITE_SIZE, oldPos[1] ]
            case 'SOUTH':
                return [ oldPos[0], oldPos[1]+SPRITE_SIZE ]
        } 
    }
// Used to map the Sprite and Direction. 
    function getSpriteLocation(direction, walkIndex) {
        switch(direction) {
            case 'WEST':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*3}px`
            case 'NORTH':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*4}px`
            case 'EAST':
                return  `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE}px`
            case 'SOUTH':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*2}px` 
        }
    }
// This indexs the sprite sheet so that they can be grabbed. 
    function getWalkIndex() {
        const walkIndex = store.getState().player.walkIndex
        return walkIndex >= 8 ? 0 : walkIndex + 1
    }
// Creates the boundries on the outside of the map. 
// The sprite size is removed so the sprite can not move of by one 64x64 pace.
    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
               (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
            
    }
// If a Tile is under 7 in the Matrix map it will not be passible. 
    function observeBlocks(oldPos, newPos) {
        const tiles = store.getState().map.tiles
        const y = newPos[1] / SPRITE_SIZE
        const x = newPos[0] / SPRITE_SIZE
        const nextTile = tiles.tiles[y][x]
        item(nextTile) 
        return  nextTile < 7 
            console.log(x, y)
        
    }
// This is a store dispatch for Redux that helps gather all these variables to move the player. 
// This is an Action that is sent to the Reducer which in turn is sent to the store. 
    function directionMove(newPos, direction) {
        const walkIndex = getWalkIndex()
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos,
                direction: direction,
                walkIndex: walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex),
            }
        })
    }
// Gets the oldPosition and creates a New one. Makes sure that the next tile is terain that can be moved over. 
    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)
        
        if (observeBoundaries(oldPos, newPos) && observeBlocks(oldPos, newPos))
            directionMove(newPos, direction)
        
    }
// This switch listens to the keys pressed and then sets the direction based off it. 
    function handleKeyDown (e) {
        e.preventDefault()

        switch(e.keyCode) {
            //WSAD
            case 65:
                return attemptMove('WEST')
            case 87:
                return attemptMove('NORTH')
            case 68:
                return attemptMove('EAST')
            case 83:
                return attemptMove('SOUTH')
            //ARROWS
            case 37:
                return attemptMove('WEST')
            case 38:
                return attemptMove('NORTH')
            case 39:
                return attemptMove('EAST')
            case 40:
                return attemptMove('SOUTH')
            
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}