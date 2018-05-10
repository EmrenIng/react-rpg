import React from 'react'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'
import store from '../../config/store'
import './style.css'
import { nextTile } from '../player/movement.js'
import { tilesInv } from '../../data/map/2'

// export let currentInv = ['stick','rope']

export const item = function item(nextTile) {
    if (nextTile === 5) {
    alert("Item Aquired")
    const newArr = Object.assign([...tilesInv], {0: [0, 5, 6, 2, 0]})
    console.log(Object.assign([...tilesInv], {0: [0, 5, 5, 0, 0]}))
    store.dispatch({
        type: 'ADD_ITEM',
        payload: {
            tilesInv: newArr,
        }
    })
    }
}

export default function handleInventory(inventory)  {

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    function handleKeyDown (e) {
        e.preventDefault()
        switch(e.keyCode) {
            case 73:
                // currentInv.push('fish')
                hideInv();
                // console.log(currentInv)
                //refresh Function. - for state change. 
                return 
        }

        function hideInv() {
            var x = document.getElementById("hideDiv");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    }
    return inventory
}

