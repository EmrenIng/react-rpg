import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './playerWalk.png'
import handleMovement from './movement'


function Player(props) {
    return (
        <div 
            style= {{
                position: 'absolute',
                top: props.position[1], // Y-Axis
                left: props.position[0], // X-Axis
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: props.spriteLocation,
                width: '64px',
                height: '64px',
            }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player, //Spread operator so item dont have to be individually typed. 
    }
}

export default connect(mapStateToProps)(handleMovement(Player))// First is for the map. 2nd is for player. 

