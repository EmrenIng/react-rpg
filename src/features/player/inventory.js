import React from 'react'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'
import store from '../../config/store'
import Modal from './modal'
import './style.css'


export default function handleInventory(player)  {

    const currentInv = ['stick','rope']
    // const state = false


    // function showInventory(state) {
    //     this.setState({ show: true })
    // }

    // function hideInventory() {
    //     this.setState({ show: false })
    // }

    // switch(state) {
    //     case 1:
    //         return showInventory()
    //     case 2:
    //         return showInventory()
    //     default: 
    //         return hideInventory() 
    // }

    // function handleKeyDown (e) {
    // e.preventDefault()
    // switch(e.keyCode) {
    //     case 73:
    //         return console.log(currentInv)
    // }

    // function invKey() {
    //     const state = false
    //     if (state === true) {
    //         state = false
    //     } else {
    //         state = true
    //     }
    // }

    // }
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    function handleKeyDown (e) {
        e.preventDefault()
        switch(e.keyCode) {
            case 73:
                return console.log(currentInv)
        }
    }

    
    const state = { show: false }


function showModal(showHideClassName) {
    this.setState({ show: true })
}

function hideModal(showHideClassName) {
    this.setState({ show: false })
}

if (state == false) {
    showModal()
} else {
    hideModal()
}

    return (
        <div>
            <Modal onKeyPress={handleKeyDown} show={state.show} handleClose={hideModal} />
        </div>
    )
}

const container = document.createElement("div");
document.body.appendChild(container);