import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'
import './style.css'

// Create an Id, map id to tiles. Use id. 

function getTileSprite(type) {
    switch(type) {
        case 0:
            return 'grass'
        case 2:
            return 'grass1'
        case 3:
            return 'grass2'
        case 4:
            return 'grass3'
        case 5:
            return 'chest'
        case 6:
            return 'bush'
        case 7:
            return 'rock'
        case 8:
            return 'bush'
        case 9: 
            return 'bush1'
        case 10: 
            return 'bush2'
        case 11: 
            return 'shroom'
    }
}

function MapTile(props) {
    return <div 
        className={`tile ${getTileSprite(props.tile)}`}
        // onclick={clickChest()}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE,
        }}
        >
        

        </div>
                
}

function MapRow(props) {
    return <div className="row">
    {
        props.tiles.map( tile => <MapTile tile={tile} />)
    }
    
    </div>
    
}



function Map(props) {
    return (
        <div 
            style={{
                width: '768px',
                height: '410px',
                backgroundColor: '#474d20',
                border: '4px soild white',
            }}
        >
        {
            props.tiles.tiles.map( row => <MapRow tiles={row} />)
        }
        
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map)