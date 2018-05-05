import React from 'react'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'
import store from '../../config/store'
import './style.css'

export let currentInv = ['stick','rope']
export default function handleInventory(inventory)  {


    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    function handleKeyDown (e) {
        e.preventDefault()
        switch(e.keyCode) {
            case 73:
                currentInv.push('fish')
                console.log(currentInv)
                return 
        }
    }

    

    return inventory
}

