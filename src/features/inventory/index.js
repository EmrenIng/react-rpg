import React from 'react'
import { connect } from 'react-redux'
import handleInventory from './inventory'
import { SPRITE_SIZE } from '../../config/constants'
import { currentInv } from './inventory'
import './style.css'

function getInvSprite(type) {
    switch(type) {
        case 0:
            return 'wood'
        case 5:
            return 'cheese'
        case 6:
            return 'stick'
        case 7:
            return 'strawberry'
    }
}


function InvTile(props) {
    return <div className={`invTile ${getInvSprite(props.tile)}`}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE,
        }}
    
    >
    </div>
}

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
                backgroundColor: 'brown',
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
        ...state.inventory, //Spread operator so item dont have to be individually typed. 
    }
}

export default connect(mapStateToProps)(handleInventory(Inventory))// First is for the MapStateToProps/ 2nd is for the MapDispatchToProps

