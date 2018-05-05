import React, { Component } from 'react'
import World from './features/world'
import Inventory from './features/inventory'
import { tiles } from './data/map/2'
import './index.css'


class App extends Component {
  render() {
    return (
      <div>
        <Inventory />
        <World />
      </div>

    );
  }
}

export default App;
