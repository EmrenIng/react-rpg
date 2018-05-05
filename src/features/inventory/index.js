import React from 'react'
import { connect } from 'react-redux'
import handleInventory from './inventory'
import { SPRITE_SIZE } from '../../config/constants'
import { currentInv } from './inventory'
import './style.css'

// function getTileSprite(type) {
//     switch(type) {
//         case 'chest':
//             return console.log("test")
//     }
// }

// function grabItem() {
//     function handleKeyDown (e) {
//         e.preventDefault()
//         if (e.keyCode == 73){
//                 return console.log({currentInv})
//         }
//     }
// }


function Inventory(props) {
    return (
        <div 
            style= {{
                position: 'absolute',
                width: '384px',
                height: '192px',
                backgroundColor: 'brown',
                border: '4px soild white',
            }}
        > 
        { currentInv }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.inventory, //Spread operator so item dont have to be individually typed. 
    }
}

export default connect(mapStateToProps)(handleInventory(Inventory))// First is for the map. 2nd is for player. 

// export default connect(inventoryStateToProps)(Inventory)