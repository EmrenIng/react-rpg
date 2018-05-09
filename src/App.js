import React, { Component } from 'react'
import World from './features/world'
import Inventory from './features/inventory'
import { tilesInv } from './data/map/2'
import './index.css'


class App extends Component {
  render() {
    return (
      <div>
        <Inventory tilesInv={tilesInv} />
        <World />
      </div>

    );
  }
}

export default App;
