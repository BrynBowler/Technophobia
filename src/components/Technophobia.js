import React from 'react';
import ReactDOM from "react-dom";

import Hexes from './Hexes/Hexes.js'
import ShopPage from './Hexes/HexPages/ShopPage.js'
import { render } from '@testing-library/react';

class Technophobia extends React.Component {

    state = {
        showShop: false
    }

    ShopToggle = e => console.log(123); //this.setState({ showShop: !this.state.showComponent3 })
    
    render() {
        return(
        <div>
            <Hexes />
            <ShopPage ShopToggle={this.ShopToggle}/>
        </div>
        )
    }
}

export default Technophobia