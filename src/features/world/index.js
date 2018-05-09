import React from 'react'
import Map from '../map'
import Player from "../player"
import Inventory from '../inventory'
import { tiles } from '../../data/map/1'
import { tilesInv } from '../../data/map/2'
import store from '../../config/store'

function World(props) {
    store.dispatch({ type: 'ADD_TILES', 
        payload: {
            tiles: tiles,
        }
})

    return (
        <div 
            style={{
                position:'relative',
                width: '840px',
                height: '420px',
                margin: '20px auto',
            }}
            >
            <Map />
            <Player tilesInv={tilesInv} />
        </div>
    )
}

export default World