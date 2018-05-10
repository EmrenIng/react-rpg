import React from 'react'
import { connect } from 'react-redux'
import handleInventory from './inventory'
import { SPRITE_SIZE } from '../../config/constants'
// import { currentInv } from './inventory'
import './style.css'

//This function allow for the tiles to have sprites. 
// It asigns each tile its own string depending upon the # which is a reference to a # in the Matrix.
function getInvSprite(type) {
    switch(type) {
        case 0:
            return 'wood'
        case 5:
            return 'cheese'
        case 6:
            return 'stick'
        case 2:
            return 'straw'
    }
}

// This sets the hightxWidth of the tiles and gives the tiles the class of the corresponding string above. 
function InvTile(props) {
    return <div className={`invTile ${getInvSprite(props.tile)}`}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE,
        }}
    
    >
    </div>
}
// Puts our tiles within a Row Div.
function InvRow(props) {
    return <div className='row'>
    {
        props.tilesInv.map( tile => <InvTile tile={tile} />)
    }
    </div>
}




function Inventory(props) {
    return (
        <div 
            id='hideDiv'
            style= {{
                position: 'absolute',
                width: '320px',
                height: '192px',
                backgroundColor: '#381a1a',
                border: '4px soild white',
                display: 'none',
            }}
        > {
            props.tilesInv.map( row => <InvRow tilesInv={row} />)
        }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.inventory, //Spread operator so items dont have to be individually typed. 
    }
}

export default connect(mapStateToProps)(handleInventory(Inventory))// First is for the mapStateToProps the 2nd is MapDispatchToProps 

