import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'
import './style.css'

function getTileSprite(type) {
    switch(type) {
        case 0:
            return 'grass'
        case 4:
            return 'chest'
        case 6:
            return 'rock'
        case 7:
            return 'tree'
    }
}

function MapTile(props) {
    return <div 
        className={`tile ${getTileSprite(props.tile)}`}
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
                height: '384px',
                backgroundColor: 'green',
                border: '4px soild white',
            }}
        >
        {
            props.tiles.map( row => <MapRow tiles={row} />)
                // row.map( tile => <MapTile value={tile} />))
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